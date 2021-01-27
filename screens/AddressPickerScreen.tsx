import * as React from "react"
import { View, Text } from "@components/Themed"
import { Appearance, Image, StyleSheet } from "react-native"
import { containerStyles } from "@styles/container"
import { StaticMap } from "@components/StaticMap"
import { Ionicons } from "@expo/vector-icons"
import { spacerStyles } from "@styles/spacer"
import { useColors } from "@hooks/useColors"

interface IAddressPickerScreenProps {}

export const AddressPickerScreen: React.FC<IAddressPickerScreenProps> = () => {
    const colors = useColors()

    return (
        <View style={containerStyles.container}>
            <View style={cardStyle}>
                <StaticMap
                    center={{
                        lat: 42.5,
                        lng: 27.46,
                    }}
                    height={200}
                />
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
