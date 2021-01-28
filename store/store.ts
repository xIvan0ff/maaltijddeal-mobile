import { createEpicMiddleware } from "redux-observable"
import { createStore, applyMiddleware } from "redux"
import { rootEpics, rootReducer, RootState } from "./root"
import { locationActions, LocationActionTypes } from "./location/actions"

// type Actions

const epicMiddleware = createEpicMiddleware<
    LocationActionTypes,
    LocationActionTypes,
    RootState
>()

export const store = createStore(rootReducer, applyMiddleware(epicMiddleware))

epicMiddleware.run(rootEpics)

export const actions = {
    location: locationActions,
}
