import { cn } from "@utils/cn"
import * as React from "react"
import { StyleProp, StyleSheet, ViewStyle } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { View, Text } from "@components/Themed"

interface IButtonProps {
    style?: StyleProp<ViewStyle>
    onClick?: () => void
    isIcon?: boolean
}

export const Button: React.FC<IButtonProps> = ({
    style = {},
    onClick,
    isIcon = false,
    children,
}) => {
    return (
        <TouchableOpacity onPress={onClick} style={style}>
            {children}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        // padding: 15,
    },
})
