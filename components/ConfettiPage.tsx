import { textStyles } from "@styles/text"
import React from "react"
import { View, Text } from "./Themed"
import { StyleProp, StyleSheet, TextStyle, ViewStyle } from "react-native"
import { spacerStyles } from "@styles/spacer"
import { price } from "@utils/price"

interface IConfettiPage {}
interface ITextLine {
    leftText: string
    rightText: string
    textStyle: StyleProp<TextStyle>
    containerStyle: any
}

const TextLine: React.FC<ITextLine> = ({
    leftText,
    rightText,
    textStyle,
    containerStyle,
}) => {
    return (
        <View
            style={{
                ...containerStyle,
                justifyContent: "space-between",
                flexDirection: "row",
            }}
        >
            <Text style={textStyle}>{leftText}</Text>
            <Text style={textStyle}>{rightText}</Text>
        </View>
    )
}

export const ConfettiPage: React.FC<IConfettiPage> = (props) => {
    return (
        <View style={ConfettiStyles.container}>
            <Text style={textStyles.title}>Je habt het volgende besteld</Text>
            <View style={ConfettiStyles.orderBox}>
                <TextLine
                    containerStyle={ConfettiStyles.textLineContainer}
                    leftText="product"
                    rightText="price"
                    textStyle={ConfettiStyles.textLine}
                />
                <TextLine
                    containerStyle={ConfettiStyles.textLineContainer}
                    leftText="product"
                    rightText="price"
                    textStyle={ConfettiStyles.textLine}
                />
                <TextLine
                    containerStyle={ConfettiStyles.textLineContainer}
                    leftText="product"
                    rightText="price"
                    textStyle={ConfettiStyles.textLine}
                />
                <TextLine
                    leftText="Total"
                    rightText="totalPrice"
                    textStyle={{ ...ConfettiStyles.textLine }}
                    containerStyle={{
                        ...ConfettiStyles.textLineContainer,
                        marginTop: 40,
                    }}
                />
            </View>
            <View style={ConfettiStyles.infoContainer}>
                <Text style={ConfettiStyles.arrivalText}>
                    Expected time of arrival
                </Text>
                <Text>
                    You have saved
                    <Text
                        style={ConfettiStyles.savingText}
                        colorName="secondary"
                    >
                        {price(9)}
                    </Text>
                    while using our app
                </Text>
                <Text>Additional info</Text>
            </View>
        </View>
    )
}

const ConfettiStyles = StyleSheet.create({
    container: {
        marginTop: 20,
        alignItems: "center",
        ...spacerStyles.pxmd,
    },
    orderBox: {
        marginVertical: 10,
        borderWidth: 2,
        borderColor: "orange",
        padding: 20,
        width: "95%",
    },
    textLine: {},
    textLineContainer: {},
    arrivalText: {},
    infoContainer: {
        alignSelf: "flex-start",
    },
    savingText: {
        fontSize: 35,
    },
})
