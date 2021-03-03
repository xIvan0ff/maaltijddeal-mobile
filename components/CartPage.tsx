import { AntDesign, Entypo, FontAwesome5 } from "@expo/vector-icons"
import { createStyles } from "@styles/createStyles"
import { spacerStyles } from "@styles/spacer"
import { price } from "@utils/price"
import React from "react"
import { useState } from "react"
import { TouchableOpacity } from "react-native"
import { ScrollView, TextInput } from "react-native-gesture-handler"
import { white } from "react-native-paper/lib/typescript/styles/colors"
import { CartItem } from "./CartItem"
import { TextLine } from "./TextLine"
import { View, Text } from "./Themed"

interface ICartPage {}

type Item = {
    value: number
    cost: number
    name: string
}

const staticItems: Item[] = [
    { value: 1, name: "name1", cost: 12 },
    { value: 2, name: "name2", cost: 13 },
    { value: 1, name: "name3", cost: 14 },
]

export const CartPage: React.FC<ICartPage> = (props) => {
    const [descriptionText, setDescriptionText] = useState("")
    const [items, setItem] = useState<Item[]>(staticItems)
    return (
        <View style={styles.container}>
            <View colorName="secondary" style={styles.topLine}>
                <TouchableOpacity>
                    <FontAwesome5
                        name="shopping-basket"
                        size={24}
                        color="white"
                    />
                </TouchableOpacity>
                <View style={{ alignItems: "center" }} colorName="secondary">
                    <Text style={{ color: "white", fontWeight: "bold" }}>
                        Toko Nusantara (den haag)
                    </Text>
                    <Text style={{ color: "white", fontWeight: "bold" }}>
                        {price(35.25)}
                    </Text>
                </View>
                <TouchableOpacity>
                    <AntDesign name="down" size={24} color="white" />
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                <ScrollView contentContainerStyle={{ alignItems: "center" }}>
                    <Text style={styles.bigText}>
                        Uw bestelling van Toko Nusantara (den haag)
                    </Text>
                    <Text style={styles.descriptionTopText}>
                        Opmerkingen of vragen
                    </Text>
                    <TextInput
                        multiline={true}
                        onChangeText={(text) => setDescriptionText(text)}
                        style={styles.description}
                    />
                    <View style={styles.itemsContainer}>
                        {items.map((item: Item) => {
                            return (
                                <CartItem
                                    onAdd={() => {}}
                                    onRemove={() => {}}
                                    value={item.value}
                                    name={item.name}
                                    cost={item.cost}
                                    key={item.name}
                                />
                            )
                        })}
                    </View>
                    <View style={{ width: "100%", marginTop: 30 }}>
                        <TextLine
                            leftText="Bezorgkosten"
                            rightText={price(0)}
                        />
                        <TextLine
                            leftText="Betaal met iDeal"
                            rightText={price(0.25)}
                        />
                        <TextLine
                            leftText="Totaal"
                            rightText={price(35.25)}
                            textStyle={styles.totalLineText}
                        />
                    </View>
                    <View style={styles.savingContainer}>
                        <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                            Je bespaart{" "}
                        </Text>
                        <Text
                            style={{ fontSize: 30, fontWeight: "bold" }}
                            colorName="secondary"
                        >
                            {price(1.95)}!
                        </Text>
                    </View>
                    <View style={styles.afhalenLine}>
                        <Text style={{ width: "70%" }}>
                            Je bestelling wordt bezorgd. Liever afhalen?
                        </Text>
                        <TouchableOpacity
                            onPress={() => {}}
                            style={styles.afhalenButtonContainer}
                        >
                            <View
                                style={styles.afhalenButton}
                                colorName="secondary"
                            >
                                <Text style={styles.afhalenText}>AFHALEN</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: "100%" }}>
                        <TextLine
                            leftText="Minimaal Bestelbedrag"
                            rightText={price(19.25)}
                        />
                        <TextLine
                            leftText="Gratis bezorging na"
                            rightText={price(50)}
                        />
                    </View>
                </ScrollView>
                <View style={styles.bottomLine}>
                    <TouchableOpacity style={styles.submitContainer1}>
                        <View
                            style={styles.submitContainer2}
                            colorName="secondary"
                        >
                            <Text style={styles.submitText}>Afrekenen</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = createStyles({
    container: {
        flex: 1,
    },
    topLine: {
        height: 50,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
    },
    description: {
        borderWidth: 2,
        borderColor: "#1292eb",
        height: 100,
        width: "100%",
        padding: 5,
        alignItems: "flex-start",
        textAlignVertical: "top",
    },
    afhalenButton: {
        height: 50,
        width: 120,
        justifyContent: "center",
        alignItems: "center",
    },
    itemsContainer: {
        alignItems: "center",
        width: "100%",
        borderBottomWidth: 1,
        paddingVertical: 10,
    },
    submitContainer1: {
        height: "100%",
        width: "90%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        overflow: "hidden",
    },
    submitContainer2: {
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    submitText: {
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
    },
    bottomLine: {
        height: 50,
        width: "100%",
        bottom: 0,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 20,
    },
    afhalenLine: {
        width: "100%",
        justifyContent: "space-between",
        flexDirection: "row",
        marginVertical: 20,
    },
    afhalenButtonContainer: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        overflow: "hidden",
    },
    afhalenText: {
        color: "white",
    },
    descriptionTopText: {
        alignSelf: "flex-start",
        fontWeight: "bold",
        fontSize: 18,
        marginTop: 10,
        marginBottom: 5,
    },
    bigText: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
    savingContainer: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        marginVertical: 20,
    },
    totalLineText: {
        fontWeight: "bold",
    },
    content: {
        flex: 1,
        ...spacerStyles.pxmd,
        marginTop: 10,
    },
})
