import React, { useState } from "react"
import { View, Text } from "./Themed"
import { StyleSheet, Dimensions, Button, Image } from "react-native"
import { FontAwesome5 } from "@expo/vector-icons"
import { match } from "@utils/match"
import { Star } from "./Star"
import { spacer, spacerStyles } from "@styles/spacer"
import { cn } from "@utils/cn"
import { TouchableOpacity } from "react-native-gesture-handler"
import { Restaurant } from "../types"
import { textStyles } from "@styles/text"

const placeholder = require("@assets/images/placeholder.png")
const colorGradient = require("@assets/images/colorGradient.png")

export type ProductState = "open" | "close" | "openInAnHour"

interface IProductProps {
    id?: number
    title?: string
    description?: string
    price?: number
    restaurant: Restaurant
    reviews?: number
    image?: string
    rating?: number
    oldPrice?: number
    discount?: number
    state: ProductState
}
const btnColor = "#1292eb"
export const Product: React.FC<IProductProps> = (props) => {
    const statusText = match(props.state, {
        close: (
            <View
                style={{
                    ...ProductStyles.statusContainer,
                    backgroundColor: "grey",
                }}
            >
                <Text style={{ ...ProductStyles.stateText, color: "white" }}>
                    Gesloten
                </Text>
            </View>
        ),
        openInAnHour: (
            <View
                style={{
                    ...ProductStyles.statusContainer,
                    backgroundColor: "orange",
                }}
            >
                <Text
                    style={{
                        ...ProductStyles.stateText,
                        color: "white",
                    }}
                >
                    Opent over een uur
                </Text>
            </View>
        ),
    })
    return (
        <View style={ProductStyles.container}>
            <View style={ProductStyles.imgContainer}>
                <Image style={ProductStyles.image} source={placeholder}></Image>
                {statusText}
            </View>
            <View style={ProductStyles.discountContainer}>
                <Text style={ProductStyles.discountText}>
                    {props.discount}%
                </Text>
            </View>
            <View style={ProductStyles.infoContainer}>
                <View style={ProductStyles.titleContainer}>
                    <Text style={cn(ProductStyles.title, textStyles.title)}>
                        {props.title}
                    </Text>
                </View>
                <View style={ProductStyles.priceLine}>
                    <View style={ProductStyles.deliveryContainer}>
                        <Text
                            style={cn(
                                ProductStyles.deliveryStaticText,
                                textStyles.small
                            )}
                        >
                            {props.restaurant.deliveryPrice !== 0
                                ? "Bezorgkosten"
                                : "Gratis bezorgen"}
                        </Text>
                        <Text
                            style={cn(
                                ProductStyles.deliveryText,
                                textStyles.small,
                                textStyles.bold
                            )}
                        >
                            {props.restaurant.deliveryPrice !== 0
                                ? "€" + props.restaurant.deliveryPrice
                                : ""}
                        </Text>
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
                <View style={ProductStyles.infoLine}>
                    <FontAwesome5 name="utensils" size={20} color="gray" />
                    <Text
                        style={ProductStyles.restaurantText}
                        numberOfLines={1}
                    >
                        {props.restaurant.name}
                    </Text>
                    <Star
                        imageStyle={ProductStyles.starImage}
                        containerStyle={ProductStyles.starContainer}
                        rating={props.rating ?? 10}
                    ></Star>
                    <Text>({props.reviews})</Text>
                </View>
                <TouchableOpacity style={ProductStyles.buyButton}>
                    <Text style={ProductStyles.buttonText}>BESTEL NU!</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

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
    },
    title: {
        top: 0,
    },
    deliveryContainer: {
        alignSelf: "flex-start",
        flexDirection: "row",
    },
    deliveryStaticText: {
        color: "gray",
        fontSize: 18,
    },
    deliveryText: {
        alignSelf: "flex-end",
        marginLeft: 5,
    },
    oldPrice: {
        color: "gray",
        alignSelf: "flex-end",
        textDecorationLine: "line-through",
        fontSize: 18,
    },
    newPrice: {
        fontWeight: "bold",
        alignSelf: "flex-end",
        fontSize: 24,
    },
    priceContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    starImage: {
        width: 20,
        height: 20,
    },
    starContainer: {
        flexDirection: "row",
    },
    priceLine: {
        ...spacerStyles.mxmd,
        justifyContent: "space-between",
        flexDirection: "row",
    },
    discountContainer: {
        position: "absolute",
        height: "10%",
        aspectRatio: 1,
        right: 0,
        top: 0,
        backgroundColor: "#fe9900",
        justifyContent: "center",
        alignItems: "center",
    },
    discountText: {
        fontSize: 35,
        color: "white",
    },
    stateText: {
        fontSize: 20,
    },
    infoLine: {
        top: "2%",
        flexDirection: "row",
        justifyContent: "space-between",
        ...spacerStyles.mxmd,
    },
    restaurantText: {
        fontSize: 20,
        width: "60%",
    },
    buyButton: {
        ...spacerStyles.mxmd,
        top: 20,
        height: 50,
        width: "95%",
        backgroundColor: btnColor,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
    },
    buttonText: {
        color: "white",
        fontSize: 24,
    },
})
