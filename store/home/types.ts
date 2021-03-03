import { ScrollableListState } from "@store/scrollable-list/types"

type PickupScrollableListState = ScrollableListState<{
    test: string
}>

type DeliveryScrollableListState = ScrollableListState<{
    test: string
}>

export type HomeState = {
    pickup: PickupScrollableListState
    delivery: DeliveryScrollableListState
}
