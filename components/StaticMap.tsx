import { googleMapsApiKey } from "@config/keys"
import * as React from "react"
import { LatLng } from "types/location"
import { StaticMap as LibStaticMap } from "./lib/StaticMap"
import { View, Text } from "./Themed"

interface IStaticMapProps {
    center: LatLng
    height: number
}

export const StaticMap: React.FC<IStaticMapProps> = (props) => {
    return (
        <LibStaticMap
            apiKey={googleMapsApiKey}
            center={props.center}
            maptype="roadmap"
            size={{
                width: 600,
                height: props.height,
            }}
            zoom={13}
            markers={[
                {
                    position: props.center,
                },
            ]}
        />
    )
}
