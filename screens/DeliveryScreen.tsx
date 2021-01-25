import * as React from "react"
import { View, Text } from "@components/Themed"
import { ScrollView, StyleSheet } from "react-native"
import { Restaurant } from "../types"
import { Product } from "@components/Product"

interface IDeliveryScreenProps {}

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

export const DeliveryScreen: React.FC<IDeliveryScreenProps> = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
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
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
})
