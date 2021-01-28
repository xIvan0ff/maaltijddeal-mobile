import { textStyles } from "@styles/text"
import { cn } from "@utils/cn"
import * as React from "react"
import {
    StyleProp,
    Text as DefaultText,
    View as DefaultView,
    ViewStyle,
} from "react-native"

import Colors from "../constants/Colors"
import useColorScheme from "../hooks/useColorScheme"

export function useThemeColor(
    props: { light?: string; dark?: string },
    colorName: (keyof typeof Colors.light & keyof typeof Colors.dark) | "none"
) {
    const theme = useColorScheme()
    const colorFromProps = props[theme]

    if (colorFromProps) {
        return colorFromProps
    } else if (colorName === "none") {
        return undefined
    } else {
        return Colors[theme][colorName]
    }
}

type ThemeProps = {
    lightColor?: string
    darkColor?: string
    colorName?: (keyof typeof Colors.light & keyof typeof Colors.dark) | "none"
}

export type TextProps = ThemeProps & DefaultText["props"]
export type ViewProps = ThemeProps & DefaultView["props"]

export function Text(props: TextProps) {
    const theme = useColorScheme()

    const { style, lightColor, darkColor, colorName, ...otherProps } = props

    const color = useThemeColor(
        { light: lightColor, dark: darkColor },
        colorName ?? "text"
    )

    const themeStyles = []

    if (style instanceof Array) {
        for (const styleItem of style) {
            if (styleItem) {
                if (theme === "dark") {
                    themeStyles.push((styleItem as any).dark)
                } else {
                    themeStyles.push((styleItem as any).light)
                }
            }
        }
    }

    return (
        <DefaultText
            style={[
                {
                    color,
                    fontFamily: "rubik",
                    ...textStyles.regular,
                },
                style,
                ...themeStyles,
            ]}
            {...otherProps}
        />
    )
}

export function View(props: ViewProps) {
    const theme = useColorScheme()

    const { style, lightColor, darkColor, colorName, ...otherProps } = props
    const backgroundColor = useThemeColor(
        { light: lightColor, dark: darkColor },
        colorName ?? "background"
    )

    const themeStyles = []

    if (style instanceof Array) {
        for (const styleItem of style) {
            if (styleItem) {
                if (theme === "dark") {
                    themeStyles.push((styleItem as any).dark)
                } else {
                    themeStyles.push((styleItem as any).light)
                }
            }
        }
    } else {
        if (style) {
            if (theme === "dark") {
                themeStyles.push((style as any).dark)
            } else {
                themeStyles.push((style as any).light)
            }
        }
    }

    return (
        <DefaultView
            style={[{ backgroundColor }, style, ...themeStyles]}
            {...otherProps}
        />
    )
}
