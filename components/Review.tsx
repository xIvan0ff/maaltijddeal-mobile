import React from "react"
import { Review } from "../typesOld"
import { StyleSheet } from "react-native"
import { View, Text } from "./Themed"
import { textStyles } from "@styles/text"
import { Star } from "@components/Star"
import { borderStyles } from "@styles/border"
import { createStyles } from "@styles/createStyles"
import { spacerStyles } from "@styles/spacer"

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
                        <Text style={textStyles.title} colorName="secondary">
                            {review.name}
                        </Text>
                        <Star
                            rating={review.score}
                            containerStyle={ReviewStyles.starContainer}
                            imageStyle={ReviewStyles.star}
                        />
                    </View>
                    <View style={ReviewStyles.dateContainer}>
                        <Text style={textStyles.bold}>
                            {review.dateCreated}
                        </Text>
                    </View>
                </View>
            </View>
            <Text>{review.comment}</Text>
        </View>
    )
}
const starSize = 20
const ReviewStyles = createStyles({
    container: {
        alignSelf: "stretch",
        flexDirection: "column",
        ...borderStyles.borderBottom,
        ...spacerStyles.pymd,
    },
    starContainer: {
        flexDirection: "row",
        height: starSize,
    },
    star: {
        height: starSize,
        width: starSize,
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
