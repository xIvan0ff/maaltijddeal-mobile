import { LatLng } from "types/location"
import publicIP from "react-native-public-ip"
import axios from "axios"

const serviceProvider = "http://ip-api.com/json/"
export const getIPLocation = async (): Promise<LatLng | null> => {
    try {
        const ip = await publicIP()
        if (ip) {
            try {
                const request = await axios.get(`${serviceProvider}${ip}`)

                if (request) {
                    try {
                        return { lat: request.data.lat, lng: request.data.lon }
                    } catch {
                        return null
                    }
                }
                return null
            } catch {
                return null
            }
        }
        return null
    } catch {
        return null
    }
}
