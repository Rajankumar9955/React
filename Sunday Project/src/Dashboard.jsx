import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";




const Dashboard=()=>{
  const [usrname,setUname]=useState("");
  const [usremail,setEmail]=useState("");
  const mynav=useNavigate();
  useEffect(()=>{
    const name=localStorage.getItem("uname");
    const email=localStorage.getItem("uemail")
    setEmail(email);
    setUname(name);
    if(!name)
    {
      mynav("/");
    }
  },[]);
  const logout=()=>{
    localStorage.clear();
    mynav("/");
  }
  return(
    <>
    
    <h3>Welcome:{usrname}</h3>
    <h3>Email:{usremail}</h3>
    <button onClick={logout}>Log-out Here!</button>
    </>
  )
}
export default Dashboard;