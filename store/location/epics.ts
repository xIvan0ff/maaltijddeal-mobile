import { RootState } from "@store/root"
import { Epic, ofType } from "redux-observable"
import { LocationActionTypes, SET_LOCAL_ADDRESS } from "./actions"

import * as Location from "expo-location"

import { mergeMap, switchMap } from "rxjs/operators"
import { reverseGeocode } from "@utils/reverseGeocode"
import { actions } from "@store/root"
import { getIPLocation } from "@utils/ipLocation"
import { LocationProvider } from "./types"
import { LatLng } from "types/location"

type LocationEpic = Epic<LocationActionTypes, LocationActionTypes, RootState>

export const setLocalAddressEpic: LocationEpic = (action$) =>
    action$.pipe(
        ofType(SET_LOCAL_ADDRESS),
        switchMap(async () => {
            try {
                const { granted } = await Location.getPermissionsAsync()

                let position: LatLng
                let provider: LocationProvider

                if (granted) {
                    position = await Location.getCurrentPositionAsync().then(
                        (position) => ({
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                        })
                    )

                    provider = "location"
                } else {
                    position = await getIPLocation()

                    provider = "ip"
                }

                const geocode = await reverseGeocode(position.lat, position.lng)

                return actions.location.setLocalAddressSuccess(
                    {
                        address: geocode.address,
                        position: geocode.position,
                        postCode: geocode.postCode,
                    },
                    provider
                )
            } catch {
                return actions.location.setLocalAddressFailed()
            }
        })
    )
