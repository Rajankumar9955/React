// import { configureStore } from "@reduxjs/toolkit";
// import cntReducer from "./counterSlice";
// const store=configureStore({
//     reducer:{
//         mycounter:cntReducer,
//     }
// })
// export default store;
//====================================================================

// import { configureStore } from "@reduxjs/toolkit";



// import clrReducer from "./ColorSlice";
// const store=configureStore({
//     reducer:{
//         mycolor:clrReducer
//     }
// })
// export default store

// =========================================================================


import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./ColorSlice";
const store=configureStore({
    reducer:{
        bgcolor:colorReducer
    }
})
export default store;