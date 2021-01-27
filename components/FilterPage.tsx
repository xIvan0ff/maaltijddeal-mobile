import React, { useCallback, useEffect, useRef, useState } from "react"
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler"
import { Text } from "./Themed"
import {
    StyleSheet,
    Image,
    ImageSourcePropType,
    ImageBackground,
    View,
    Animated,
} from "react-native"
import { Filter } from "../types"
import RangeSlider, { Slider } from "react-native-range-slider-expo"

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
        Animated.timing(widthValue, {
            toValue: filter.isToggled ? 80 : 90,
            useNativeDriver: false,
        }).start()
        Animated.timing(heightValue, {
            toValue: filter.isToggled ? 0 : 20,
            useNativeDriver: false,
        }).start()
    }

    return (
        <TouchableOpacity
            onPress={() => {
                onToggle()
                animate()
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
                        outputRange: [defaultHeight, 100 + defaultHeight],
                    }),
                }}
            >
                <ImageBackground
                    source={filter.img}
                    style={FilterStyles.image}
                    imageStyle={{ width: "100%" }}
                >
                    <View style={FilterStyles.nameContainer}>
                        <View
                            style={{
                                height: "auto",
                                width: "100%",
                                backgroundColor: "rgba(66, 66, 66, 0.4)",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Text style={FilterStyles.name}>{filter.name}</Text>
                        </View>
                    </View>
                </ImageBackground>
            </Animated.View>
            <View
                style={{
                    ...FilterStyles.toggle,
                    backgroundColor: filter.isToggled
                        ? "rgba(16, 232, 5, 1)"
                        : "gray",
                }}
            />
        </TouchableOpacity>
    )
}

export const FilterPage: React.FC<IFilterPage> = (props) => {
    const [filters, setFilters] = useState([
        { ...americanFilter },
        { ...americanFilter },
        { ...americanFilter },
        { ...americanFilter },
        { ...americanFilter },
        { ...americanFilter },
        { ...americanFilter },
        { ...americanFilter },
        { ...americanFilter },
    ])

    const [toggledCount, setToggledCount] = useState(0)
    const [low, setLow] = useState(0)
    const [high, setHigh] = useState(100)

    useEffect(() => {
        let counter = 0
        filters.forEach((filter: Filter) => {
            if (filter.isToggled) {
                counter += 1
            }
        })
        setToggledCount(counter)
    }, [filters])

    return (
        <View style={FilterPageStyles.container}>
            <View style={{ marginTop: 100 }}>
                <RangeSlider
                    styleSize="small"
                    inRangeBarColor="orange"
                    outOfRangeBarColor="blue"
                    min={5}
                    max={100}
                    fromValueOnChange={(val) => setLow(val)}
                    toValueOnChange={(val) => setHigh(val)}
                    initialFromValue={5}
                />
            </View>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginHorizontal: 50,
                }}
            >
                <Text>{low}</Text>
                <Text>{high}</Text>
            </View>
            <Text style={{ padding: 10 }}>{toggledCount}</Text>
            <ScrollView>
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
            </ScrollView>
        </View>
    )
}

const FilterPageStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

const FilterStyles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingVertical: 10,
        justifyContent: "center",
    },
    image: {
        height: "100%",
        width: "100%",
    },
    toggle: {
        height: "100%",
        width: "3%",
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
    name: {
        fontSize: 50,
        color: "white",
        opacity: 1,
    },
})
