import { StyleSheet } from "react-native"

export const spacer = {
    small: 5,
    medium: 10,
    large: 15,
}

export const spacerStyles = StyleSheet.create({
    mxsm: {
        marginHorizontal: spacer.small,
    },
    pxsm: {
        paddingHorizontal: spacer.small,
    },
})
