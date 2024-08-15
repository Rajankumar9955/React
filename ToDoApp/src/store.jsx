import { configureStore } from "@reduxjs/toolkit";
import todoRed from "./todoSlice";
const store=configureStore({
    reducer:{
         todo:todoRed
    }
})
export default store;