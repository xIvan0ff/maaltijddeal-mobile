import { Address, LatLng } from "types/location"

export interface LocationState {
    selectedAddress: Address
    localAddress?: Address
    localAddressProvider: LocationProvider
}

export type LocationProvider = "location" | "ip" | "none"
