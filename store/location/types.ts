import { Address, LatLng } from "types/location"

export interface LocationState {
    selectedAddress: Address
    localAddress?: Address
}
