import { Address } from "types/location"
import { LocationProvider } from "./types"

export const CHOOSE_ADDRESS = "CHOOSE_ADDRESS"

export const SET_LOCAL_ADDRESS = "SET_LOCAL_ADDRESS"
export const SET_LOCAL_ADDRESS_SUCCESS = "SET_LOCAL_ADDRESS_SUCCESS"
export const SET_LOCAL_ADDRESS_FAILED = "SET_LOCAL_ADDRESS_FAILED"

export const USE_LOCAL_ADDRESS = "USE_LOCAL_ADDRESS"

interface ChooseAddressAction {
    type: typeof CHOOSE_ADDRESS
    payload: Address
}

interface SetLocalAddressActionSuccess {
    type: typeof SET_LOCAL_ADDRESS_SUCCESS
    payload: {
        address: Address
        locationProvider: LocationProvider
    }
}

interface SetLocalAddressActionFailed {
    type: typeof SET_LOCAL_ADDRESS_FAILED
}

interface SetLocalAddressAction {
    type: typeof SET_LOCAL_ADDRESS
}

interface UseLocalAddressAction {
    type: typeof USE_LOCAL_ADDRESS
}

export type LocationActionTypes =
    | ChooseAddressAction
    | UseLocalAddressAction
    | SetLocalAddressAction
    | SetLocalAddressActionSuccess
    | SetLocalAddressActionFailed

export const locationActions = {
    chooseAddress(address: Address): LocationActionTypes {
        return {
            type: CHOOSE_ADDRESS,
            payload: address,
        }
    },

    setLocalAddress(): LocationActionTypes {
        return {
            type: "SET_LOCAL_ADDRESS",
        }
    },
    setLocalAddressSuccess(
        address: Address,
        locationProvider: LocationProvider
    ): LocationActionTypes {
        return {
            type: "SET_LOCAL_ADDRESS_SUCCESS",
            payload: { address, locationProvider },
        }
    },
    setLocalAddressFailed(): LocationActionTypes {
        return {
            type: "SET_LOCAL_ADDRESS_FAILED",
        }
    },
    useLocalAddress(): LocationActionTypes {
        return {
            type: "USE_LOCAL_ADDRESS",
        }
    },
}
