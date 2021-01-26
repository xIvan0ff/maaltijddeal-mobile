import { Restaurant } from "../types"
import React from "react"
import { ScrollView, StyleSheet } from "react-native"
import { View, Text } from "./Themed"
import { Star } from "@components/Star"
import { spacerStyles } from "@styles/spacer"
import { ReviewComponent } from "@components/Review"

interface IRestaurantReviews {
    restaurant: Restaurant
}

export const RestaurantReviews: React.FC<IRestaurantReviews> = ({
    restaurant,
}) => {
    return (
        <View style={ReviewsStyles.container}>
            <View style={ReviewsStyles.nameLine}>
                <Text style={ReviewsStyles.nameText}>{restaurant.name}</Text>
                <View style={ReviewsStyles.ratingContainer}>
                    <Star
                        containerStyle={ReviewsStyles.starContainer}
                        imageStyle={ReviewsStyles.starStyle}
                        rating={restaurant.rating}
                    />
                    <Text style={ReviewsStyles.ratingText}>
                        ({restaurant.ratingCount})
                    </Text>
                </View>
            </View>
            <View style={ReviewsStyles.reviewLine}>
                <Text style={ReviewsStyles.reviewCount}>
                    {restaurant.reviews.length} Review
                    {restaurant.reviews.length > 1 ? "s" : ""}
                </Text>
            </View>
            <ScrollView style={ReviewsStyles.reviewContainer}>
                {restaurant.reviews.map((review) => (
                    <ReviewComponent review={review} key={review.id} />
                ))}
            </ScrollView>
        </View>
    )
}
const starSize = 30
const ReviewsStyles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        ...spacerStyles.pxmd,
    },
    nameLine: {
        width: "100%",
        height: "10%",
        borderBottomWidth: 2,
        borderColor: "black",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
    },
    starContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    starStyle: {
        height: starSize,
        width: starSize,
    },
    nameText: {
        fontSize: 24,
    },
    ratingText: {
        fontSize: starSize,
    },
    ratingContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    reviewLine: {
        width: "100%",
        height: "10%",
        borderBottomWidth: 2,
        borderColor: "black",
        justifyContent: "center",
    },
    reviewCount: {
        fontSize: 24,
    },
    reviewContainer: {
        flexDirection: "column",
    },
})
