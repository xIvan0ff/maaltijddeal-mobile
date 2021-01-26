export type RootStackParamList = {
    DrawerTab: undefined
    DealTab: undefined
    AddressPicker: undefined
}

export type DrawerParamList = {
    HomeTab: undefined
    TOSTab: undefined
    TabOne: undefined
    TabTwo: undefined
}

export type BottomTabParamList = {
    TabOne: undefined
    TabTwo: undefined
    HomeTab: undefined
}

export type TabOneParamList = {
    TabOneScreen: undefined
}

export type TabTwoParamList = {
    TabTwoScreen: undefined
}

export type HomeTabParamList = {
    HomeTabScreen: undefined
    DealTabScreen: undefined
    AddressPickerScreen: undefined
}

export type Restaurant = {
    id: string
    name: string
    description: string
    address: string
    postCode: string
    city: string
    website: string
    email: string
    phone: string
    fax: string

    logo: any
    rating: number
    ratingCount: number
    reviews: any[]
    location: any
    category: string[]
    workingHours: any[]

    deliveryPrice?: number
    freeDeliveryOrderAmount: number
    minimumOrderAmount: number

    delivery: boolean
    takeout: boolean
}

export type TOSTabParamList = {
    TOSTabScreen: undefined
}

export type HomeTopTabParamList = {
    Delivery: undefined
    PickUp: undefined
}
