


import { message } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard=()=>{
    const [usrname,setUname]=useState("");
    const [usremail,setEmail]=useState("");
    const mynav=useNavigate();
    useEffect(()=>{
        const name=localStorage.getItem("uname");
        const email=localStorage.getItem("uemail");
        setEmail(email);
        setUname(name);
        if(!name)
        {
            mynav("/");
        }
    },[])


    const logout=()=>{
        localStorage.clear();
        mynav("/");
        message.error("your are successfully loged-out");
    }
    return(
        <>
        <h3>Welcome:{usrname}</h3>
        <h3>Email:{usremail}</h3>
        <button onClick={logout}>log-out here!</button>
        <hr  size="4" color="red"/>
        </>
    )
}
export default Dashboard;