import {
    NavigationContainer,
    DefaultTheme,
    DarkTheme,
} from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import * as React from "react"
import { ColorSchemeName } from "react-native"

import NotFoundScreen from "../screens/NotFoundScreen"
import { RootStackParamList } from "../typesOld"
import BottomTabNavigator, { DrawerNavigator } from "./BottomTabNavigator"
import LinkingConfiguration from "./LinkingConfiguration"
import { RootStackNavigator } from "./Navigator"

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({
    colorScheme,
}: {
    colorScheme: ColorSchemeName
}) {
    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
            <RootStackNavigator />
        </NavigationContainer>
    )
}
