import React, { useState } from "react";
import { View, Text } from "./Themed";
import { StyleSheet, Dimensions, Button } from "react-native";

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
    state?: ProductState;
}
//TODO: move to utils
export const match = <T extends string, K>(
    expr: T,
    cases: {
        [key in T]?: K;
    },
    defaultValue?: T,
) => {
    return cases[expr] || cases[defaultValue as NonNullable<T>];
};

export const Product: React.FC<IProductProps> = (props) => {
    const state = "openInAnHour" as ProductState;
    const [isOpen, setisOpen] = useState(true);
    const statusText = match(state, {
        close: <Text style={ProductStyles.titleClosed}>Gesloten</Text>,
        openInAnHour: (
            <Text style={ProductStyles.titleOpenInAnHour}>
                Opent over een uur
            </Text>
        ),
    });
    return (
        <View style={ProductStyles.container}>
            <View style={ProductStyles.imgContainer}>{statusText}</View>
            <View style={ProductStyles.infoContainer}></View>
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
        backgroundColor: "red",
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
    titleClosed: {
        backgroundColor: "grey",
        position: "absolute",
        width: "90%",
        height: "10%",
        bottom: "5%",
        textAlign: "center",
    },
    titleOpenInAnHour: {
        backgroundColor: "cyan",
        position: "absolute",
        width: "90%",
        height: "20%",
        bottom: "5%",
        textAlign: "center",
    },
});
