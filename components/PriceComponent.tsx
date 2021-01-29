import { useColors } from "@hooks/useColors"
import { createStyles } from "@styles/createStyles"
import { elevation } from "@styles/elevation"
import { price as convertPrice } from "@utils/price"
import React from "react"
import { TouchableOpacity } from "react-native"
import { View, Text } from "./Themed"

interface IPriceComponent {
    price: number
    onSelect?: () => void
    selected?: boolean
}

export const PriceComponent: React.FC<IPriceComponent> = ({
    price,
    onSelect,
    selected = false,
}) => {
    const colors = useColors()
    return (
        <View
            style={{
                ...styles.priceButtonContainer,
                ...(selected
                    ? { backgroundColor: colors.primary }
                    : { ...elevation(4) }),
            }}
        >
            <TouchableOpacity style={styles.priceButton} onPress={onSelect}>
                <Text
                    style={{
                        ...styles.priceButtonText,
                        color: !selected ? colors.primary : "white",
                    }}
                >
                    {"<"}
                    {convertPrice(price)}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = createStyles({
    priceButtonContainer: {
        width: 80,
        height: 40,
        borderRadius: 100,
        backgroundColor: "white",
        marginHorizontal: 5,
    },
    priceButton: {
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    priceButtonText: {
        fontSize: 16,
        color: "black",
    },
})
