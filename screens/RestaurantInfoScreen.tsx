import React from "react"
import { StyleSheet, Image } from "react-native"
import { Restaurant, Review, WorkingHour } from "../typesOld"
import { View, Text } from "../components/Themed"
import { spacerStyles } from "@styles/spacer"
import { AntDesign } from "@expo/vector-icons"
import { WorkDay } from "@components/WorkDayComponent"
import { StaticMap } from "@components/StaticMap"
import { containerStyles } from "@styles/container"
import { textStyles } from "@styles/text"

const placeholder = require("@assets/images/locationPlaceholder.png")
const pointer = require("@assets/images/pointer.png")

interface IRestaurantInfoScreen {
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
    name: "name",
    phone: "phone",
    postCode: "postcode",
    rating: 7,
    ratingCount: 8,
    reviews: [...reviews],
    takeout: true,
    website: "website",
    workingHours,
}

export const RestaurantInfoScreen: React.FC<IRestaurantInfoScreen> = () => {
    const restaurant = rest

    return (
        <View style={containerStyles.flex1}>
            <StaticMap
                center={{
                    lat: 42.5,
                    lng: 27.46,
                }}
                height={200}
            />
            <View style={[containerStyles.notCenteredContainer]}>
                <View style={RestaurantStyles.locationLine}>
                    <Image source={pointer} style={RestaurantStyles.pointer} />
                    <Text>{restaurant.location}</Text>
                </View>
                <Text style={spacerStyles.pymd}>
                    The place to be alle pizza worden vers voor u bereid
                </Text>
                <View style={RestaurantStyles.hoursLine}>
                    <AntDesign
                        name="clockcircle"
                        size={20}
                        color="#1292eb"
                        style={{ marginRight: 5 }}
                    />
                    <View style={RestaurantStyles.workingHours}>
                        {restaurant.workingHours.map((wh) => (
                            <WorkDay workingHour={wh} key={wh.workDay} />
                        ))}
                    </View>
                </View>
            </View>
        </View>
    )
}

const pointerSize = 0.013
const RestaurantStyles = StyleSheet.create({
    locationLine: {
        flexDirection: "row",
        alignItems: "center",
    },
    pointer: {
        height: pointerSize * 2053,
        width: pointerSize * 1442,
        tintColor: "#1292eb",
        marginRight: 10,
    },
    hoursLine: {
        alignSelf: "stretch",
        flexDirection: "row",
    },
    workingHours: {
        flex: 1,
    },
})
