import { Product } from "@components/Product"
import * as React from "react"
import { StyleSheet } from "react-native"
import { Restaurant } from "../types"

import EditScreenInfo from "../components/EditScreenInfo"
import { Text, View } from "../components/Themed"
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
    reviews: ["reviews"],
    takeout: true,
    website: "website",
    workingHours: ["workingHours"],
}
export default function TabOneScreen() {
    return (
        <View style={styles.container}>
            <Product
                title="Shish tawook met frisdrank"
                state="open"
                price={11.01}
                oldPrice={13.01}
                discount={15}
                reviews={7}
                rating={7}
                restaurant={rest}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
})
