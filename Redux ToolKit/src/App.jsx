import { useSelector,useDispatch } from "react-redux";
import { increment,decrement } from "./counterSlice";

const App=()=>{
  const count=useSelector((state)=>state.mycounter.cnt);
  const dispatch=useDispatch();
  return(
    <>
     <h1>welcome!</h1>
     <button onClick={()=>{dispatch(increment())}}>INcrement</button>
     <h1>{count}</h1>
     <button onClick={()=>{dispatch(decrement())}}>INcrement</button>
    
    </>
  )
}
export default App;