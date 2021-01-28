import React, { useCallback, useEffect, useRef, useState } from "react"
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler"
import { Text } from "./Themed"
import {
    StyleSheet,
    ImageBackground,
    View,
    Animated,
    Easing,
} from "react-native"
import { Filter } from "../types"
import RangeSlider, { Slider } from "react-native-range-slider-expo"
import { Picker } from "@react-native-picker/picker"
import { RadioButton } from "react-native-paper"
import { price } from "@utils/price"
import { spacerStyles } from "@styles/spacer"

const image = require("@assets/images/americanfood.jpeg")

interface IFilterPage {}
interface IFilterComponent {
    filter: Filter
    onToggle: Function
}

const americanFilter: Filter = {
    name: "american",
    img: image,
    isToggled: false,
}

const defaultHeight = 130
const FilterComponent: React.FC<IFilterComponent> = ({ filter, onToggle }) => {
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
                        outputRange: [defaultHeight, defaultHeight * 2],
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

export const FilterPage: React.FC<IFilterPage> = (props) => {
    const [filters, setFilters] = useState([
        { ...americanFilter, name: "american1" },
        { ...americanFilter, name: "american2" },
        { ...americanFilter, name: "american3" },
        { ...americanFilter, name: "american4" },
        { ...americanFilter, name: "american5" },
        { ...americanFilter, name: "american6" },
        { ...americanFilter, name: "american7" },
        { ...americanFilter, name: "american8" },
        { ...americanFilter, name: "american9" },
    ])

    const [toggledFilters, setToggledFilters] = useState<Filter[]>([])
    const [selectedPriceRange, setSelectedPriceRange] = useState(-1)

    const clearButton = (
        <View style={FilterPageStyles.clearButtonContainer}>
            <TouchableOpacity
                style={FilterPageStyles.clearButton}
                onPress={() => {
                    let newFilters: Filter[] = []
                    filters.forEach((curr) => {
                        newFilters.push({ ...curr, isToggled: false })
                    })
                    setFilters(newFilters)
                    setSelectedPriceRange(-1)
                }}
            >
                <Text style={FilterPageStyles.clearText}>
                    Clear all filters
                </Text>
            </TouchableOpacity>
        </View>
    )

    const toggledFiltersCounter = (
        <View
            style={{
                alignSelf: "center",
                position: "absolute",
                left: 5,
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 1,
                borderRadius: 100,
                height: 30,
                width: 30,
            }}
        >
            <Text
                style={{
                    fontSize: 25,
                    color: "white",
                }}
            >
                {toggledFilters.length}
            </Text>
        </View>
    )

    useEffect(() => {
        const newFilters: Filter[] = []
        filters.forEach((filter: Filter) => {
            if (filter.isToggled) {
                newFilters.push(filter)
            }
        })
        setToggledFilters(newFilters)
    }, [filters])

    return (
        <View style={FilterPageStyles.container}>
            <View
                style={{
                    flexDirection: "row",
                    height: "10%",
                    width: "100%",
                    padding: 10,
                    justifyContent: "space-between",
                }}
            >
                <View
                    style={{
                        ...FilterPageStyles.priceButtonContainer,
                        backgroundColor:
                            selectedPriceRange === 10 ? "orange" : "white",
                    }}
                >
                    <TouchableOpacity
                        style={FilterPageStyles.priceButton}
                        onPress={() => setSelectedPriceRange(10)}
                    >
                        <Text style={FilterPageStyles.priceButtonText}>
                            {"<"}
                            {price(10)}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        ...FilterPageStyles.priceButtonContainer,
                        backgroundColor:
                            selectedPriceRange === 20 ? "orange" : "white",
                    }}
                >
                    <TouchableOpacity
                        style={FilterPageStyles.priceButton}
                        onPress={() => setSelectedPriceRange(20)}
                    >
                        <Text style={FilterPageStyles.priceButtonText}>
                            {"<"}
                            {price(20)}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        ...FilterPageStyles.priceButtonContainer,
                        backgroundColor:
                            selectedPriceRange === 30 ? "orange" : "white",
                    }}
                >
                    <TouchableOpacity
                        style={FilterPageStyles.priceButton}
                        onPress={() => setSelectedPriceRange(30)}
                    >
                        <Text style={FilterPageStyles.priceButtonText}>
                            {"<"}
                            {price(30)}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView style={FilterPageStyles.filtersContainer}>
                <View style={{ paddingBottom: 30 }}>
                    {filters.map((filter) => (
                        <FilterComponent
                            key={filter.name}
                            filter={filter}
                            onToggle={() => {
                                setFilters(
                                    filters.map((currFilter: Filter) => {
                                        return currFilter === filter
                                            ? {
                                                  ...currFilter,
                                                  isToggled: !currFilter.isToggled,
                                              }
                                            : currFilter
                                    }),
                                )
                            }}
                        />
                    ))}
                </View>
            </ScrollView>
            <View style={FilterPageStyles.bottomLine}>
                {toggledFilters.length !== 0 || selectedPriceRange !== -1 ? (
                    clearButton
                ) : (
                    <View />
                )}
                {/* <View
                    style={{
                        width: "10%",
                        height: "100%",
                        backgroundColor: "blue",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Text style={{ fontSize: 25, color: "white" }}>
                        {toggledFilters.length}
                    </Text>
                </View> */}
                <View style={FilterPageStyles.applyContainer}>
                    <TouchableOpacity
                        style={FilterPageStyles.applyButton}
                        onPress={() => {}}
                    >
                        <View
                            style={{
                                flexDirection: "row",
                                width: "100%",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            {toggledFilters.length !== 0 ? (
                                toggledFiltersCounter
                            ) : (
                                <View />
                            )}

                            <Text style={FilterPageStyles.applyText}>
                                Apply filters
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const FilterPageStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    priceButtonContainer: {
        flex: 1,
        elevation: 4,
        borderRadius: 100,
    },
    priceButton: {
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    priceButtonText: {
        fontSize: 30,
        color: "black",
    },
    filtersContainer: {
        paddingVertical: 20,
    },
    counter: {},
    sliderContainer: {
        width: "100%",
    },
    bottomLine: {
        left: 0,
        bottom: 0,
        flexDirection: "row",
        height: 50,
        width: "100%",
        ...spacerStyles.pxmd,
    },
    clearButtonContainer: {
        width: 150,
        height: 50,
        backgroundColor: "orange",

        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        borderRadius: 5,
    },
    clearButton: {},
    clearText: {
        color: "white",
        fontSize: 20,
    },
    applyContainer: {
        flex: 1,
        borderRadius: 5,
        overflow: "hidden",
    },
    applyButton: {
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",
    },
    applyText: {
        fontSize: 30,
        color: "white",
    },
})

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
