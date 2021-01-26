import { StyleSheet } from "react-native"
import { spacer } from "./spacer"

export const containerStyles = StyleSheet.create({
    container: {
        paddingHorizontal: spacer.medium,
        paddingTop: spacer.small,
        alignItems: "center",
    },
    row: {
        flexDirection: "row",
    },
    flex1: {
        flex: 1,
    },
})
