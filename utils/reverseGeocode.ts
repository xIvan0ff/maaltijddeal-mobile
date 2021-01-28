import { googleMapsApiKey } from "@config/keys"
import { LatLng } from "types/location"

interface Geocode {
    position: LatLng
    address: string
    postCode: string
}

export const reverseGeocode = async (
    lat: number,
    lng: number
): Promise<Geocode> => {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${lat},${lng}&key=${googleMapsApiKey}`

    const response = await fetch(url)
    const responseJson = await response.json()

    if (responseJson.results.length > 0) {
        const place = responseJson.results[0]

        const postCode = place.address_components.find(
            (component: any) => component.types[0] === "postal_code"
        ).long_name

        return {
            position: {
                lat,
                lng,
            },
            address: place.formatted_address,
            postCode,
        }
    }

    throw new Error("Invalid address")
}
