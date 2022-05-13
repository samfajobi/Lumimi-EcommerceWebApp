import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartReduxSlice'



export const store = configureStore({
    reducer: {
        cart: cartReducer

    }
})
