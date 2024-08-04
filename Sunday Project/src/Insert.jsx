import axios from 'axios';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Insert=()=>{
    const [input,setInput]=useState({});
    const handleInput=(e)=>{
           let name=e.target.name;
           let value=e.target.value;
           setInput((values)=>({...values,[name]:value}))
           console.log(input);
    }
    const handleSubmit=(e)=>
    {
        e.preventDefault();
        let url="http://localhost:3000/Student";
        axios.post(url,input).then((res)=>{
            console.log(res);
              toast.success("Insert SuccessFully");
        })
    }

    return(
        <>
        
        <div style={{width:"100%",height:"100px"}}>
            <div style={{width:"400px", margin:"auto"}}>
            <h1 >Insert Data!</h1>
        <Form.Control  type="text" name="rollno" value={input.rollno}  placeholder="Enter the Rollno" onChange={handleInput}/>
      <br />
      <Form.Control type="text"  name="name" value={input.name}placeholder="Enter the Name" onChange={handleInput} />
      <br />
      <Form.Control  type="text" name="city" value={input.city} placeholder="Enter the city" onChange={handleInput}/>
      <br />
      <Form.Control  type="text" name="fees" value={input.fees} placeholder="Enter the Fees" onChange={handleInput}/>
      <br />
      <button onClick={handleSubmit}>Save Data</button>
       </div> 
       </div>
       <ToastContainer />
        </>
    )
}
export default Insert;



