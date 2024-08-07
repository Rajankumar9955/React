




import { createContext, useState } from "react";
const myContext=createContext();
const ColorContext=({children})=>{
    const [color,setColor]=useState("blue");
    return(
        <>
        <myContext.Provider value={{color,setColor}}>
           {children}
        </myContext.Provider>
        
        </>
    )
}
export default ColorContext;
export {myContext};