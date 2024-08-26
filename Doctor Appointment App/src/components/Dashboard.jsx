






import Button from 'react-bootstrap/Button';
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
        message.error("you are successfully loged-out");
    }
    return(
        <>
        <center>
        <h3 style={{marginTop:"60px"}}>Welcome: {usrname}</h3>
        <h3>Email: {usremail}</h3>
        <Button variant="primary" onClick={logout} style={{marginTop:"20px"}}>
        log-out here!
      </Button>
        {/* <hr  size="4" color="red"/> */}
        </center>
        </>
    )
}
export default Dashboard;