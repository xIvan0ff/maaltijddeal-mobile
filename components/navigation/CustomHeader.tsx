import { Header, StackHeaderProps } from "@react-navigation/stack"
import * as React from "react"
import { Image, Platform, StatusBar, StyleSheet } from "react-native"
import { textStyles } from "@styles/text"
import { Text, View } from "../Themed"

const logo = require("@assets/images/logo.png")

type ICustomHeaderProps = StackHeaderProps

export const CustomHeader: React.FC<ICustomHeaderProps> = ({ scene }) => {
    const { options } = scene.descriptor

    const title = options.headerTitle ?? scene.route.name

    return (
        <View style={styles.header}>
            <View style={styles.container} colorName="primary">
                <Image style={styles.logo} source={logo} />
                <Text style={{ ...textStyles.title }} colorName="textOnPrimary">
                    {title}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 75,
        marginTop: Platform.OS == "ios" ? 20 : StatusBar.currentHeight,
    },
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        width: 57,
        height: 40,
        marginRight: 10,
    },
})
