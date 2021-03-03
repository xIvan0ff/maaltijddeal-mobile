import { usePermissions } from "expo-permissions"
import { useEffect, useState } from "react"

import * as Permissions from "expo-permissions"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@store/root"
import { actions } from "@store/root"
import { LocationProvider } from "@store/location/types"

const { PermissionStatus } = Permissions

export const useStackGeoLocation = (navigation: any) => {
    const [permission, askPermission] = usePermissions(Permissions.LOCATION, {
        ask: false,
    })
    const dispatch = useDispatch()
    const locationState = useSelector((state: RootState) => state.location)

    const [fetchedPermission, setFetchedPermission] = useState(false)

    useEffect(() => {
        const unsubcribe = navigation.addListener("transitionEnd", () => {
            if (!permission?.granted && permission?.canAskAgain) {
                askPermission().then(() => {
                    setFetchedPermission(true)
                })
            } else {
                setFetchedPermission(true)
            }
        })

        return () => {
            unsubcribe()
        }
    }, [permission])

    if (!locationState.localAddress && fetchedPermission) {
        dispatch(actions.location.setLocalAddress())
    }

    return {
        permission,
        askPermission,
        locationState,
        dispatch,
    }
}
