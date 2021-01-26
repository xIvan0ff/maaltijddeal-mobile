import { Header, StackHeaderProps } from "@react-navigation/stack"
import * as React from "react"
import {
    Image,
    Platform,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    useColorScheme,
} from "react-native"
import { textStyles } from "@styles/text"
import { Text, View } from "../Themed"
import { DrawerHeaderProps } from "@react-navigation/drawer/lib/typescript/src/types"
import { Ionicons } from "@expo/vector-icons"
import { spacerStyles } from "@styles/spacer"
import { cn } from "@utils/cn"
import { useColors } from "@hooks/useColors"
import { useNavigation } from "@react-navigation/native"
import { SafeAreaView } from "react-native-safe-area-context"

const logo = require("@assets/images/logo.png")

type ICustomHeaderProps = StackHeaderProps | DrawerHeaderProps

export const CustomHeader: React.FC<ICustomHeaderProps> = ({ scene }) => {
    const colors = useColors()
    const { options } = scene.descriptor
    const title = options.headerTitle ?? scene.route.name

    const navigation = useNavigation()

    const onBackPress = () => {
        navigation.goBack()
    }

    return (
        <View style={styles.header}>
            <View style={cn(styles.container, spacerStyles.pxsm)}>
                <TouchableOpacity onPress={onBackPress}>
                    <Ionicons
                        name="arrow-back"
                        size={24}
                        color={colors.primary}
                        style={spacerStyles.mxsm}
                    />
                </TouchableOpacity>
                <Text style={{ ...textStyles.title }}>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
        paddingTop: 5,
    },
    logo: {
        width: 57,
        height: 40,
        marginRight: 10,
    },
})
