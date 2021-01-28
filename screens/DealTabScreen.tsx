import { DealOptionItem } from "@components/deal/dealOptionItem"
import { Ionicons } from "@expo/vector-icons"
import { useColors } from "@hooks/useColors"
import { textStyles } from "@styles/text"
import { DealOption } from "../typesOld"
import { cn } from "@utils/cn"
import * as React from "react"
import { Dimensions, Image, StyleSheet } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { SafeAreaView } from "react-native-safe-area-context"
import { View, Text } from "../components/Themed"
import { Button } from "@components/Button"
import { StackNavigationProp } from "@react-navigation/stack"
import { HomeStackParamList } from "types/navigation"
import { useNavigation } from "@react-navigation/native"

const logo = require("@assets/images/testfood.jpg")

const testOption: DealOption = {
    id: 122,
    title: "az",
    description:
        "Sum sum sum beeeeSum sum sum beeeeSum sum sum beeeeSum sum sum beeeeSum sum sum beeeeSum sum sum beeee",
    price: Math.random(),
}

type DealScreenNavigationProp = StackNavigationProp<HomeStackParamList>

export const DealTabScreen: React.FC = () => {
    const navigation = useNavigation<DealScreenNavigationProp>()

    const onInfoClick = () => {
        navigation.push("RestaurantTopTab")
    }

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
                            <Button onClick={onInfoClick}>
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
    dealOptions: {},
})
