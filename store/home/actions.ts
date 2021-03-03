import {
    createScrollableListActions,
    ScrollableListLoadItems,
    ScrollableListNextPage,
} from "@store/scrollable-list/actions"

const deliveryActions = createScrollableListActions("delivery")
const pickupActions = createScrollableListActions("pickup")

type DeliveryNextPage = ScrollableListNextPage<"delivery">
type DeliveryLoadItems = ScrollableListLoadItems<"delivery">

export type DeliveryActions = DeliveryLoadItems | DeliveryNextPage

type PickupNextPage = ScrollableListNextPage<"pickup">
type PickupLoadItems = ScrollableListLoadItems<"pickup">

export type PickupActions = PickupLoadItems | PickupNextPage
