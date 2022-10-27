import {combineReducers, configureStore} from "@reduxjs/toolkit";
import starShipSlice from "./starShipSlice";
import userSlice from "./userSlice";

const rootReducer = combineReducers({
    ship: starShipSlice,
    user: userSlice
})

export const store = configureStore({
    reducer: rootReducer
})