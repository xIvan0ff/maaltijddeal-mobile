import colors from "@constants/Colors"
import useColorScheme from "./useColorScheme"

export const useColors = () => {
    const colorScheme = useColorScheme()

    return colors[colorScheme]
}
