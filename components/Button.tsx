import { cn } from "@utils/cn"
import * as React from "react"
import { StyleSheet } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { View, Text } from "@components/Themed"

interface IButtonProps {
    onClick?: () => void
    isIcon?: boolean
}

export const Button: React.FC<IButtonProps> = ({
    onClick,
    isIcon = false,
    children,
}) => {
    return <TouchableOpacity onPress={onClick}>{children}</TouchableOpacity>
}

const styles = StyleSheet.create({
    button: {
        // padding: 15,
    },
})
