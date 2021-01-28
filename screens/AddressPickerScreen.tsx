import React, { useCallback, useEffect } from "react"
import { View, Text } from "@components/Themed"
import { Appearance, Image, StyleSheet } from "react-native"
import { containerStyles } from "@styles/container"
import { StaticMap } from "@components/StaticMap"
import { Ionicons } from "@expo/vector-icons"
import { spacerStyles } from "@styles/spacer"
import { useColors } from "@hooks/useColors"
import { StackNavigationProp } from "@react-navigation/stack"
import { HomeStackParamList } from "types/navigation"
import { useFocusEffect, useNavigation } from "@react-navigation/native"
import { TouchableOpacity } from "react-native-gesture-handler"

import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@store/root"
import { usePermissions } from "expo-permissions"

import * as Permissions from "expo-permissions"
import { actions } from "@store/store"

import * as Location from "expo-location"
import { reverseGeocode } from "@utils/reverseGeocode"
import { useStackGeoLocation } from "@hooks/useStackGeoLocation"

type AddressPickerScreenNavigationProps = StackNavigationProp<HomeStackParamList>

interface IAddressPickerScreenProps {}

export const AddressPickerScreen: React.FC<IAddressPickerScreenProps> = () => {
    const colors = useColors()
    const navigation = useNavigation<AddressPickerScreenNavigationProps>()

    const { locationState } = useStackGeoLocation(navigation)

    return (
        <View style={containerStyles.container}>
            <View style={cardStyle}>
                {locationState.localAddress && (
                    <StaticMap
                        center={locationState.localAddress.position}
                        height={200}
                    />
                )}
                <View
                    style={[containerStyles.centeredRow, spacerStyles.mymd]}
                    colorName="none"
                >
                    <Ionicons
                        style={spacerStyles.mxmd}
                        name="navigate"
                        size={24}
                        color={colors.primary}
                    />
                    <Text>Use my current location</Text>
                </View>
            </View>

            <View style={cardStyle}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.push("MapPicker")
                    }}
                >
                    <View
                        style={[containerStyles.centeredRow, spacerStyles.mymd]}
                        colorName="none"
                    >
                        <Ionicons
                            style={spacerStyles.mxmd}
                            name="map"
                            size={24}
                            color={colors.primary}
                        />
                        <Text>Choose on map</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const cardStyle = [containerStyles.fullWidthCard, spacerStyles.mbmd]

const styles = StyleSheet.create({})
