import { combineReducers } from "redux";
import counterReducer from "./counterReducer";

export const rootReducer = combineReducers({
    // Add reducers here
    counter: counterReducer
})