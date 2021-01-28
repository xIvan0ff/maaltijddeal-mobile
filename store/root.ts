import { combineReducers } from "redux"
import { combineEpics } from "redux-observable"
import { setLocalAddressEpic } from "./location/epics"
import { locationReducer } from "./location/reducer"

export const rootReducer = combineReducers({
    location: locationReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export const rootEpics = combineEpics(setLocalAddressEpic)
