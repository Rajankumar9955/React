import { createSlice } from "@reduxjs/toolkit";
const MultipaleSlice=createSlice({
    name:"mycounter",initialState:{cnt:0},
    reducers:{
        increment:(state)=>{state.cnt=state.cnt+1;
        },
        decrement:(state)=>{state.cnt=state.cnt-1}
    }
})
export default MultipaleSlice.reducer;
export const{increment,decrement}=MultipaleSlice.actions