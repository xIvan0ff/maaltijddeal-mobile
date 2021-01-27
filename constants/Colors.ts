import { Appearance, ColorSchemeName } from "react-native"

const tintColorLight = "#fe9900"
const tintColorDark = "#fe9900"

export const colors = {
    light: {
        text: "#000",
        background: "#fff",
        tint: tintColorLight,
        tabIconDefault: "#ccc",
        tabIconSelected: tintColorLight,

        primary: "#fe9900",
        secondary: "#1292eb",
        textOnPrimary: "#fff",

        dim: "#111",

        border: "#ccc",
    },
    dark: {
        text: "#fff",
        background: "#000",
        tint: tintColorDark,
        tabIconDefault: "#ccc",
        tabIconSelected: tintColorDark,

        primary: "#fe9900",
        secondary: "#1292eb",
        textOnPrimary: "#fff",

        dim: "#111",

        border: "#ccc",
    },
}

export default colors
