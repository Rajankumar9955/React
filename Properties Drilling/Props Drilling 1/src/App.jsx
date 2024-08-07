// ======================line one======================



// import { createContext } from "react";
// import Comp1 from "./Comp1";
// import { useState } from "react";
// const userContext=createContext();
// const App=()=>{
//   const [user,setUser]=useState("Rajan");
//   return(
//     <>
//     <button onClick={()=>{setUser("Madan")}}>Change Name!</button>
//     <h1>Welcome to App section:{user}</h1>
//     <userContext.Provider value={{user,setUser}}>
//       <Comp1/>
//     </userContext.Provider>
//     </>
//   )
// }
// export default App;
// export {userContext};

// ============================Line two===============================


// import { createContext, useState } from "react";
// import Comp1 from "./Comp1";
// const App=createContext();
// const App=()=>{
//   const [color,setColor]=useState("Blue");
//   return(
//     <>
//     <App.Provider value={{color,setColor}}>
//     <Comp1/>
//     </App.Provider>
    
    
//     </>
//   )
// }
// export default App;
// export {App};


// ================================App===================================

import { useContext } from "react";
import { myContext } from "./ColorContext";
const App=()=>{
  const [color,setColor]=useContext(myContext);
  return(
    <>
          <button onClick={()=>{setColor("red")}}>click me</button>   
          <h1 style={{color:color}}>Welcome to bhopla</h1>  
    </>
  )
}
export default App;