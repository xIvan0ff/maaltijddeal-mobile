import React, { useEffect, useRef } from "react"
import { TouchableOpacity } from "react-native-gesture-handler"
import { Text } from "./Themed"
import {
    StyleSheet,
    ImageBackground,
    View,
    Animated,
    Easing,
} from "react-native"
import { Filter } from "../typesOld"

interface IFilterComponent {
    filter: Filter
    onToggle: Function
}

const defaultHeight = 130
export const FilterComponent: React.FC<IFilterComponent> = ({
    filter,
    onToggle,
}) => {
    const widthValue = useRef(new Animated.Value(80)).current
    const heightValue = useRef(new Animated.Value(0)).current
    const animate = () => {
        const easing = Easing.out(Easing.linear)
        const duration = 100
        Animated.timing(widthValue, {
            toValue: filter.isToggled ? 90 : 80,
            useNativeDriver: false,
            easing,
            duration,
        }).start()
        Animated.timing(heightValue, {
            toValue: filter.isToggled ? 20 : 0,
            useNativeDriver: false,
            easing,
            duration,
        }).start()
    }

    useEffect(() => {
        animate()
    }, [onToggle])

    return (
        <TouchableOpacity
            delayPressIn={0}
            delayLongPress={0}
            delayPressOut={0}
            onPress={() => {
                onToggle()
            }}
            style={FilterStyles.container}
        >
            <Animated.View
                style={{
                    width: widthValue.interpolate({
                        inputRange: [0, 100],
                        outputRange: ["0%", "100%"],
                    }),
                    height: heightValue.interpolate({
                        inputRange: [0, 100],
                        outputRange: [defaultHeight, defaultHeight * 1.5],
                    }),
                    flexDirection: "row",
                    overflow: "hidden",
                    borderRadius: 10,
                }}
            >
                <ImageBackground
                    source={filter.img}
                    style={FilterStyles.image}
                    imageStyle={{ width: "100%" }}
                >
                    <View style={FilterStyles.nameContainer}>
                        <View style={FilterStyles.nameBackground}>
                            <Text style={FilterStyles.name}>{filter.name}</Text>
                        </View>
                    </View>
                </ImageBackground>
                <View
                    style={{
                        ...FilterStyles.toggle,
                        backgroundColor: filter.isToggled
                            ? "rgba(16, 232, 5, 1)"
                            : "gray",
                    }}
                />
            </Animated.View>
        </TouchableOpacity>
    )
}

const FilterStyles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginVertical: 10,
        justifyContent: "center",
    },
    image: {
        height: "100%",
        width: "98.5%",
    },
    toggle: {
        height: "100%",
        width: "1.5%",
    },
    nameContainer: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
    },
    nameBackground: {
        height: "auto",
        width: "100%",
        backgroundColor: "rgba(66, 66, 66, 0.4)",
        alignItems: "center",
        justifyContent: "center",
    },
    name: {
        fontSize: 50,
        color: "white",
        opacity: 1,
    },
})
