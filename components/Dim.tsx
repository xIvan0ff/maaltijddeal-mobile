import * as React from "react"
import { View } from "@components/Themed"
import { StyleSheet } from "react-native"
import { useColors } from "@hooks/useColors"
import { cn } from "@utils/cn"

interface IDimProps {}

export const Dim: React.FC<IDimProps> = () => {
    const colors = useColors()

    return (
        <View
            style={cn(styles.dim, {
                backgroundColor: colors.dim,
            })}
        />
    )
}

const styles = StyleSheet.create({
    dim: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
    },
})
