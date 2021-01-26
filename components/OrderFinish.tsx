import React, { useState } from "react"
import { View, Text } from "./Themed"
import { StyleSheet } from "react-native"
import DropDownPicker from "react-native-dropdown-picker"

interface IOrderFinish {}

export const OrderFinish: React.FC = (props) => {
    const [dropDown, setdropDown] = useState("fr")
    let availableHours = [
        { label: "France", value: "fr" },
        { label: "Spain", value: "es" },
    ]
    return (
        <View>
            <DropDownPicker
                items={availableHours}
                defaultValue={dropDown}
                style={{ paddingVertical: 10, alignSelf: "center" }}
                dropDownStyle={{ backgroundColor: "#fafafa" }}
                containerStyle={{ width: 150, height: 70 }}
                onChangeItem={(item) => setdropDown(item.value)}
            />
            <Text style={{ left: 10, top: 500 }}>{dropDown}</Text>
        </View>
    )
}
