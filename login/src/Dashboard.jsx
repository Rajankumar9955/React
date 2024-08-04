const name=localStorage.getItem("uname")
const email=localStorage.getItem("uemail")


const Dashboard=()=>{
    return(
        <>
        <h1>Welcome user:{name}</h1>
        <h1>Welcome user:{email}</h1>
        
        </>
    )
}
export default Dashboard;