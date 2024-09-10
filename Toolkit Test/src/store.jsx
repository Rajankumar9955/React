import { configureStore } from "@reduxjs/toolkit";
import CntReducer from "./counterSlice"

const store=configureStore({
    reducer:{
        mycounter:CntReducer,
    }
})
export default store