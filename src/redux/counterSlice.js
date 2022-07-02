import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counter :0 
}

export const countSlice = createSlice({
    name : 'counter',
    initialState,
    reducers: {
        increment : (state,action)=>{
            state.counter += 1
        },
        decrement : (state,action)=>{
            state.counter -= 1
        }
    }
})

export const {increment , decrement} = countSlice.actions
export default countSlice.reducer;