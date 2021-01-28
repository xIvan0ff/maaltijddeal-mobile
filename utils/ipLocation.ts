import { LatLng } from "types/location"
import publicIP from "react-native-public-ip"
import axios from "axios"

const serviceProvider = "http://ip-api.com/json/"
export const getIPLocation = async (): Promise<LatLng> => {
    return publicIP()
        .then((ip) => {
            if (ip) {
                return axios.get(`${serviceProvider}${ip}`)
            }

            throw new Error("No IP")
        })
        .then((response) => {
            if (response) {
                return { lat: response.data.lat, lng: response.data.lon }
            }

            throw new Error("No response from position provider")
        })
}
