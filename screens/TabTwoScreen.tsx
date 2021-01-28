import { RestaurantInfo } from "@screens/RestaurantInfoScreen"
import { Restaurant } from "../typesOld"
import { WorkingHour } from "../typesOld"
import { Review } from "../typesOld"
import * as React from "react"
import { StyleSheet } from "react-native"

import EditScreenInfo from "../components/EditScreenInfo"
import { Text, View } from "../components/Themed"
import { OrderFinish } from "@components/OrderFinish"
import { FilterPage } from "@components/FilterPage"

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
        openTime: "12:00",
        closeTime: "13:00",
        closedAllDay: false,
    },
    {
        workDay: 2,
        openTime: "14:00",
        closeTime: "15:00",
        closedAllDay: false,
    },
    {
        workDay: 3,
        openTime: "16:00",
        closeTime: "17:00",
        closedAllDay: false,
    },
    {
        workDay: 4,
        openTime: "18:00",
        closeTime: "19:00",
        closedAllDay: false,
    },
    {
        workDay: 5,
        openTime: "20:00",
        closeTime: "21:00",
        closedAllDay: false,
    },
    {
        workDay: 6,
        openTime: "22:00",
        closeTime: "23:00",
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

export default function TabTwoScreen() {
    return (
        <View style={styles.container}>
            {/* <RestaurantInfo restaurant={rest} /> */}
            {/* <OrderFinish /> */}
            <FilterPage />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
