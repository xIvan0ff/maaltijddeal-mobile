type NextPageAction<T extends string> = `scrollableList-${T}/NEXT_PAGE`
type LoadItemsAction<T extends string> = `scrollableList-${T}/LOAD_ITEMS`

export const createScrollableListActions = <T extends string>(name: T) => {
    const NEXT_PAGE = `scrollableList-${name}/NEXT_PAGE` as NextPageAction<T>
    const LOAD_ITEMS = `scrollableList-${name}/LOAD_ITEMS` as LoadItemsAction<T>

    return {
        NEXT_PAGE,
        LOAD_ITEMS,
    }
}

export interface ScrollableListNextPage<T extends string> {
    type: NextPageAction<T>
}

export interface ScrollableListLoadItems<T extends string> {
    type: LoadItemsAction<T>
}

export type ScrollableListActions<T extends string> =
    | ScrollableListNextPage<T>
    | ScrollableListLoadItems<T>
