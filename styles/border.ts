import colors from "@constants/Colors"
import { createStyles } from "./createStyles"

const borderColor = {
    light: {
        borderColor: colors.light.border,
    },
    dark: {
        borderColor: colors.dark.border,
    },
}

export const borderStyles = createStyles({
    border: {
        borderWidth: 2,
        ...borderColor,
    },
    borderBottom: {
        borderBottomWidth: 2,
        ...borderColor,
    },
})
