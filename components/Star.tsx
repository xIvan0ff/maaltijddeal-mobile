import React from "react"
import { Image, StyleProp, StyleSheet } from "react-native"
import { match } from "@utils/match.ts"
import { View } from "./Themed"
import { cn } from "@utils/cn"

const emptyStar = require("@assets/images/emptyStar.png")
const fullStar = require("@assets/images/fullStar.png")
const halfStar = require("@assets/images/halfStar.png")

type StarType = "full" | "half" | "empty"

interface IStarProps {
    rating: number
    imageStyle?: any
    containerStyle?: any
}

interface IStarObjectProps {
    starType: StarType
    imageStyle: any
}
const stars: any = []

const StarObject: React.FC<IStarObjectProps> = ({ starType, imageStyle }) => {
    let source = match(starType, {
        full: fullStar,
        empty: emptyStar,
        half: halfStar,
    })
    return <Image style={cn(imageStyle, styles.starStyle)} source={source} />
}

export const Star: React.FC<IStarProps> = ({
    rating,
    containerStyle,
    imageStyle,
}) => {
    const realRating = Math.floor(rating / 2)

    const full = realRating
    const half = rating % 2 ? true : false
    const empty = 5 - realRating - +half
    let keyCount = 0
    return (
        <View style={containerStyle}>
            {range(full).map((i) => (
                <StarObject
                    imageStyle={imageStyle}
                    starType="full"
                    key={keyCount++}
                />
            ))}
            {half && (
                <StarObject
                    imageStyle={imageStyle}
                    starType="half"
                    key={keyCount++}
                />
            )}
            {range(empty).map((i) => (
                <StarObject
                    imageStyle={imageStyle}
                    starType="empty"
                    key={keyCount++}
                />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    starStyle: {
        marginHorizontal: 2,
    },
})

const range = (n: number) => {
    const array: number[] = []
    for (let i = 0; i < n; i++) {
        array.push(i)
    }

    return array
}
