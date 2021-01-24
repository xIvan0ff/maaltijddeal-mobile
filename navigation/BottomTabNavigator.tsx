import { AddressHeader } from "@components/navigation/AddressHeader"
import { Ionicons } from "@expo/vector-icons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createStackNavigator } from "@react-navigation/stack"
import * as React from "react"
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
    HomeTabParamList,
    TabOneParamList,
    TabTwoParamList,
    DealTabParamList,
} from "../types"

const BottomTab = createBottomTabNavigator<BottomTabParamList>()

export default function BottomTabNavigator() {
    const colorScheme = useColorScheme()

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <BottomTab.Navigator
                initialRouteName="HomeTab"
                tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
            >
                <BottomTab.Screen
                    name="HomeTab"
                    component={HomeTabNavigator}
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
                <BottomTab.Screen
                    name="DealTab"
                    component={DealTabNavigator}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <TabBarIcon name="ios-fast-food" color={color} />
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

function HomeTabNavigator() {
    return (
        <HomeTabStack.Navigator>
            <HomeTabStack.Screen
                name="HomeTabScreen"
                component={HomeTabScreen}
                options={{
                    header: (props) => <AddressHeader {...props} />,
                    headerTitle: "MaaltijdDeal",
                }}
            />
        </HomeTabStack.Navigator>
    )
}
const DealTabStack = createStackNavigator<DealTabParamList>()

function DealTabNavigator() {
    return (
        <DealTabStack.Navigator>
            <DealTabStack.Screen
                name="DealTabScreen"
                component={DealTabScreen}
                options={{
                    header: (props) => <CustomHeader {...props} />,
                    headerTitle: "MaaltijdСделка",
                }}
            />
        </DealTabStack.Navigator>
    )
}
