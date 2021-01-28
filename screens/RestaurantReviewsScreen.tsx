import { Restaurant, Review, WorkingHour } from "../typesOld"
import React from "react"
import { ScrollView, StyleSheet } from "react-native"
import { View, Text } from "@components/Themed"
import { Star } from "@components/Star"
import { spacerStyles } from "@styles/spacer"
import { ReviewComponent } from "@components/Review"
import { containerStyles } from "@styles/container"
import { textStyles } from "@styles/text"
import { borderStyles } from "@styles/border"
import { createStyles } from "@styles/createStyles"

interface IRestaurantReviewsScreen {
    restaurant: Restaurant
}

const reviews: Review[] = [
    {
        id: "id",
        dateCreated: "19-09-2019",
        dealId: "dealId",
        comment:
            "commenttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt",
        name: "Alex",
        restaurantId: "restaurantId",
        score: 7,
        visible: true,
    },
    {
        id: "id2",
        dateCreated: "11-12-2020",
        dealId: "dealId",
        comment:
            "commenttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt",
        name: "John",
        restaurantId: "restaurantId",
        score: 4,
        visible: true,
    },
]
const workingHours: WorkingHour[] = [
    {
        workDay: 0,
        openTime: "10:00",
        closeTime: "11:00",
        closedAllDay: false,
    },
    {
        workDay: 1,
        openTime: "10:00",
        closeTime: "11:00",
        closedAllDay: false,
    },
    {
        workDay: 2,
        openTime: "10:00",
        closeTime: "11:00",
        closedAllDay: false,
    },
    {
        workDay: 3,
        openTime: "10:00",
        closeTime: "11:00",
        closedAllDay: false,
    },
    {
        workDay: 4,
        openTime: "10:00",
        closeTime: "11:00",
        closedAllDay: false,
    },
    {
        workDay: 5,
        openTime: "10:00",
        closeTime: "11:00",
        closedAllDay: false,
    },
    {
        workDay: 6,
        openTime: "10:00",
        closeTime: "11:00",
        closedAllDay: false,
    },
]
const rest: Restaurant = {
    address: "address",
    category: ["category"],
    city: "city",
    delivery: true,
    deliveryPrice: 7.01,
    id: "id",
    description: "description",
    email: "email",
    fax: "fax",
    freeDeliveryOrderAmount: 2,
    location: "location",
    logo: "logo",
    minimumOrderAmount: 2,
    name: "Golden Eat & Greet",
    phone: "phone",
    postCode: "postcode",
    rating: 7,
    ratingCount: 8,
    reviews: [...reviews],
    takeout: true,
    website: "website",
    workingHours,
}

export const RestaurantReviewsScreen: React.FC<IRestaurantReviewsScreen> = () => {
    const restaurant = rest

    return (
        <View style={ReviewsStyles.container}>
            <View style={ReviewsStyles.nameLine}>
                <Text
                    style={[textStyles.bold, containerStyles.flex1]}
                    numberOfLines={1}
                >
                    {restaurant.name}
                </Text>
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
                <Text>
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
const starSize = 20
const ReviewsStyles = createStyles({
    container: {
        flex: 1,
        width: "100%",
        ...spacerStyles.pxmd,
    },
    nameLine: {
        alignSelf: "stretch",
        ...spacerStyles.pymd,
        ...borderStyles.borderBottom,
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
    ratingText: {
        fontSize: starSize,
    },
    ratingContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    reviewLine: {
        ...spacerStyles.pymd,
        alignSelf: "stretch",
        ...borderStyles.borderBottom,
        justifyContent: "center",
        textAlignVertical: "auto",
    },
    reviewContainer: {
        flexDirection: "column",
    },
})
