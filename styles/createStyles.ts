import { ImageStyle, TextStyle, ViewStyle } from "react-native"

type ThemedNamedStyles<T> = {
    [P in keyof T]: (ViewStyle | TextStyle | ImageStyle) & {
        dark?: ViewStyle | TextStyle | ImageStyle
        light?: ViewStyle | TextStyle | ImageStyle
    }
}

export function createStyles<T>(
    styles: ThemedNamedStyles<T> | ThemedNamedStyles<any>
): ThemedNamedStyles<T> {
    return styles
}

export function style(
    object: (ViewStyle | TextStyle | ImageStyle) & {
        dark?: ViewStyle | TextStyle | ImageStyle
        light?: ViewStyle | TextStyle | ImageStyle
    }
) {
    return object
}
