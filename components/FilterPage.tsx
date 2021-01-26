import React, { useEffect, useState } from "react"
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler"
import { Text } from "./Themed"
import {
    StyleSheet,
    Image,
    ImageSourcePropType,
    ImageBackground,
    View,
} from "react-native"

const image = require("@assets/images/americanfood.jpeg")

interface IFilterPage {}
interface IFilterComponent {
    filter: Filter
    onToggle: Function
}
type Filter = {
    name: string
    img: ImageSourcePropType
    isToggled: boolean
}

const americanFilter: Filter = {
    name: "american",
    img: image,
    isToggled: false,
}

const FilterComponent: React.FC<IFilterComponent> = ({ filter, onToggle }) => {
    return (
        <TouchableOpacity
            style={FilterStyles.container}
            onPress={() => {
                onToggle()
            }}
        >
            <ImageBackground
                source={filter.img}
                style={{
                    ...FilterStyles.image,
                    width: filter.isToggled ? "90%" : "85%",
                }}
                imageStyle={{ width: "100%" }}
            >
                <View
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Text style={FilterStyles.name}>{filter.name}</Text>
                </View>
            </ImageBackground>
            <View
                style={{
                    ...FilterStyles.toggle,
                    backgroundColor: filter.isToggled ? "green" : "gray",
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

const height = 150
const FilterStyles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    image: {
        height,
    },
    toggle: {
        height,
        width: "5%",
    },
    name: {
        fontSize: 50,
        color: "blue",
    },
})
