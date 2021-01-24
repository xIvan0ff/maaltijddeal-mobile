import { AddressHeader } from "@components/navigation/AddressHeader"
import { Ionicons } from "@expo/vector-icons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import {
    createDrawerNavigator,
    DrawerNavigationProp,
} from "@react-navigation/drawer"
import { createStackNavigator } from "@react-navigation/stack"
import * as React from "react"
import { TOSTabScreen } from "@screens/TOSTabScreen"
import { CustomHeader } from "../components/navigation/CustomHeader"

import Colors from "../constants/Colors"
import useColorScheme from "../hooks/useColorScheme"
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
} from "../types"
import { useNavigation } from "@react-navigation/native"
import { useColors } from "@hooks/useColors"

const BottomTab = createBottomTabNavigator<BottomTabParamList>()

export default function BottomTabNavigator() {
    const colorScheme = useColorScheme()

    return (
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
                component={HomeTabScreen}
                options={{
                    header: (props) => (
                        <AddressHeader {...props} onMenuPress={onMenuPress} />
                    ),
                    headerTitle: "MaaltijdDeal",
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

function DrawerNavigator() {
    const colors = useColors()

    return (
        <Drawer.Navigator
            initialRouteName="HomeTab"
            drawerContentOptions={{
                activeTintColor: colors.primary,
            }}
        >
            <Drawer.Screen
                name="HomeTab"
                options={{
                    drawerLabel: "Home",
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
        </Drawer.Navigator>
    )
}
