import React, { useState } from "react"
import { View, Text } from "@components/Themed"
import { StyleSheet } from "react-native"
import { StackHeaderProps, StackNavigationProp } from "@react-navigation/stack"

import { Ionicons } from "@expo/vector-icons"
import { textStyles } from "@styles/text"
import { cn } from "@utils/cn"
import { spacerStyles } from "@styles/spacer"
import { TouchableOpacity } from "react-native-gesture-handler"
import { useColors } from "@hooks/useColors"
import {
    CompositeNavigationProp,
    useNavigation,
} from "@react-navigation/native"
import { DrawerParamList } from "../../typesOld"
import { DrawerNavigationProp } from "@react-navigation/drawer/lib/typescript/src/types"

import { HomeStackParamList } from "types/navigation"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@store/rootReducer"
import { actions } from "@store/store"

type AddressHeaderNavigationProp = CompositeNavigationProp<
    DrawerNavigationProp<DrawerParamList, "HomeTab">,
    StackNavigationProp<HomeStackParamList>
>

type IAddressHeaderProps = StackHeaderProps

export const AddressHeader: React.FC<IAddressHeaderProps> = () => {
    const locationState = useSelector((state: RootState) => state.location)

    const colors = useColors()

    const navigation = useNavigation<AddressHeaderNavigationProp>()

    const onHeaderPress = () => {
        navigation.push("AddressPicker")
    }

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
                                {locationState.selectedAddress.address}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
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
    row: {
        flexDirection: "row",
    },
})
