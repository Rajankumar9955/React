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


import { useSelector,useDispatch } from "react-redux";
import { changeColor } from "./ColorSlice";

const App=()=>{
  const color=useSelector((state)=>state.mycolor.color);
  const dispatch=useDispatch();
  return(
    <>
    <h1>wel come</h1>
    <button onClick={()=>{dispatch(changeColor())}}>change Color</button>
    <div style={{width:"300px",height:"300px",backgroundColor:color}}></div>
    
    
    </>
  )
}
export default App;