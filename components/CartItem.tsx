import { Entypo, FontAwesome5 } from "@expo/vector-icons"
import { price } from "@utils/price"
import React from "react"
import { TouchableOpacity } from "react-native-gesture-handler"
import { View, Text } from "./Themed"

interface ICartItem {
    onAdd: Function
    onRemove: Function
    value: number
    name: string
    cost: number
}

export const CartItem: React.FC<ICartItem> = (props) => {
    return (
        <View
            style={{
                width: "100%",
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "flex-start",
            }}
        >
            <View>
                <Text colorName="secondary">{props.name}</Text>
                <Text>{price(props.cost)}</Text>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    width: "15%",
                    alignItems: "center",
                }}
            >
                <TouchableOpacity onPress={() => props.onRemove()}>
                    {props.value > 1 ? (
                        <Entypo name="minus" size={18} color="black" />
                    ) : (
                        <FontAwesome5 name="trash" size={14} color="black" />
                    )}
                </TouchableOpacity>
                <Text style={{ fontSize: 20, marginHorizontal: 5 }}>
                    {props.value}
                </Text>
                <TouchableOpacity onPress={() => props.onAdd()}>
                    <Entypo name="plus" size={18} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
}
