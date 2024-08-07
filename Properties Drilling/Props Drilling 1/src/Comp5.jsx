
// import { useContext } from "react";
// import { userContext } from "./App";
// const Comp5=()=>{
//   const {user,setUser}=useContext(userContext)
//   return(
//     <>
//     <button onClick={()=>{setUser("Suraj")}}>Change Name</button>
//     <h1>Wel-come to Comp5 section:{user}</h1>
//     </>
//   )
// }
// export default Comp5;

import { useContext, useState } from "react";
import { colorContext } from "./App";
const Comp5=()=>{
  const {color,setColor}=useContext(colorContext);
  const [val,setVal]=useState("")
    return(
      <>
      Enter color:<input type="text" value={val} onChange={(e)=>{setVal(e.target.value)}}/>
      <button onClick={()=>{setColor(val)}}>Click me!</button>
      <div style={{width:"200px",height:"200px",background:color}} >
       

      </div>
      
      </>
    )
}
export default Comp5;