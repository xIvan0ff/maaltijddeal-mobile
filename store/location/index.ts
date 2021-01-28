import { combineEpics } from "redux-observable"
import { setLocalAddressEpic } from "./epics"

export const locationEpics = combineEpics(setLocalAddressEpic)
