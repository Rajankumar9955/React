import { createSlice } from "@reduxjs/toolkit";

const addtoCart=createSlice({
    name:"addCart",
    initialState:{
        cart:[]
    },
    reducers:{
        addcartData:(state,action)=>{
            state.cart.push(action.payload);
        }
    }
})
export default addtoCart.reducer;
export const {addcartData}=addtoCart.actions;