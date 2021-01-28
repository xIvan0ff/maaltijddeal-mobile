import { ImageStyle, TextStyle, ViewStyle } from "react-native"

type ThemedNamedStyles<T> = {
    [P in keyof T]: (ViewStyle | TextStyle | ImageStyle) & {
        dark?: ViewStyle | TextStyle | ImageStyle
        light?: ViewStyle | TextStyle | ImageStyle
    }
}

type ChangeType<Of, To> = {
    [K in keyof Of]: To
}

export function createStyles<T>(
    styles: ThemedNamedStyles<T> | ThemedNamedStyles<any>
): ChangeType<T, any> {
    return (styles as any) as ChangeType<T, any>
}

export function style(
    object: (ViewStyle | TextStyle | ImageStyle) & {
        dark?: ViewStyle | TextStyle | ImageStyle
        light?: ViewStyle | TextStyle | ImageStyle
    }
) {
    return object
}
