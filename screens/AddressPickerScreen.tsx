import * as React from "react"
import { View, Text } from "@components/Themed"
import { Appearance, Image, StyleSheet } from "react-native"
import { containerStyles } from "@styles/container"
import { StaticMap } from "@components/StaticMap"
import { Ionicons } from "@expo/vector-icons"
import { spacerStyles } from "@styles/spacer"
import { useColors } from "@hooks/useColors"
import { useSelector } from "react-redux"
import { RootState } from "@store/rootReducer"

interface IAddressPickerScreenProps {}

export const AddressPickerScreen: React.FC<IAddressPickerScreenProps> = () => {
    const locationState = useSelector((state: RootState) => state.location)

    const colors = useColors()

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
                    <Text>Use my current address</Text>
                </View>
            </View>

            <View style={cardStyle}>
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
            </View>
        </View>
    )
}

const cardStyle = [containerStyles.fullWidthCard, spacerStyles.mbmd]

const styles = StyleSheet.create({})
