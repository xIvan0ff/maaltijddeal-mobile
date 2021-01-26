import React, { useState } from "react"
import { View, Text } from "./Themed"
import { StyleSheet, Image, TouchableOpacity } from "react-native"
import { FontAwesome5 } from "@expo/vector-icons"
import { match } from "@utils/match"
import { Star } from "./Star"
import { spacer, spacerStyles } from "@styles/spacer"
import { cn } from "@utils/cn"
import { Restaurant } from "../typesOld"
import { textStyles } from "@styles/text"
import { containerStyles } from "@styles/container"
import { useColors } from "@hooks/useColors"

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

    onPress?: () => void
}
const btnColor = "#1292eb"
export const Product: React.FC<IProductProps> = (props) => {
    const colors = useColors()

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
                <Text style={{ ...ProductStyles.stateText, color: "white" }}>
                    Opent over een uur
                </Text>
            </View>
        ),
    })
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={ProductStyles.container}>
                <View style={ProductStyles.imgContainer}>
                    <Image
                        style={ProductStyles.image}
                        source={placeholder}
                    ></Image>
                    {statusText}
                </View>
                <View
                    style={cn(ProductStyles.discountContainer, {
                        backgroundColor: colors.primary,
                    })}
                >
                    <Text
                        style={cn(ProductStyles.discountText, textStyles.title)}
                    >
                        {props.discount}%
                    </Text>
                </View>
                <View
                    style={cn(ProductStyles.infoContainer, spacerStyles.mysm)}
                >
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
                            <Text
                                style={cn(
                                    ProductStyles.newPrice,
                                    textStyles.bold
                                )}
                            >
                                €{props.price}
                            </Text>
                            <Text style={ProductStyles.oldPrice}>
                                €{props.oldPrice}
                            </Text>
                        </View>
                    </View>
                    <View style={ProductStyles.infoLine}>
                        <View
                            style={cn(
                                containerStyles.row,
                                containerStyles.flex1
                            )}
                        >
                            <FontAwesome5
                                name="utensils"
                                size={16}
                                color="gray"
                            />
                            <Text
                                numberOfLines={1}
                                style={cn(
                                    spacerStyles.mxsm,
                                    containerStyles.flex1
                                )}
                            >
                                {props.restaurant.name}
                            </Text>
                        </View>

                        <View style={containerStyles.row}>
                            <View style={spacerStyles.mxsm}>
                                <Star
                                    imageStyle={ProductStyles.starImage}
                                    containerStyle={ProductStyles.starContainer}
                                    rating={props.rating ?? 10}
                                ></Star>
                            </View>
                            <Text>({props.reviews})</Text>
                        </View>
                    </View>
                    {/* <TouchableOpacity style={ProductStyles.buyButton}>
                    <Text style={cn(ProductStyles.buttonText, textStyles.big)}>
                        BESTEL NU!
                    </Text>
                </TouchableOpacity> */}
                </View>
            </View>
        </TouchableOpacity>
    )
}

const ProductStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignSelf: "stretch",
    },
    imgContainer: {
        height: 150,
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
        bottom: "5%",
        justifyContent: "center",
        alignItems: "center",
        padding: spacer.medium,
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
        fontWeight: "bold",
        fontSize: 25,
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
        left: 5,
        fontWeight: "bold",
        fontSize: 20,
    },
    oldPrice: {
        color: "gray",
        alignSelf: "flex-end",
        textDecorationLine: "line-through",
        marginLeft: 5,
    },
    newPrice: {
        alignSelf: "flex-end",
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
        justifyContent: "space-between",
        flexDirection: "row",
    },
    discountContainer: {
        position: "absolute",
        right: 0,
        top: 0,
        justifyContent: "center",
        alignItems: "center",
        padding: spacer.large,
    },
    discountText: {
        color: "white",
    },
    stateText: {
        fontSize: 20,
    },
    infoLine: {
        marginTop: spacer.small,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    buyButton: {
        ...spacerStyles.mxmd,
        marginTop: 20,
        height: 50,
        width: "95%",
        backgroundColor: btnColor,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 100,
    },
    buttonText: {
        color: "white",
    },
})
