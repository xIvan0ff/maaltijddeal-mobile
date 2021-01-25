import React from "react"
import { StyleSheet, Image } from "react-native"
import { Restaurant } from "../types"
import { View, Text } from "./Themed"
import { spacerStyles } from "@styles/spacer"
import { AntDesign } from "@expo/vector-icons"
import { WorkDay } from "@components/WorkDayComponent"

const placeholder = require("@assets/images/locationPlaceholder.png")
const pointer = require("@assets/images/pointer.png")

interface IRestaurantInfo {
    restaurant: Restaurant
}

export const RestaurantInfo: React.FC<IRestaurantInfo> = ({ restaurant }) => {
    return (
        <View style={RestaurantStyles.container}>
            <Image source={placeholder} />
            <View style={RestaurantStyles.infoContainer}>
                <View style={RestaurantStyles.locationLine}>
                    <Image source={pointer} style={RestaurantStyles.pointer} />
                    <Text style={RestaurantStyles.locationText}>
                        {restaurant.location}
                    </Text>
                </View>
                <Text style={RestaurantStyles.staticText}>
                    The place to be alle pizza worden vers voor u bereid
                </Text>
                <View style={RestaurantStyles.hoursLine}>
                    <AntDesign
                        name="clockcircle"
                        size={24}
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

const pointerSize = 0.015
const RestaurantStyles = StyleSheet.create({
    container: {},
    infoContainer: {
        paddingHorizontal: 10,
    },
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
    locationText: {
        fontSize: 20,
    },
    hoursLine: {
        width: "100%",
        flexDirection: "row",
    },
    workingHours: {
        flex: 1,
    },
    staticText: {
        paddingVertical: 10,
        fontSize: 18,
    },
})
