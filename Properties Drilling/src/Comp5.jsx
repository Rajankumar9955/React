
import { useContext } from "react";
import { userContext } from "./App";
const Comp5=()=>{
  const {user,setUser}=useContext(userContext)
  return(
    <>
    <button onClick={()=>{setUser("Suraj")}}>Change Name</button>
    <h1>Wel-come to Comp5 section:{user}</h1>
    </>
  )
}
export default Comp5;