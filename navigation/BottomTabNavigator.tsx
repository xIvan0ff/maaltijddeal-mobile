import { AddressHeader } from "@components/navigation/AddressHeader"
import { Ionicons } from "@expo/vector-icons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import {
    createDrawerNavigator,
    DrawerContent,
    DrawerContentScrollView,
    DrawerNavigationProp,
} from "@react-navigation/drawer"
import { createStackNavigator } from "@react-navigation/stack"
import * as React from "react"
import { TOSTabScreen } from "@screens/TOSTabScreen"
import { SafeAreaView } from "react-native-safe-area-context"
import { CustomHeader } from "../components/navigation/CustomHeader"

import Colors from "../constants/Colors"
import useColorScheme from "../hooks/useColorScheme"
import { DealTabScreen } from "../screens/DealTabScreen"
import { HomeTabScreen } from "../screens/HomeTabScreen"
import TabOneScreen from "../screens/TabOneScreen"
import TabTwoScreen from "../screens/TabTwoScreen"
import {
    BottomTabParamList,
    DrawerParamList,
    HomeTabParamList,
    TabOneParamList,
    TabTwoParamList,
    TOSTabParamList,
    HomeTopTabParamList,
} from "../typesOld"
import { useNavigation } from "@react-navigation/native"
import { useColors } from "@hooks/useColors"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { DeliveryScreen } from "@screens/DeliveryScreen"
import { PickUpScreen } from "@screens/PickUpScreen"
import { AddressPickerScreen } from "@screens/AddressPickerScreen"

const BottomTab = createBottomTabNavigator<BottomTabParamList>()

export default function BottomTabNavigator() {
    const colorScheme = useColorScheme()

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <BottomTab.Navigator
                initialRouteName="TabOne"
                tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
            >
                <BottomTab.Screen
                    name="HomeTab"
                    component={DrawerNavigator}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <TabBarIcon name="ios-home" color={color} />
                        ),
                    }}
                />
                <BottomTab.Screen
                    name="TabOne"
                    component={TabOneNavigator}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <TabBarIcon name="ios-code" color={color} />
                        ),
                    }}
                />
                <BottomTab.Screen
                    name="TabTwo"
                    component={TabTwoNavigator}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <TabBarIcon name="ios-code" color={color} />
                        ),
                    }}
                />
            </BottomTab.Navigator>
        </SafeAreaView>
    )
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
    name: React.ComponentProps<typeof Ionicons>["name"]
    color: string
}) {
    return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>()

function TabOneNavigator() {
    return (
        <TabOneStack.Navigator>
            <TabOneStack.Screen
                name="TabOneScreen"
                component={TabOneScreen}
                options={{ headerTitle: "Tab One Title" }}
            />
        </TabOneStack.Navigator>
    )
}

const TabTwoStack = createStackNavigator<TabTwoParamList>()

function TabTwoNavigator() {
    return (
        <TabTwoStack.Navigator>
            <TabTwoStack.Screen
                name="TabTwoScreen"
                component={TabTwoScreen}
                options={{ headerTitle: "Tab Two Title" }}
            />
        </TabTwoStack.Navigator>
    )
}

const HomeTabStack = createStackNavigator<HomeTabParamList>()

type HomeTabNavigationProp = DrawerNavigationProp<DrawerParamList, "HomeTab">

function HomeTabNavigator() {
    const navigation = useNavigation<HomeTabNavigationProp>()

    const onMenuPress = () => {
        navigation.toggleDrawer()
    }

    return (
        <HomeTabStack.Navigator>
            <HomeTabStack.Screen
                name="HomeTabScreen"
                component={HomeTopTabNavigator}
                options={{
                    header: (props) => (
                        <AddressHeader {...props} onMenuPress={onMenuPress} />
                    ),
                    headerTitle: "MaaltijdDeal",
                }}
            />
            <HomeTabStack.Screen
                name="DealTabScreen"
                component={DealTabScreen}
                options={{
                    header: (props) => <CustomHeader {...props} />,
                    headerTitle: "Shish tawook met frisdrank",
                }}
            />
            <HomeTabStack.Screen
                name="AddressPickerScreen"
                component={AddressPickerScreen}
                options={{
                    header: (props) => <CustomHeader {...props} />,
                    headerTitle: "Choose address",
                }}
            />
        </HomeTabStack.Navigator>
    )
}

const TOSTabStack = createStackNavigator<TOSTabParamList>()

function TOSTabNavigator() {
    return (
        <TOSTabStack.Navigator>
            <TOSTabStack.Screen
                name="TOSTabScreen"
                component={TOSTabScreen}
                options={{
                    header: (props) => <CustomHeader {...props} />,
                    headerTitle: "Terms of Service",
                }}
            />
        </TOSTabStack.Navigator>
    )
}

const Drawer = createDrawerNavigator<DrawerParamList>()

export function DrawerNavigator() {
    const colors = useColors()

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Drawer.Navigator
                initialRouteName="HomeTab"
                drawerType="slide"
                drawerContentOptions={{
                    activeTintColor: colors.primary,
                }}
            >
                <Drawer.Screen
                    name="HomeTab"
                    options={{
                        drawerLabel: "Home",
                        swipeEnabled: false,
                    }}
                    component={HomeTabNavigator}
                />
                <Drawer.Screen
                    options={{
                        drawerLabel: "Terms of Service",
                    }}
                    name="TOSTab"
                    component={TOSTabNavigator}
                />
                <Drawer.Screen
                    options={{
                        drawerLabel: "Test 1",
                    }}
                    name="TabOne"
                    component={TabOneNavigator}
                />
                <Drawer.Screen
                    options={{
                        drawerLabel: "Test 2",
                    }}
                    name="TabTwo"
                    component={TabTwoNavigator}
                />
            </Drawer.Navigator>
        </SafeAreaView>
    )
}

const HomeTopTab = createMaterialTopTabNavigator<HomeTopTabParamList>()

function HomeTopTabNavigator() {
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
