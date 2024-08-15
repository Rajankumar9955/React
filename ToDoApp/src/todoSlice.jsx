import { createSlice } from "@reduxjs/toolkit";

const todoSlice=createSlice({
    name:"todo",
    initialState:{
        task:[]
    },
    reducers:{
        addTask:(state,action)=>{
            state.task.push(action.payload);
        },

    }
})
export default todoSlice.reducer;
export const {addTask}=todoSlice.actions;