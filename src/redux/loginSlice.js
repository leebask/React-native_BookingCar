import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    account: {
        username: '',
        password: ''
    }
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers:
    {
        setAccount: (state,action) => {
            // console.log(action)
            state.account =action.payload;
        }
    }
})

export const { setAccount } = loginSlice.actions
export default loginSlice.reducers