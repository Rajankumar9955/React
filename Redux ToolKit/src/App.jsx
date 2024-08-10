// import { useSelector,useDispatch } from "react-redux";
// import { increment,decrement } from "./counterSlice";

// const App=()=>{
//   const count=useSelector((state)=>state.mycounter.cnt);
//   const dispatch=useDispatch();
//   return(
//     <>
//      <h1>welcome!</h1>
//      <button onClick={()=>{dispatch(increment())}}>INcrement</button>
//      <h1>{count}</h1>
//      <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
    
//     </>
//   )
// }
// export default App;

//===============================increment and decrement==================================


// import { useSelector,useDispatch } from "react-redux";
// import { changeColor } from "./ColorSlice";

// const App=()=>{
//   const color=useSelector((state)=>state.mycolor.color);
//   const dispatch=useDispatch();
//   return(
//     <>
//     <h1>wel come</h1>
//     <button onClick={()=>{dispatch(changeColor())}}>change Color</button>
//     <div style={{width:"300px",height:"300px",backgroundColor:color}}></div>
    
    
//     </>
//   )
// }
// export default App;


/*
   ========================change Color====================================
*/


import { useDispatch, useSelector } from "react-redux";
import { changeColor } from "./ColorSlice";
import { useState } from "react";
const App=()=>{
  const bgcolor=useSelector((state)=>state.bgcolor.color)
  const dispatch=useDispatch();
  const [val,setVal]=useState("");

  return(
    <>
    
    <h1>Welcome to ToolKit Example</h1>
    Enter Color:<input type="text" value={val} onChange={(e)=>{setVal(e.target.value)}}/>
    <button onClick={()=>{dispatch(changeColor(val))}}>Change color</button>
    <div style={{width:"400px",height:"400px",backgroundColor:bgcolor}}></div>
    
    </>
  )
}
export default App;