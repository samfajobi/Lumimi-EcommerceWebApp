import { createSlice } from '@reduxjs/toolkit'


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0
    },
    reducers: {
        addProducts: (state, action) => {
            state.quantity += 1;
            state.total += action.payload.price;
            state.products.push(action.payload.product)

        }

    }
})


export const { addProducts } = cartSlice.actions
export default cartSlice.reducer;