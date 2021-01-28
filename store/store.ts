import { combineEpics, createEpicMiddleware } from "redux-observable"
import { createStore, applyMiddleware } from "redux"
import { rootReducer, RootState } from "./root"
import { LocationActionTypes } from "./location/actions"
import { locationEpics } from "./location"

// type Actions

export const rootEpics = combineEpics(locationEpics)

const epicMiddleware = createEpicMiddleware<
    LocationActionTypes,
    LocationActionTypes,
    RootState
>()

export const store = createStore(rootReducer, applyMiddleware(epicMiddleware))

epicMiddleware.run(rootEpics)
