import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { createStackNavigator } from "@react-navigation/stack"
import { AddressPickerScreen } from "@screens/AddressPickerScreen"
import { DealTabScreen } from "@screens/DealTabScreen"
import { DeliveryScreen } from "@screens/DeliveryScreen"
import { PickUpScreen } from "@screens/PickUpScreen"
import TabOneScreen from "@screens/TabOneScreen"
import TabTwoScreen from "@screens/TabTwoScreen"
import { TOSTabScreen } from "@screens/TOSTabScreen"
import {
    DrawerParamList,
    HomeStackParamList,
    RootStackParamList,
} from "types/navigation"
import { HomeTopTabParamList } from "typesOld"
import { AddressHeader } from "@components/navigation/AddressHeader"

import { SafeAreaView } from "react-native-safe-area-context"
import { CustomHeader } from "@components/navigation/CustomHeader"
import { useColors } from "@hooks/useColors"

const RootStack = createStackNavigator<RootStackParamList>()

export const RootStackNavigator: React.FC = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <RootStack.Navigator>
                <RootStack.Screen
                    name="Drawer"
                    component={DrawerNavigator}
                    options={{
                        headerShown: false,
                    }}
                />
            </RootStack.Navigator>
        </SafeAreaView>
    )
}

const Drawer = createDrawerNavigator<DrawerParamList>()

export const DrawerNavigator: React.FC = () => {
    const colors = useColors()

    return (
        <Drawer.Navigator
            drawerType="slide"
            drawerContentOptions={{
                activeTintColor: colors.primary,
            }}
        >
            <Drawer.Screen
                name="HomeStack"
                component={HomeStackNavigator}
                options={{
                    drawerLabel: "Home",
                }}
            />
            <Drawer.Screen
                name="TermsOfService"
                component={TOSTabScreen}
                options={{
                    header: (props) => <CustomHeader {...props} />,
                    headerShown: true,
                    drawerLabel: "Terms of Service",
                    headerTitle: "Terms of Service",
                }}
            />
            <Drawer.Screen
                name="TestOne"
                component={TabOneScreen}
                options={{
                    header: (props) => <CustomHeader {...props} />,
                    headerShown: true,
                    drawerLabel: "Test One",
                    headerTitle: "Test One",
                }}
            />
            <Drawer.Screen
                name="TestTwo"
                component={TabTwoScreen}
                options={{
                    header: (props) => <CustomHeader {...props} />,
                    headerShown: true,
                    drawerLabel: "Test Two",
                    headerTitle: "Test Two",
                }}
            />
        </Drawer.Navigator>
    )
}

const HomeStack = createStackNavigator<HomeStackParamList>()

export const HomeStackNavigator: React.FC = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="HomeTopTab"
                component={HomeTopTabNavigator}
                options={{
                    header: (props) => <AddressHeader {...props} />,
                }}
            />
            <HomeStack.Screen
                name="Deal"
                component={DealTabScreen}
                options={{
                    header: (props) => <CustomHeader {...props} />,
                }}
            />
            <HomeStack.Screen
                name="AddressPicker"
                component={AddressPickerScreen}
                options={{
                    header: (props) => <CustomHeader {...props} />,
                    headerTitle: "Choose address",
                }}
            />
        </HomeStack.Navigator>
    )
}

const HomeTopTab = createMaterialTopTabNavigator<HomeTopTabParamList>()

export const HomeTopTabNavigator: React.FC = () => {
    const colors = useColors()

    return (
        <HomeTopTab.Navigator
            tabBarOptions={{
                activeTintColor: colors.primary,
                indicatorStyle: {
                    backgroundColor: colors.primary,
                },
            }}
        >
            <HomeTopTab.Screen name="Delivery" component={DeliveryScreen} />
            <HomeTopTab.Screen name="PickUp" component={PickUpScreen} />
        </HomeTopTab.Navigator>
    )
}
