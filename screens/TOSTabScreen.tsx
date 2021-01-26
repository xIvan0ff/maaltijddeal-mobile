import * as React from "react"
import { View, Text } from "@components/Themed"
import { StyleSheet } from "react-native"

import { WebView } from "react-native-webview"

interface ITOSTabScreenProps {}

export const TOSTabScreen: React.FC<ITOSTabScreenProps> = () => {
    return (
        <WebView
            style={styles.webview}
            source={{
                uri: "https://www.maaltijddeal.nl/privacy-statement?stripped=1",
            }}
        />
    )
}

const styles = StyleSheet.create({
    webview: {
        width: "100%",
        height: "100%",
    },
})
