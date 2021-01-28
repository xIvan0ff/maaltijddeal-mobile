import React from "react"
import { StyleProp, TextStyle, ViewStyle } from "react-native"
import { View, Text } from "./Themed"

interface ITextLine {
    leftText: string
    rightText: string
    textStyle?: StyleProp<TextStyle>
    containerStyle?: StyleProp<ViewStyle>
}

export const TextLine: React.FC<ITextLine> = ({
    leftText,
    rightText,
    textStyle,
    containerStyle,
}) => {
    return (
        <View
            style={{
                ...(containerStyle as object),
                justifyContent: "space-between",
                flexDirection: "row",
            }}
        >
            <Text style={textStyle}>{leftText}</Text>
            <Text style={textStyle}>{rightText}</Text>
        </View>
    )
}
