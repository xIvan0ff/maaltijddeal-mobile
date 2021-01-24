import React, { useState } from "react";
import { View, Text } from "./Themed";
import { StyleSheet, Dimensions, Button, Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { match } from "@utils/match.ts";

const placeholder = require("@assets/images/productComponentPlaceholder.png");
const colorGradient = require("@assets/images/colorGradient.png");

export type ProductState = "open" | "close" | "openInAnHour";

interface IProductProps {
    id?: number;
    title?: string;
    description?: string;
    price?: number;
    restaurant?: string;
    reviews?: number;
    image?: string;
    rating?: number;
    oldPrice?: number;
    discount?: number;
    state: ProductState;
}

export const Product: React.FC<IProductProps> = (props) => {
    const statusText = match(props.state, {
        close: (
            <View
                style={{
                    ...ProductStyles.statusContainer,
                    backgroundColor: "grey",
                }}
            >
                <Text>Gesloten</Text>
            </View>
        ),
        openInAnHour: (
            <View
                style={{
                    ...ProductStyles.statusContainer,
                    backgroundColor: "orange",
                }}
            >
                <Text>Opent over een uur</Text>
            </View>
        ),
    });
    return (
        <View style={ProductStyles.container}>
            <View style={ProductStyles.imgContainer}>
                <Image
                    style={ProductStyles.image}
                    source={colorGradient}
                ></Image>
                {statusText}
            </View>
            <View style={ProductStyles.infoContainer}>
                <View style={ProductStyles.titleContainer}>
                    <Text style={ProductStyles.title}>{props.title}</Text>
                </View>
                <View style={ProductStyles.priceLine}>
                    <View style={ProductStyles.deliveryContainer}>
                        <Text style={ProductStyles.deliveryText}>€7</Text>
                    </View>
                    <View style={ProductStyles.priceContainer}>
                        <Text style={ProductStyles.newPrice}>
                            €{props.price}
                        </Text>
                        <Text style={ProductStyles.oldPrice}>
                            €{props.oldPrice}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const ProductStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        width: "100%",
    },
    imgContainer: {
        height: 300,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
    },
    infoContainer: {
        backgroundColor: "blue",
        height: 150,
        width: "100%",
    },
    statusContainer: {
        position: "absolute",
        width: "90%",
        height: "10%",
        bottom: "5%",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        position: "absolute",
        width: "100%",
        height: "100%",
    },
    titleContainer: {
        justifyContent: "center",
        alignItems: "center",
        height: "15%",
    },
    title: {
        position: "absolute",
        top: 0,
    },
    deliveryContainer: {
        alignSelf: "flex-start",
        left: 10,
    },
    deliveryText: {
        alignSelf: "flex-end",
    },
    oldPrice: {
        color: "gray",
        alignSelf: "flex-end",
        textDecorationLine: "line-through",
    },
    newPrice: {
        fontWeight: "bold",
        alignSelf: "flex-end",
        fontSize: 16,
    },
    priceContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        right: 10,
    },
    ratingStar: {
        width: 20,
        height: 20,
    },
    priceLine: {
        justifyContent: "space-between",
        flexDirection: "row",
    },
});
