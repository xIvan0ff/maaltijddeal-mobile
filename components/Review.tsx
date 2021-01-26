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
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <View style={ReviewStyles.textContainer}>
                    <View style={ReviewStyles.nameReviewContainer}>
                        <Text
                            style={ReviewStyles.nameText}
                            colorName="secondary"
                        >
                            {review.name}
                        </Text>
                        <Star
                            rating={review.score}
                            containerStyle={ReviewStyles.starContainer}
                            imageStyle={ReviewStyles.star}
                        />
                    </View>
                    <View style={ReviewStyles.dateContainer}>
                        <Text style={ReviewStyles.dateText}>
                            {review.dateCreated}
                        </Text>
                    </View>
                </View>
            </View>
            <Text style={ReviewStyles.description}>{review.comment}</Text>
        </View>
    )
}
const starSize = 20
const ReviewStyles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "column",
        borderBottomWidth: 2,
        borderColor: "#A0A0A0",
        paddingVertical: 10,
    },
    nameText: {
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
        fontSize: 14,
    },
    description: {
        fontSize: 16,
    },
    textContainer: {
        flexDirection: "row",
    },
    nameReviewContainer: {
        flexDirection: "column",
        flex: 2,
    },
    dateContainer: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
})
