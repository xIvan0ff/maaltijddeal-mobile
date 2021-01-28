import { usePermissions } from "expo-permissions"
import { useEffect } from "react"

import * as Permissions from "expo-permissions"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@store/root"
import { actions } from "@store/store"

export const useStackGeoLocation = (navigation: any) => {
    const [permission, askPermission] = usePermissions(Permissions.LOCATION)
    const dispatch = useDispatch()
    const locationState = useSelector((state: RootState) => state.location)

    useEffect(() => {
        const unsubcribe = navigation.addListener("transitionEnd", () => {
            if (!permission?.granted) {
                askPermission()
            }
        })

        return () => {
            unsubcribe()
        }
    }, [permission])

    if (permission?.granted && !locationState.localAddress) {
        dispatch(actions.location.setLocalAddress())
    }

    return {
        permission,
        askPermission,
        locationState,
        dispatch,
    }
}
