export type RootStackParamList = {
    Root: undefined
    NotFound: undefined
}

export type BottomTabParamList = {
    TabOne: undefined
    TabTwo: undefined
    HomeTab: undefined
    DealTab: undefined
}

export type TabOneParamList = {
    TabOneScreen: undefined
}

export type TabTwoParamList = {
    TabTwoScreen: undefined
}

export type HomeTabParamList = {
    HomeTabScreen: undefined
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

export type DrawerParamList = {
    HomeTab: undefined
    TOSTab: undefined
}

export type DealTabParamList = {
    DealTabScreen: undefined
}

export type HomeTopTabParamList = {
    Delivery: undefined
    PickUp: undefined
}
