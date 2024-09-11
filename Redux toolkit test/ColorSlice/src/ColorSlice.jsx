import { createSlice } from "@reduxjs/toolkit";
const colorSlice=createSlice({
    name:"bgcolor",
    initialState:{
        color:"pink"
    },
    reducers:{
        changeColor:(state,action)=>{
            console.log(action.payload);
            state.color=action.payload;
        }
    }
})
export default colorSlice.reducer;
export const {changeColor}=colorSlice.actions;