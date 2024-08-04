import { createContext } from "react";
import Comp1 from "./Comp1";
import { useState } from "react";
const userContext=createContext();
const App=()=>{
  const [user,setUser]=useState("Rajan");
  return(
    <>
    <button onClick={()=>{setUser("Madan")}}>Change Name!</button>
    <h1>Welcome to App section:{user}</h1>
    <userContext.Provider value={{user,setUser}}>
      <Comp1/>
    </userContext.Provider>
    </>
  )
}
export default App;
export {userContext};