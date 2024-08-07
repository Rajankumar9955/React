
import { useState } from "react";
import { useContext } from "react";
import { userContext } from "./LoginContext";

const UnAuthor=()=>{
    const [nmval,setNmvl]=useState("");

    const {userlogin}=useContext(userContext);
    return(
        <>
        <h1>LOgin form</h1>
        Enter Name: <input type="text" value={nmval} onChange={(e)=>{setNmvl(e.target.value)}}/>
        <button onClick={()=>{userlogin(nmval)}}>login</button>
        </>
    )
}
export default UnAuthor;