import { containerStyles } from "@styles/container"
import * as React from "react"
import { View, Text } from "@components/Themed"
import { Dimensions, Image, Platform, StyleSheet } from "react-native"
import MapView, { LocalTile, Marker } from "react-native-maps"
import { TextInput } from "react-native-gesture-handler"
import { useState, useEffect } from "react"
import { usePermissions } from "expo-permissions"
import { StackNavigationProp } from "@react-navigation/stack"
import { HomeStackParamList } from "types/navigation"
import { useNavigation } from "@react-navigation/native"
import { LatLng } from "types/location"
import { useRef } from "react"
import { getIPLocation } from "@utils/ipLocation"
import * as Location from "expo-location"
import {
    GooglePlacesAutocomplete,
    GooglePlacesAutocompleteRef,
} from "react-native-google-places-autocomplete"
import { googleMapsApiKey } from "@config/keys"
import { reverseGeocode } from "@utils/reverseGeocode"

type MapPickerScreenNavigationProps = StackNavigationProp<HomeStackParamList>
interface IMapPickerScreenProps {}

const pointer = require("@assets/images/pointer.png")

export const MapPickerScreen: React.FC<IMapPickerScreenProps> = () => {
    const navigation = useNavigation<MapPickerScreenNavigationProps>()
    const map = useRef<MapView>(null)
    const autocomplete = useRef<GooglePlacesAutocompleteRef>(null)
    const [state, setState] = useState<{ location?: LatLng }>({})
    const [permission, askForPermission] = usePermissions("location", {
        ask: true,
    })

    useEffect(() => {
        ;(async () => {
            const { status } = await Location.requestPermissionsAsync()
            if (status !== "granted") {
                return
            }

            let location
            if (Platform.OS === "ios") {
                location = await Location.getLastKnownPositionAsync()
            } else {
                location = await Location.getCurrentPositionAsync()
            }

            if (location) {
                setState({
                    ...state,
                    location: {
                        lat: location.coords.latitude,
                        lng: location.coords.longitude,
                    },
                })
            }
        })()
    }, [])

    useEffect(() => {
        if (state.location !== undefined) {
            map.current?.setCamera({
                center: {
                    latitude: state.location.lat,
                    longitude: state.location.lng,
                },
                zoom: 17,
            })
        }
    }, [state.location])
    return (
        <View style={containerStyles.container}>
            <View style={{ flex: 1, zIndex: 9999 }}>
                <GooglePlacesAutocomplete
                    placeholder="Search"
                    ref={autocomplete}
                    onPress={(data, details = null) => {
                        if (details) {
                            map.current?.animateCamera({
                                center: {
                                    latitude: details?.geometry.location.lat,
                                    longitude: details?.geometry.location.lng,
                                },
                            })
                        }
                    }}
                    fetchDetails={true}
                    query={{ key: googleMapsApiKey, language: "en" }}
                    styles={{
                        container: styles.search,
                        textInputContainer: { width: "100%" },
                        poweredContainer: { display: "none" },
                        listView: {
                            position: "absolute",
                            top: 50,
                            width: "100%",
                        },
                    }}
                />
            </View>
            <View>
                <MapView
                    style={styles.map}
                    provider="google"
                    ref={map}
                    showsUserLocation={true}
                    onRegionChangeComplete={(region) => {
                        ;(async () => {
                            const reversedAddress = await reverseGeocode(
                                region.latitude,
                                region.longitude
                            )

                            autocomplete.current?.setAddressText(
                                reversedAddress
                            )
                        })()
                    }}
                >
                    <Image source={pointer} style={styles.pointer} />
                </MapView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get("screen").width,
        height: "100%",
    },
    pointer: {
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: [{ translateX: -17.5 }, { translateY: -50 }],
        height: 50,
        width: 35,
    },
    search: {
        zIndex: 9999,
        marginTop: 5,
        width: "95%",
    },
})
