import { StyleProp } from "react-native"

export const cn = <T>(...styles: Partial<StyleProp<T>>[]) => {
    return Object.assign({}, ...styles)
}
