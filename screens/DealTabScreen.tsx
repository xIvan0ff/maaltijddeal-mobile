import { DealOptionItem } from "@components/deal/dealOptionItem"
import { Ionicons } from "@expo/vector-icons"
import { useColors } from "@hooks/useColors"
import { textStyles } from "@styles/text"
import { DealOption } from "../typesOld"
import { cn } from "@utils/cn"
import * as React from "react"
import { Dimensions, Image, StyleSheet } from "react-native"
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler"
import { SafeAreaView } from "react-native-safe-area-context"
import { View, Text } from "../components/Themed"
import { Button } from "@components/Button"
import { spacerStyles } from "@styles/spacer"
import { useState } from "react"

const logo = require("@assets/images/testfood.jpg")
const window = Dimensions.get("window")

const testOption: DealOption = {
    id: 122,
    title: "az",
    description:
        "Sum sum sum beeeeSum sum sum beeeeSum sum sum beeeeSum sum sum beeeeSum sum sum beeeeSum sum sum beeee",
    price: Math.random(),
}

export const DealTabScreen: React.FC = () => {
    const [value, setValue] = useState(1)

    return (
        <View style={styles.container}>
            <ScrollView
                bounces={false}
                stickyHeaderIndices={[1]}
                style={styles.container}
            >
                <Image source={logo} style={styles.dealImage} />
                <View>
                    <View style={styles.dealRestaurant} colorName="primary">
                        <View
                            style={styles.dealRestaurantNameContainer}
                            colorName="primary"
                        >
                            <Text
                                colorName="textOnPrimary"
                                style={textStyles.title}
                            >
                                Restaurant Name
                            </Text>
                        </View>
                        <View
                            style={styles.dealRestaurantInfoContainer}
                            colorName="primary"
                        >
                            <Button
                                onClick={() => {
                                    console.log(1)
                                }}
                            >
                                <Ionicons
                                    name="ios-information-circle"
                                    size={38}
                                    color="white"
                                />
                            </Button>
                        </View>
                    </View>
                </View>
                <View style={styles.dealOverview}>
                    <View style={styles.dealInfo}>
                        <View style={styles.dealTitlePrice}>
                            <Text
                                style={cn(textStyles.title, styles.dealTitle)}
                            >
                                Pasta naar keuze met blikje cola
                            </Text>
                            <View style={styles.dealPriceContainer}>
                                <Text style={styles.dealPrice}>$30.30</Text>
                            </View>
                        </View>
                        <Text style={styles.dealDescription}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </Text>
                    </View>
                    <View style={styles.dealOptionsContainer}>
                        <Text colorName="secondary" style={textStyles.title}>
                            Opties bij deze deal
                        </Text>
                        <View style={styles.dealOptions}>
                            <DealOptionItem option={testOption} />
                            <DealOptionItem option={testOption} />
                            <DealOptionItem option={testOption} />
                            <DealOptionItem option={testOption} />
                            <DealOptionItem option={testOption} />
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.bottomLine}>
                <View style={styles.addRemoveContainer}>
                    <TouchableOpacity
                        style={{
                            height: "auto",
                            justifyContent: "center",
                        }}
                        onPress={() => {
                            setValue(value + 1)
                        }}
                    >
                        <View
                            style={styles.addremoveButton}
                            colorName="primary"
                        >
                            <Text style={styles.addremoveText}>+</Text>
                        </View>
                    </TouchableOpacity>

                    <Text style={styles.counterText}>{value}</Text>

                    <TouchableOpacity
                        style={{
                            height: "auto",
                            justifyContent: "center",
                        }}
                        onPress={() => {
                            setValue(value - 1 < 1 ? 1 : value - 1)
                        }}
                    >
                        <View
                            style={styles.addremoveButton}
                            colorName="primary"
                        >
                            <Text style={styles.addremoveText}>-</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.addContainer}>
                    <View
                        style={{
                            borderRadius: 10,
                            elevation: 4,
                            paddingHorizontal: 10,
                        }}
                        colorName="secondary"
                    >
                        <TouchableOpacity
                            onPress={() => {}}
                            style={{
                                height: "100%",
                                width: "100%",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Text>Add to shopping cart</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
    },
    dealImage: {
        height: 200,
        width: "100%",
    },
    dealRestaurant: {
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    dealRestaurantNameContainer: {
        flex: 3,
    },
    dealRestaurantInfoContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    dealOverview: { margin: 15 },
    dealInfo: {
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#ebebeb",
    },
    dealTitle: {
        flex: 2,
        fontSize: 18,
    },
    dealDescription: { fontSize: 13 },
    dealTitlePrice: {
        display: "flex",
        flexDirection: "row",
    },
    dealPriceContainer: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    dealPrice: { fontSize: 18 },
    dealOptionsContainer: { marginTop: 20 },
    bottomLine: {
        width: "100%",
        height: 80,
        elevation: 10,
        flexDirection: "row",
        ...spacerStyles.pxmd,
        alignItems: "center",
        paddingBottom: 5,
    },
    addRemoveContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "30%",
        marginLeft: 20,
    },
    addremoveButton: {
        borderRadius: 100,
        height: 40,
        width: 40,
        alignItems: "center",
        justifyContent: "center",
    },
    addremoveText: {
        fontSize: 30,
    },
    addContainer: {
        height: 40,
        width: "80%",
        alignItems: "center",
        justifyContent: "center",
    },
    counterText: {
        marginHorizontal: 10,
    },
    dealOptions: {},
})
