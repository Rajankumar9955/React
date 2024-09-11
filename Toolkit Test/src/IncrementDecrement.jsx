import { useSelector,useDispatch } from "react-redux"
import { decrement,increment } from "./MultipleSlice"
 const IncrementDecreament=()=>{
 
     const count=useSelector((state)=>state.mycounter.cnt+1)
     const dispatch=useDispatch();

    return(
        
        <>
        <h1>count:{count}</h1>
        <button onClick={()=>{dispatch(increment())}}>Increamet</button>
        <button onClick={()=>{dispatch(decrement())}}>Decrement</button>

        

        
        </>
    )
}
export default IncrementDecreament