import * as React from "react"
import { View, Text } from "@components/Themed"
import { Platform, StatusBar, StyleSheet } from "react-native"
import { StackHeaderProps } from "@react-navigation/stack"

import { Ionicons } from "@expo/vector-icons"
import { textStyles } from "@styles/text"
import { cn } from "@utils/cn"
import { spacerStyles } from "@styles/spacer"

type IAddressHeaderProps = StackHeaderProps

export const AddressHeader: React.FC<IAddressHeaderProps> = () => {
    return (
        <View style={styles.header}>
            <View style={cn(styles.container, spacerStyles.pxsm)}>
                <Ionicons
                    style={spacerStyles.mxsm}
                    name="ios-menu-outline"
                    size={24}
                    color="black"
                />
                <View>
                    <Text style={textStyles.bold} colorName="primary">
                        Address
                    </Text>
                    <Text style={textStyles.small}>ul. Stara Planina 12</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 50,
        marginTop: Platform.OS == "ios" ? 20 : StatusBar.currentHeight,
        overflow: "hidden",
        paddingBottom: 5,
    },
    container: {
        elevation: 5,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
})
