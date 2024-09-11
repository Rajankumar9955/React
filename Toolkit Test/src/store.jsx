


import { configureStore } from "@reduxjs/toolkit";
import CntReducer from "./MultipleSlice";
const  store=configureStore({
    reducer:{
        mycounter:CntReducer,
    }
})
export default store;