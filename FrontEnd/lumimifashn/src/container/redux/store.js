import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartReduxSlice'
import userReducer from "./userReduxSlice"



export const store = configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer

    }
})
