import { createScrollableListActions, ScrollableListActions } from "./actions"
import { ScrollableListState } from "./types"

const createScrollableListReducer = <T extends string>(name: T) => (
    state: ScrollableListState<T>,
    action: ScrollableListActions<T>
) => {
    const actions = createScrollableListActions(name)

    switch (action.type) {
        case actions.LOAD_ITEMS:
            break
        case actions.NEXT_PAGE:
            break
    }
}
