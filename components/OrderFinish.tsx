import React, { useState } from "react"
import { View, Text } from "./Themed"
import { Button, StyleSheet } from "react-native"
import DropDownPicker from "react-native-dropdown-picker"
import { spacerStyles } from "@styles/spacer"
import { Picker } from "@react-native-picker/picker"
import { TextInput, TouchableOpacity } from "react-native-gesture-handler"

interface IOrderFinish {}

export const OrderFinish: React.FC = (props) => {
    const [dropDownValue, setdropDownValue] = useState("0")
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [telephone, settelephone] = useState("")
    const [description, setdescription] = useState("")
    let availableHours = [
        { label: "Zo snel mogelijk", value: "0" },
        { label: "15:00", value: "1500" },
        { label: "16:00", value: "1600" },
        { label: "17:00", value: "1700" },
    ]
    return (
        <View style={OrderFinishStyles.container}>
            <Text
                style={{ fontWeight: "bold", fontSize: 30, marginBottom: 20 }}
            >
                Verzendgegevens
            </Text>
            <View style={OrderFinishStyles.DropDownContainer}>
                <Text style={OrderFinishStyles.contactText}>Aflevertijd:</Text>
                {/* <DropDownPicker
                    items={availableHours}
                    defaultValue={dropDownValue}
                    style={OrderFinishStyles.DropDownPickerStyle}
                    dropDownStyle={
                        OrderFinishStyles.DropDownPickerDropDownStyle
                    }
                    containerStyle={
                        OrderFinishStyles.DropDownPickerContainerStyle
                    }
                    onChangeItem={(item) => setdropDownValue(item.value)}
                /> */}
                <View style={OrderFinishStyles.pickerContainer}>
                    <Picker
                        selectedValue={dropDownValue}
                        style={OrderFinishStyles.picker}
                        onValueChange={(itemValue, itemIndex) =>
                            setdropDownValue(itemValue.toString())
                        }
                    >
                        {availableHours.map((item) => (
                            <Picker.Item
                                color="gray"
                                label={item.label}
                                value={item.value}
                                key={item.value}
                            />
                        ))}
                    </Picker>
                </View>
                <Text style={{ left: 10, top: 500 }}>{dropDownValue}</Text>
            </View>
            <View style={OrderFinishStyles.contactContainer}>
                <Text style={OrderFinishStyles.contactText}>Contact</Text>
                <TextInput
                    style={OrderFinishStyles.input}
                    placeholder="Je naam"
                    value={name}
                    onChangeText={(text) => setname(text)}
                />
                <TextInput
                    style={OrderFinishStyles.input}
                    placeholder="E-mail"
                    value={email}
                    keyboardType="email-address"
                    onChangeText={(text) => setemail(text)}
                />
                <TextInput
                    style={OrderFinishStyles.input}
                    placeholder="Telefoon"
                    keyboardType="numeric"
                    value={telephone}
                    onChangeText={(text) => settelephone(text)}
                />
                <TextInput
                    multiline={true}
                    style={{ ...OrderFinishStyles.input, height: 80 }}
                    placeholder="Aanmerking"
                    value={description}
                    onChangeText={(text) => setdescription(text)}
                />
                <TouchableOpacity>
                    <View style={OrderFinishStyles.button}>
                        <Text style={OrderFinishStyles.buttonText}>
                            BESTELLEN
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const OrderFinishStyles = StyleSheet.create({
    container: {
        flex: 1,
        ...spacerStyles.pxmd,
    },
    DropDownContainer: {
        minHeight: 120,
    },
    // DropDownPickerStyle: {
    //     paddingVertical: 10,
    //     alignSelf: "center",
    // },
    // DropDownPickerDropDownStyle: {
    //     backgroundColor: "#fafafa",
    // },
    // DropDownPickerContainerStyle: {
    //     width: "100%",
    //     minHeight: 60,
    // },
    contactContainer: {
        flex: 1,
        padding: 10,
    },
    picker: {
        alignItems: "center",
        backgroundColor: "white",
    },
    pickerContainer: {
        margin: 10,
        borderWidth: 2,
        borderColor: "orange",
        color: "gray",
    },
    contactText: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 10,
    },
    input: {
        borderWidth: 2,
        borderColor: "orange",
        height: 50,
        marginTop: 20,
        paddingHorizontal: 10,
        textAlignVertical: "top",
        paddingTop: 10,
    },
    description: {},
    button: {
        marginTop: 20,
        width: "100%",
        height: 50,
        backgroundColor: "orange",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        fontSize: 25,
        color: "white",
    },
})
