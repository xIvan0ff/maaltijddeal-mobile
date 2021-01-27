import { LatLng } from "types/location"
import publicIP from "react-native-public-ip"
import axios from "axios"

const serviceProvider = "http://ip-api.com/json/"
export const getIPLocation = (): LatLng | null => {
    publicIP()
        .then((ip) => {
            axios
                .get(`${serviceProvider}${ip}`)
                .then((data: any) => {
                    data = JSON.parse(data)
                    return { lat: data.lat, lng: data.lon }
                })
                .catch((error) => {
                    console.log(error)
                    return null
                })
        })
        .catch((error) => {
            console.log(error)
            return null
        })
    return null
}
