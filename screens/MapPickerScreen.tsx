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
import { Button } from "@components/Button"
import { MaterialIcons } from "@expo/vector-icons"
import { elevation } from "@styles/elevation"
import { createStyles, style } from "@styles/createStyles"
import { useColors } from "@hooks/useColors"

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

    const colors = useColors()

    const animateMove = (location: LatLng) => {
        map.current?.animateCamera({
            center: {
                latitude: location.lat,
                longitude: location.lng,
            },
            zoom: 17,
        })
    }

    useEffect(() => {
        ;(async () => {
            const { status } = await Location.requestPermissionsAsync()
            if (status !== "granted") {
                const location = await getIPLocation()
                if (location !== null) {
                    setState({
                        ...state,
                        location,
                    })
                }
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
            <View style={{ flex: 1, zIndex: 1 }}>
                <GooglePlacesAutocomplete
                    placeholder="Search"
                    ref={autocomplete}
                    onPress={(data, details = null) => {
                        if (details) {
                            animateMove({
                                lat: details?.geometry.location.lat,
                                lng: details?.geometry.location.lng,
                            })
                        }
                    }}
                    currentLocation={true}
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
                            if (reversedAddress !== null) {
                                autocomplete.current?.setAddressText(
                                    reversedAddress
                                )
                            }
                        })()
                    }}
                >
                    <Image source={pointer} style={styles.pointer} />
                </MapView>
                <View style={styles.locationButton}>
                    <Button
                        onClick={() => {
                            if (state.location) {
                                animateMove(state.location)
                            }
                        }}
                    >
                        <MaterialIcons
                            name="my-location"
                            size={44}
                            color={colors.tint}
                        />
                    </Button>
                </View>
            </View>
        </View>
    )
}

const locationButton = style({
    ...elevation(5),
    zIndex: 5,
    position: "absolute",
    bottom: "5%",
    right: "5%",
    borderRadius: 10,
})

const styles = createStyles({
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
        marginTop: 5,
        width: "95%",
    },
    locationButton,
})
