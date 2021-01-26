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
    mxmd: {
        marginHorizontal: spacer.medium,
    },
    pxmd: {
        paddingHorizontal: spacer.medium,
    },
    mxlg: {
        marginHorizontal: spacer.large,
    },
    pxlg: {
        paddingHorizontal: spacer.large,
    },

    mysm: {
        marginVertical: spacer.small,
    },
    pysm: {
        paddingVertical: spacer.small,
    },
    mymd: {
        marginVertical: spacer.medium,
    },
    pymd: {
        paddingVertical: spacer.medium,
    },
    mylg: {
        marginVertical: spacer.large,
    },
    pylg: {
        paddingVertical: spacer.large,
    },
})
