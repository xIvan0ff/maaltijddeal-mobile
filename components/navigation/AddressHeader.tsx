import React, { useState } from "react"
import { View, Text } from "@components/Themed"
import { Platform, StatusBar, StyleSheet } from "react-native"
import { StackHeaderProps, StackNavigationProp } from "@react-navigation/stack"

import { Ionicons } from "@expo/vector-icons"
import { textStyles } from "@styles/text"
import { cn } from "@utils/cn"
import { spacerStyles } from "@styles/spacer"
import { TouchableOpacity } from "react-native-gesture-handler"
import { useColors } from "@hooks/useColors"
import { Dim } from "@components/Dim"
import {
    CompositeNavigationProp,
    useNavigation,
} from "@react-navigation/native"
import { DrawerParamList } from "../../typesOld"
import {
    DrawerHeaderProps,
    DrawerNavigationProp,
} from "@react-navigation/drawer/lib/typescript/src/types"

import Animated from "react-native-reanimated"
import { HomeStackParamList } from "types/navigation"

type AddressHeaderNavigationProp = CompositeNavigationProp<
    DrawerNavigationProp<DrawerParamList, "HomeTab">,
    StackNavigationProp<HomeStackParamList>
>

type IAddressHeaderProps = StackHeaderProps

export const AddressHeader: React.FC<IAddressHeaderProps> = () => {
    const colors = useColors()

    const navigation = useNavigation<AddressHeaderNavigationProp>()

    const [addressOpen, setAddressOpen] = useState(false)

    const onHeaderPress = () => {
        // setAddressOpen(!addressOpen)
        navigation.push("AddressPicker")
    }

    const onChooseAddressPress = () => {}

    const onMenuPress = () => {
        navigation.toggleDrawer()
    }

    return (
        <View style={styles.wrapper}>
            <View style={styles.header}>
                <View style={cn(styles.container, spacerStyles.pxsm)}>
                    <TouchableOpacity onPress={onMenuPress}>
                        <Ionicons
                            style={spacerStyles.mxsm}
                            name="md-menu"
                            size={24}
                            color={colors.primary}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onHeaderPress}>
                        <View>
                            <Text style={textStyles.bold} colorName="primary">
                                Address
                            </Text>
                            <Text style={textStyles.small}>
                                ul. Stara Planina 12
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            {addressOpen && (
                <Animated.View style={styles.address}>
                    <View style={styles.row}>
                        <Ionicons
                            style={spacerStyles.mxsm}
                            name="navigate"
                            size={24}
                            color={colors.primary}
                        />
                        <Text>Use my current location</Text>
                    </View>
                    <TouchableOpacity onPress={onChooseAddressPress}>
                        <View style={styles.row}>
                            <Ionicons
                                style={spacerStyles.mxsm}
                                name="map"
                                size={24}
                                color={colors.primary}
                            />
                            <Text>Choose on map</Text>
                        </View>
                    </TouchableOpacity>
                </Animated.View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        position: "relative",
    },
    header: {
        height: 50,
        overflow: "hidden",
        paddingBottom: 5,
    },
    container: {
        elevation: 5,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    address: {
        // position: "absolute",
        // top: 20,
        // right: 0,
        // left: 0,
        // zIndex: 1000,
    },
    row: {
        flexDirection: "row",
    },
})
