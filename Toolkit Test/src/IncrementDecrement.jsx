 import { useSelector,useDispatch } from "react-redux";
 import { increment,decrement } from "./MultipleSlice";
 const IncrementDecreament=()=>{
    const count=useSelector((state)=>state.mycount.cnt);
    const dispatch=useDispatch();
    return(
        
        <>
        
        <h1 align="center"></h1>
        <button onClick={()=>{dispatch(increment)}}>increment</button>
        <button onClick={()=>{dispatch(decrement)}}>Decrement</button>

        
        </>
    )
}
export default IncrementDecreament