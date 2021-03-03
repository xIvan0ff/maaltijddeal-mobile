import React, { useEffect, useState } from "react"
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler"
import { Text, View } from "./Themed"
import { Filter } from "../typesOld"
import { spacerStyles } from "@styles/spacer"
import { createStyles } from "@styles/createStyles"
import { PriceComponent } from "./PriceComponent"
import { FilterComponent } from "./FilterComponent"
import { filter } from "rxjs/operators"
import { FilterLine } from "./FilterLine"

const image = require("@assets/images/americanfood.jpeg")

interface IFilterPage {}

const americanFilter: Filter = {
    name: "american",
    img: image,
    isToggled: false,
}

type PriceRange = {
    price: number
}

const prices: PriceRange[] = [{ price: 10 }, { price: 20 }, { price: 30 }]

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
        // { ...americanFilter, name: "american1" },
        // { ...americanFilter, name: "american2" },
        // { ...americanFilter, name: "american3" },
        // { ...americanFilter, name: "american4" },
        // { ...americanFilter, name: "american5" },
        // { ...americanFilter, name: "american6" },
        // { ...americanFilter, name: "american7" },
        // { ...americanFilter, name: "american8" },
        // { ...americanFilter, name: "american9" },
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
                <Text style={FilterPageStyles.clearText} colorName="secondary">
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
            colorName="primary"
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
                    justifyContent: "center",
                }}
            >
                {prices.map((currPrice) => {
                    return (
                        <PriceComponent
                            key={currPrice.price}
                            price={currPrice.price}
                            selected={selectedPriceRange === currPrice.price}
                            onSelect={() => {
                                setSelectedPriceRange(
                                    selectedPriceRange === currPrice.price
                                        ? -1
                                        : currPrice.price,
                                )
                            }}
                        />
                    )
                })}
            </View>
            <ScrollView style={FilterPageStyles.filtersContainer}>
                <View style={{ paddingBottom: 30 }}>
                    {filters.map((filter) => (
                        <FilterLine
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
                <View
                    style={{
                        width: "95%",
                        flexDirection: "row",
                    }}
                >
                    {toggledFilters.length !== 0 ||
                    selectedPriceRange !== -1 ? (
                        clearButton
                    ) : (
                        <View />
                    )}
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
                                    height: "100%",
                                    overflow: "hidden",
                                    borderRadius: 5,
                                }}
                                colorName="primary"
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
        </View>
    )
}

const FilterPageStyles = createStyles({
    container: {
        flex: 1,
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
        bottom: 10,
        height: 50,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        ...spacerStyles.pxmd,
    },
    clearButtonContainer: {
        width: 150,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
    },
    clearButton: {},
    clearText: {
        fontSize: 20,
    },
    applyContainer: {
        flex: 1,
        overflow: "hidden",
    },
    applyButton: {
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    applyText: {
        fontSize: 22,
        color: "white",
    },
})
