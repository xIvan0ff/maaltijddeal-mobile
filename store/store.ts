import { createEpicMiddleware } from "redux-observable"
import { createStore, applyMiddleware } from "redux"
import { rootReducer } from "./rootReducer"
import { locationActions } from "./location/actions"

const epicMiddleware = createEpicMiddleware()

export const store = createStore(rootReducer, applyMiddleware(epicMiddleware))

export const actions = {
    location: locationActions,
}
