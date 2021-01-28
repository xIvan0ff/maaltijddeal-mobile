export type LatLng = {
    lat: number
    lng: number
}

export interface Address {
    address: string
    position: LatLng
    postCode: string
}
