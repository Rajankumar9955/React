


import { createContext } from "react";
import { useState } from "react";
const userContext=createContext();

const LoginContext=({children})=>{
    const [user,setUser]=useState({name:"",auth:false})
    const userlogin=(nm)=>{
        setUser({name:nm,auth:true})
    }
    const userlogout=()=>{
          setUser({name:"",auth:"false"});
    }
    return(
        <>
            <userContext.Provider value={{user, userlogin, userlogout}}>
             {children}
            </userContext.Provider>
        
        </>
    )
}
export default LoginContext;
export{userContext};