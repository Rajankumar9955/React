import { configureStore } from "@reduxjs/toolkit";
import cntReducer from "./counterSlice";
const store=configureStore({
    reducer:{
        mycounter:cntReducer,
    }
})
export default store;