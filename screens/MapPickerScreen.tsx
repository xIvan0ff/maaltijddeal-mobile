import { containerStyles } from "@styles/container"
import * as React from "react"
import { View, Text } from "@components/Themed"
import { Dimensions, Image } from "react-native"
import MapView, { Region } from "react-native-maps"
import { useState, useEffect } from "react"
import { StackNavigationProp } from "@react-navigation/stack"
import { HomeStackParamList } from "types/navigation"
import { useNavigation } from "@react-navigation/native"
import { Address, LatLng } from "types/location"
import { useRef } from "react"
import {
    GooglePlaceDetail,
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
import { spacer } from "@styles/spacer"
import { useStackGeoLocation } from "@hooks/useStackGeoLocation"

type MapPickerScreenNavigationProps = StackNavigationProp<HomeStackParamList>
interface IMapPickerScreenProps {}

const pointer = require("@assets/images/pointer.png")

export const MapPickerScreen: React.FC<IMapPickerScreenProps> = () => {
    const navigation = useNavigation<MapPickerScreenNavigationProps>()

    const map = useRef<MapView>(null)
    const autocomplete = useRef<GooglePlacesAutocompleteRef>(null)

    const colors = useColors()

    const { locationState, dispatch } = useStackGeoLocation(navigation)

    const [mapAddress, setMapAddress] = useState<Address>()

    useEffect(() => {
        if (locationState.localAddress) {
            setMapAddress(locationState.localAddress)

            const { lat, lng } = locationState.localAddress.position

            map.current?.setCamera({
                center: {
                    latitude: lat,
                    longitude: lng,
                },
                zoom: 17,
            })
        }
    }, [locationState.localAddress])

    const animateMove = (location: LatLng) => {
        map.current?.animateCamera({
            center: {
                latitude: location.lat,
                longitude: location.lng,
            },
            zoom: 17,
        })
    }

    const onMapMove = (region: Region) => {
        const position = mapAddress?.position

        if (
            region.latitude !== position?.lat ||
            region.longitude !== position?.lng
        ) {
            reverseGeocode(region.latitude, region.longitude)
                .then((geocode) => {
                    setMapAddress({
                        address: geocode.address,
                        position: geocode.position,
                        postCode: geocode.postCode,
                    })

                    autocomplete.current?.setAddressText(geocode.address)
                })
                .catch(() => {
                    // Invalid address
                })
        }
    }

    const onPlacesAutocomplete = (details: GooglePlaceDetail) => {
        animateMove(details.geometry.location)
    }

    const onReturnPress = () => {
        const position = locationState.localAddress?.position

        if (position) {
            animateMove(position)
        }
    }

    return (
        <View style={containerStyles.container}>
            <View style={{ flex: 1, zIndex: 1 }}>
                <GooglePlacesAutocomplete
                    placeholder="Search"
                    ref={autocomplete}
                    onPress={(_, details) =>
                        details ? onPlacesAutocomplete(details) : undefined
                    }
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
                    onRegionChangeComplete={onMapMove}
                >
                    <Image source={pointer} style={styles.pointer} />
                </MapView>
                <View style={styles.locationButton}>
                    <Button onClick={onReturnPress}>
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
    ...elevation(3),
    zIndex: 5,
    position: "absolute",
    bottom: 20,
    right: 20,
    borderRadius: 1000,
    padding: spacer.small,
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
