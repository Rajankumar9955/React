import { createSlice } from "@reduxjs/toolkit";
const MultipleSlice=createSlice({
    name:"mycounter",
    initialState:{
        cnt:0
    },
    reducers:{
        increment:(state)=>{state.cnt=state.cnt+1;
        },

        decrement:(state)=>{
            
            if(state.cnt<=-1)
            {
                alert("no negative decrement")
            }
            else{
                state.cnt=state.cnt-1
            }
            
        }
        
    }
})
export default MultipleSlice.reducer;
export const{increment,decrement}=MultipleSlice.actions;