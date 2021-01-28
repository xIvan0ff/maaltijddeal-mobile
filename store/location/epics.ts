import { RootState } from "@store/root"
import { Epic, ofType } from "redux-observable"
import { LocationActionTypes, SET_LOCAL_ADDRESS } from "./actions"

import * as Location from "expo-location"

import { mergeMap, switchMap } from "rxjs/operators"
import { reverseGeocode } from "@utils/reverseGeocode"
import { actions } from "@store/root"
import { getIPLocation } from "@utils/ipLocation"

type LocationEpic = Epic<LocationActionTypes, LocationActionTypes, RootState>

export const setLocalAddressEpic: LocationEpic = (action$) =>
    action$.pipe(
        ofType(SET_LOCAL_ADDRESS),
        switchMap(() =>
            Location.requestPermissionsAsync()
                .then(({ granted }) => {
                    if (granted) {
                        return Location.getCurrentPositionAsync().then(
                            (position) => ({
                                lat: position.coords.latitude,
                                lng: position.coords.longitude,
                            })
                        )
                    } else {
                        return getIPLocation()
                    }
                })
                .then((position) => reverseGeocode(position.lat, position.lng))
                .then((geocode) =>
                    actions.location.setLocalAddressSuccess({
                        address: geocode.address,
                        position: geocode.position,
                        postCode: geocode.postCode,
                    })
                )
                .catch(() => {
                    return actions.location.setLocalAddressFailed()
                })
        )
    )
