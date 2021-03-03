import {
    CHOOSE_ADDRESS,
    LocationActionTypes,
    SET_LOCAL_ADDRESS,
    SET_LOCAL_ADDRESS_SUCCESS,
    USE_LOCAL_ADDRESS,
} from "./actions"
import { LocationState } from "./types"

const initialLocationState: LocationState = {
    selectedAddress: {
        address: "ul. Stara Planina 11",
        position: {
            lat: 42.5,
            lng: 27.46,
        },
        postCode: "8000",
    },
    localAddressProvider: "none",
}

export function locationReducer(
    state: LocationState = initialLocationState,
    action: LocationActionTypes
): LocationState {
    switch (action.type) {
        case CHOOSE_ADDRESS:
            return {
                ...state,
                selectedAddress: action.payload,
            }
        case SET_LOCAL_ADDRESS_SUCCESS:
            return {
                ...state,
                localAddress: action.payload.address,
                localAddressProvider: action.payload.locationProvider,
            }

        case USE_LOCAL_ADDRESS:
            if (state.localAddress) {
                return {
                    ...state,
                    selectedAddress: { ...state.localAddress },
                }
            }
            return state

        default:
            return state
    }
}
