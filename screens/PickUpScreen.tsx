import * as React from "react"
import { View, Text } from "@components/Themed"
import { ScrollView, StyleSheet } from "react-native"
import { HomeTabParamList, HomeTopTabParamList, Restaurant } from "../typesOld"
import { containerStyles } from "@styles/container"
import { spacerStyles } from "@styles/spacer"
import { Product } from "@components/Product"
import {
    CompositeNavigationProp,
    useNavigation,
} from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { MaterialTopTabNavigationProp } from "@react-navigation/material-top-tabs"

interface IPickUpScreenProps {}

const rest: Restaurant = {
    address: "address",
    category: ["category"],
    city: "city",
    delivery: true,
    deliveryPrice: 7.01,
    id: "id",
    description: "description",
    email: "email",
    fax: "fax",
    freeDeliveryOrderAmount: 2,
    location: "location",
    logo: "logo",
    minimumOrderAmount: 2,
    name: "Golden Eat & Greet",
    phone: "phone",
    postCode: "postcode",
    rating: 7,
    ratingCount: 8,
    reviews: ["reviews"],
    takeout: true,
    website: "website",
    workingHours: ["workingHours"],
}

type DeliveryScreenNavigationProp = CompositeNavigationProp<
    StackNavigationProp<HomeTabParamList, "HomeTabScreen">,
    MaterialTopTabNavigationProp<HomeTopTabParamList>
>

export const PickUpScreen: React.FC<IPickUpScreenProps> = () => {
    const navigation = useNavigation<DeliveryScreenNavigationProp>()

    const onPress = () => {
        navigation.push("DealTabScreen")
    }

    return (
        <View style={containerStyles.container}>
            <ScrollView
                style={{
                    width: "100%",
                }}
            >
                <View style={spacerStyles.mylg}>
                    <Product
                        title="Shish tawook met frisdrank"
                        state="openInAnHour"
                        price={11.01}
                        oldPrice={13.01}
                        discount={15}
                        reviews={7}
                        rating={7}
                        restaurant={rest}
                        onPress={onPress}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({})
