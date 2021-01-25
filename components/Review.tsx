import React from "react"
import { Review } from "../types"
import { StyleSheet } from "react-native"
import { View, Text } from "./Themed"
import { textStyles } from "@styles/text"
import { Star } from "@components/Star"

interface IReviewComponent {
    review: Review
}

export const ReviewComponent: React.FC<IReviewComponent> = ({ review }) => {
    return (
        <View style={ReviewStyles.container}>
            <Text style={ReviewStyles.nameText}>{review.name}</Text>
            <Star
                rating={review.score}
                containerStyle={ReviewStyles.starContainer}
                imageStyle={ReviewStyles.star}
            />
            <Text style={ReviewStyles.dateText}>{review.dateCreated}</Text>
            <Text style={ReviewStyles.description}>{review.comment}</Text>
        </View>
    )
}
const starSize = 20
const ReviewStyles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "column",
        borderBottomWidth: 1,
        borderColor: "black",
        paddingVertical: 10,
    },
    nameText: {
        color: "cyan",
        fontSize: 30,
        ...textStyles.bold,
    },
    starContainer: {
        flexDirection: "row",
        height: starSize,
    },
    star: {
        height: starSize,
        width: starSize,
    },
    dateText: {
        fontSize: 18,
    },
    description: {
        fontSize: 16,
    },
})
