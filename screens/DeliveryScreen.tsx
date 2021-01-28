import * as React from "react"
import { View, Text } from "@components/Themed"
import { ScrollView, StyleSheet } from "react-native"
import { Restaurant } from "../typesOld"
import { Product } from "@components/Product"
import { containerStyles } from "@styles/container"
import { spacerStyles } from "@styles/spacer"
import {
    CompositeNavigationProp,
    useNavigation,
} from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { MaterialTopTabNavigationProp } from "@react-navigation/material-top-tabs"
import { HomeStackParamList, HomeTopTabParamList } from "types/navigation"

type DeliveryScreenNavigationProp = CompositeNavigationProp<
    StackNavigationProp<HomeStackParamList, "HomeTopTab">,
    MaterialTopTabNavigationProp<HomeTopTabParamList>
>

interface IDeliveryScreenProps {}

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

export const DeliveryScreen: React.FC<IDeliveryScreenProps> = () => {
    const navigation = useNavigation<DeliveryScreenNavigationProp>()

    const onPress = () => {
        navigation.push("Deal")
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
                        state="open"
                        price={11.01}
                        oldPrice={13.01}
                        discount={15}
                        reviews={7}
                        rating={7}
                        restaurant={rest}
                        onPress={onPress}
                    />
                </View>
                <View style={spacerStyles.mylg}>
                    <Product
                        title="Shish tawook met frisdrank"
                        state="open"
                        price={11.01}
                        oldPrice={13.01}
                        discount={15}
                        reviews={7}
                        rating={7}
                        restaurant={rest}
                        onPress={onPress}
                    />
                </View>
                <View style={spacerStyles.mylg}>
                    <Product
                        title="Shish tawook met frisdrank"
                        state="open"
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
