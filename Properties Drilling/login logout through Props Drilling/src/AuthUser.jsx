


import { useContext } from "react";
import { userContext } from "./LoginContext";
const AuthUser=()=>{
    const {user,userlogout}=useContext(userContext);
    return(
        <>
        <h1>Welcome :{user.name}</h1>
        <button onClick={()=>{userlogout()}}>logout</button>
        </>
    )
}
export default AuthUser;