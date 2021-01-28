import * as React from "react"
import { View, Text } from "@components/Themed"
import { Image, StyleSheet } from "react-native"

type LatLng = {
    lat: number
    lng: number
}

interface IStaticMapProps {
    apiKey: string
    center: LatLng
    zoom: number
    size: {
        width: number
        height: number
    }
    maptype: string
    markers: {
        color?: string
        label?: string
        position: LatLng
    }[]
}

export const StaticMap: React.FC<IStaticMapProps> = (props) => {
    const center = `${props.center.lat},${props.center.lng}`
    const size = `${props.size.width}x${props.size.height}`

    const markers = props.markers
        .map(
            (marker) => `markers=${marker.position.lat},${marker.position.lng}`
        )
        .join("&")

    const source = `https://maps.googleapis.com/maps/api/staticmap?center=${center}&zoom=${props.zoom}&size=${size}&maptype=${props.maptype}&${markers}&key=${props.apiKey}`

    return (
        <View>
            <Image
                style={{
                    width: "100%",
                    height: props.size.height,
                }}
                source={{
                    uri: source,
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({})
