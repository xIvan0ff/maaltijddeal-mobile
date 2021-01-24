import * as React from "react"
import { StyleSheet } from "react-native"
import { View, Text } from "../components/Themed"

// type HomeScreenNavigationProp = CompositeNavigationProp<
//     DrawerNavigationProp<DrawerParamList, "HomeTab">,
//     StackNavigationProp<HomeTabParamList>
// >

export const HomeTabScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text>2</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 5,
    },
})
