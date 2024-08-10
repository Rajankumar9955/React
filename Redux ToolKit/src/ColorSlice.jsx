// import { createSlice } from "@reduxjs/toolkit";
// const counterSlice=createSlice({
//     name:"mycounter",
//     initialState:{
//         cnt:0
//     },
//     reducers:{
//         increment:(state)=>{
//             state.cnt=state.cnt+1;
//         },
//         decrement:(state)=>{
//             state.cnt=state.cnt-1;
//         }

//     }
// })
// export default counterSlice.reducer;   // isko create componenets mein
// export const {increment,decrement}=counterSlice.actions;


/*
================================Increament or decrement==================================================

*/


// import { createSlice } from "@reduxjs/toolkit";
// const colorSlice=createSlice({
//     name:"mycolor",
//     initialState:{
//         color:"pink",
//     },
//     reducers:{
//         changeColor:(state)=>{
//             state.color="green";
//         }
//     }
// })
// export default colorSlice.reducer;
// export const {changeColor}=colorSlice.actions;

/*
=================================change color===================================
*/

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