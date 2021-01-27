import * as React from "react"
import { View, Text } from "@components/Themed"
import { StyleSheet } from "react-native"
import { cn } from "@utils/cn"
import { textStyles } from "@styles/text"
import { DealOption } from "types"
import { price } from "@utils/price"
import { Button } from "@components/Button"
import { Feather, FontAwesome } from "@expo/vector-icons"
import { useColors } from "@hooks/useColors"
import { Colors } from "react-native/Libraries/NewAppScreen"

interface IDealOptionProps {
    option: DealOption
}

export const DealOptionItem: React.FC<IDealOptionProps> = ({ option }) => {
    const colors = useColors()
    return (
        <View style={styles.dealOption}>
            <View style={styles.dealOptionInfo}>
                <Text
                    colorName="secondary"
                    style={cn(textStyles.bold, styles.dealOptionTitle)}
                >
                    {option.title}
                </Text>
                <Text colorName="text">{option.description}</Text>
            </View>
            <View style={styles.dealOptionPrice}>
                <Text colorName="text" style={styles.dealOptionPriceText}>
                    {price(option.price)}
                </Text>
                <Button onClick={() => console.log(option.id)}>
                    <FontAwesome
                        name="plus"
                        size={24}
                        color={colors.secondary}
                    />
                </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    dealOption: {
        marginTop: 10,
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: "#ebebeb",
        flexDirection: "row",
    },
    dealOptionTitle: {
        fontSize: 18,
    },
    dealOptionInfo: {
        flex: 4,
        flexDirection: "column",
        alignItems: "flex-start",
    },
    dealOptionPrice: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    dealOptionPriceText: {
        fontSize: 16,
        marginRight: 5,
    },
})
