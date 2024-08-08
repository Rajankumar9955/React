import { createSlice } from "@reduxjs/toolkit";
const counterSlice=createSlice({
    name:"mycounter",
    initialState:{
        cnt:0
    },
    reducers:{
        increment:(state)=>{
            state.cnt=state.cnt+1;
        },
        decrement:(state)=>{
            state.cnt=state.cnt-1;
        }

    }
})
export default counterSlice.reducer;
export const {increment,decrement}=counterSlice.actions;