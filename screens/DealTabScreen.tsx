import { Ionicons } from "@expo/vector-icons"
import * as React from "react"
import { Dimensions, Image, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { View, Text } from "../components/Themed"

const logo = require("@assets/images/testfood.jpg")
const window = Dimensions.get("window")

export const DealTabScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.dealImage} />
            <View style={styles.dealRestaurant} colorName="primary">
                <View
                    style={styles.dealRestaurantNameContainer}
                    colorName="primary"
                >
                    <Text
                        colorName="textOnPrimary"
                        style={styles.dealRestaurantName}
                    >
                        Restaurant Name
                    </Text>
                </View>
                <View
                    style={styles.dealRestaurantInfoContainer}
                    colorName="primary"
                >
                    <Ionicons
                        name="ios-information-circle"
                        size={38}
                        color="white"
                    />
                </View>
            </View>
            <View style={styles.dealInfo}>
                <Text style={styles.dealTitle}>
                    Pasta naar keuze met blikje cola
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
    },
    dealImage: {
        height: 250,
        width: "100%",
    },
    dealRestaurant: {
        height: 60,
        padding: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    dealRestaurantName: { fontWeight: "bold", fontSize: 20 },
    dealRestaurantNameContainer: { flex: 3 },
    dealRestaurantInfoContainer: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    dealInfo: {
        padding: 5,
    },
    dealTitle: {
        fontWeight: "bold",
        fontSize: 26,
    },
})
