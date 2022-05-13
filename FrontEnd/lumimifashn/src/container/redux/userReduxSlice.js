import { createSlice } from '@reduxjs/toolkit';


const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false

    },
    reducers: {
        loginStart: ( state) => {
            state.isFetching = true
          
        },
        loginSucess: ( state, action) => {
            state.isFetching = false
            state.currentUser = action.payload
        },
        loginFail: ( state, action) => {
            state.isFetching = false

        }
    }

});


export const { loginStart, loginSucess, loginFail} = userSlice.actions;
export default userSlice.reducer;