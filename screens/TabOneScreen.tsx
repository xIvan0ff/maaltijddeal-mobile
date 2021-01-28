import { Product } from "@components/Product"
import * as React from "react"
import { StyleSheet } from "react-native"
import { Restaurant, Review, WorkingHour } from "../typesOld"

import EditScreenInfo from "../components/EditScreenInfo"
import { Text, View } from "../components/Themed"
import { ConfettiPage } from "@components/ConfettiPage"

export default function TabOneScreen() {
    return (
        <View style={styles.container}>
            {/* <Product
                title="Shish tawook met frisdrank"
                state="open"
                price={11.01}
                oldPrice={13.01}
                discount={15}
                reviews={7}
                rating={7}
                restaurant={rest}
            /> */}
            {/* <RestaurantReviews restaurant={rest} /> */}
            <ConfettiPage />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
