import { createStyles } from "@styles/createStyles"
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
    return (
        <View
            style={{
                ...styles.priceButtonContainer,
                backgroundColor: selected ? "orange" : "white",
            }}
        >
            <TouchableOpacity style={styles.priceButton} onPress={onSelect}>
                <Text style={styles.priceButtonText}>
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
        elevation: 4,
        borderRadius: 100,
        backgroundColor: "white",
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
