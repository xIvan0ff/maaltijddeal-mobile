import { combineReducers } from "redux"
import { locationActions } from "./location/actions"
import { locationReducer } from "./location/reducer"

export const rootReducer = combineReducers({
    location: locationReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export const actions = {
    location: locationActions,
}
