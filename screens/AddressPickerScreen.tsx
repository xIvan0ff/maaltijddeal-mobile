import * as React from "react"
import { View, Text } from "@components/Themed"
import { Image, StyleSheet } from "react-native"
import { containerStyles } from "@styles/container"

interface IAddressPickerScreenProps {}

export const AddressPickerScreen: React.FC<IAddressPickerScreenProps> = () => {
    return (
        <View style={containerStyles.container}>
            <Image
                style={{
                    width: "100%",
                    height: 200,
                }}
                source={{
                    uri:
                        "https://maps.googleapis.com/maps/api/staticmap?center=42.5,27.46&zoom=13&size=600x300&maptype=roadmap&markers=42.5,27.46&key=AIzaSyB6dHECVZB14mT2MdA0xd9vzNfl7pq06IM",
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({})
