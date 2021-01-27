import { combineReducers } from "redux"
import { locationReducer } from "./location/reducer"

export const rootReducer = combineReducers({
    location: locationReducer,
})

export type RootState = ReturnType<typeof rootReducer>
