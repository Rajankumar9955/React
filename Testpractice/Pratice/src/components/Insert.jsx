import axios from "axios";
import { useState } from "react";



const Insert=()=>{
    const [input,setInput]=useState({});
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
       setInput(values=>({...values,[name]:value}))
       console.log(input)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        let url="http://localhost:3000/student";
        axios.post(url,input).then((res)=>{
        console.log(res);
        alert("Saved data")
        })
    }
    return(
        <>
       
        <h1 style={{marginLeft:"200px",marginTop:"10px"}}>This is Insert section</h1>
        <div style={{width:"400px",marginLeft:"230px"}}>
       <input style={{width:"300px"}} type="text" name="emp_id" value={input.emp_id} placeholder="Enter EMP_id" onChange={handleInput} /><br/>
        <input style={{width:"300px"}} type="text" name="name" value={input.name} placeholder="Enter Name" onChange={handleInput}/><br />
        <input style={{width:"300px"}} type="text" name="degignation"  placeholder="Enter Degignation" value={input.degignation} onChange={handleInput}/><br />
       <input style={{width:"300px"}} type="text" name="department"  placeholder="Enter Department" value={input.department} onChange={handleInput}/><br />
       <input style={{width:"300px"}} type="text" name="basic_salary"  placeholder="Enter Basic_salary" value={input.basic_salary} onChange={handleInput}/><br />
        <button style={{marginLeft:"90px"}} onClick={handleSubmit}>Save Data!</button><br />
        </div>
        </>
    )
}
export default Insert;