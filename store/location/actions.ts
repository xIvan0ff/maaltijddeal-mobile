import { Address } from "types/location"

export const CHOOSE_ADDRESS = "CHOOSE_ADDRESS"
export const SET_LOCAL_ADDRESS = "SET_LOCAL_ADDRESS"
export const USE_LOCAL_ADDRESS = "USE_LOCAL_ADDRESS"

interface ChooseAddressAction {
    type: typeof CHOOSE_ADDRESS
    payload: Address
}

interface SetLocalAddressAction {
    type: typeof SET_LOCAL_ADDRESS
    payload: Address
}

interface UseLocalAddressAction {
    type: typeof USE_LOCAL_ADDRESS
}

export type LocationActionTypes =
    | ChooseAddressAction
    | SetLocalAddressAction
    | UseLocalAddressAction

export const locationActions = {
    chooseAddress(address: Address): LocationActionTypes {
        return {
            type: CHOOSE_ADDRESS,
            payload: address,
        }
    },
    setLocalAddress(address: Address): LocationActionTypes {
        return {
            type: "SET_LOCAL_ADDRESS",
            payload: address,
        }
    },
    useLocalAddress(): LocationActionTypes {
        return {
            type: "USE_LOCAL_ADDRESS",
        }
    },
}
