import * as React from "react"
import { View, Text } from "@components/Themed"
import { Platform, StatusBar, StyleSheet } from "react-native"
import { StackHeaderProps } from "@react-navigation/stack"

import { Ionicons } from "@expo/vector-icons"
import { textStyles } from "@styles/text"
import { cn } from "@utils/cn"
import { spacerStyles } from "@styles/spacer"
import { TouchableOpacity } from "react-native-gesture-handler"
import { useColors } from "@hooks/useColors"

type IAddressHeaderProps = StackHeaderProps & {
    onMenuPress?: () => void
}

export const AddressHeader: React.FC<IAddressHeaderProps> = ({
    onMenuPress,
}) => {
    const colors = useColors()

    return (
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
