import React, { useState } from "react"
import { View, Text } from "@components/Themed"
import { Platform, StatusBar, StyleSheet } from "react-native"
import { StackHeaderProps } from "@react-navigation/stack"

import { Ionicons } from "@expo/vector-icons"
import { textStyles } from "@styles/text"
import { cn } from "@utils/cn"
import { spacerStyles } from "@styles/spacer"
import { TouchableOpacity } from "react-native-gesture-handler"
import { useColors } from "@hooks/useColors"
import { Dim } from "@components/Dim"

type IAddressHeaderProps = StackHeaderProps & {
    onMenuPress?: () => void
}

export const AddressHeader: React.FC<IAddressHeaderProps> = ({
    onMenuPress,
}) => {
    const colors = useColors()

    const [addressOpen, setAddressOpen] = useState(false)

    const onHeaderPress = () => {
        setAddressOpen(!addressOpen)
    }

    return (
        <View>
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
                                <Text
                                    style={textStyles.bold}
                                    colorName="primary"
                                >
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
                    <View style={styles.address}>
                        <View style={styles.row}>
                            <Ionicons
                                style={spacerStyles.mxsm}
                                name="navigate"
                                size={24}
                                color={colors.primary}
                            />
                            <Text>Use my current location</Text>
                        </View>
                        <View style={styles.row}>
                            <Ionicons
                                style={spacerStyles.mxsm}
                                name="map"
                                size={24}
                                color={colors.primary}
                            />
                            <Text>Choose on map</Text>
                        </View>
                    </View>
                )}
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
    address: {
        position: "absolute",
        top: "100%",
        right: 0,
        left: 0,
    },
    row: {
        flexDirection: "row",
    },
})
