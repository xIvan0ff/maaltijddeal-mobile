import { textStyles } from "@styles/text"
import React from "react"
import { View, Text } from "./Themed"
import {
    StyleProp,
    StyleSheet,
    TextStyle,
    TouchableOpacity,
    ViewStyle,
} from "react-native"
import { spacerStyles } from "@styles/spacer"
import { price } from "@utils/price"
import ConfettiCannon from "react-native-confetti-cannon"
import { TextLine } from "./TextLine"

interface IConfettiPage {}

export const ConfettiPage: React.FC<IConfettiPage> = (props) => {
    let ref: NonNullable<any>
    return (
        <View style={ConfettiStyles.container}>
            <View
                style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    flex: 1,
                    backgroundColor: "rgba(0,0,0,0)",
                    zIndex: 998,
                }}
            >
                <ConfettiCannon
                    count={200}
                    origin={{ x: -10, y: 0 }}
                    autoStart={true}
                    autoStartDelay={10}
                    ref={(_ref) => (ref = _ref)}
                />
            </View>
            <View style={{ height: 30, width: 30, backgroundColor: "red" }}>
                <TouchableOpacity
                    style={{ height: 30, width: 30, backgroundColor: "green" }}
                    onPress={() => {
                        ref.start()
                    }}
                />
            </View>

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
        height: "100%",
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
