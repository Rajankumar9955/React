import { configureStore } from "@reduxjs/toolkit";
import colorchange from "./ColorSlice";
const store=configureStore({
    reducer:{
        bgcolor:colorchange,
    }
})
export default store