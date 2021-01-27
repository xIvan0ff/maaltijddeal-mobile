import { googleMapsApiKey } from "@config/keys"

export const reverseGeocode = async (lat: number, lng: number) => {
    const response = await fetch(
        "https://maps.googleapis.com/maps/api/geocode/json?address=" +
            lat +
            "," +
            lng +
            "&key=" +
            googleMapsApiKey
    )
    const responseJson = await response.json()
    return responseJson.results[0].formatted_address
}
