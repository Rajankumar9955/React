


import AuthUser from "./AuthUser";
import UnAuthor from "./UnAuthor";
import { userContext } from "./LoginContext";
import { useContext } from "react";
const App=()=>{
  const {user}=useContext(userContext);
  return(
    <>
    {user.auth? <AuthUser/>:<UnAuthor/>}
    </>
  )
}
export default App;