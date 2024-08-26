
import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


const BookShow=()=>{
    const [mydata, setMydata]=useState([]);
    const loadData=()=>{
        let url="http://localhost:4000/booking";
        axios.get(url).then((res)=>{
            setMydata(res.data);
        })
    }
    useEffect(()=>{
        loadData();
        toast.success("Data Fetch SuccessFully")
    },[])
   
    const mynav=useNavigate()
    const billgenerate=(id)=>{
        mynav(`/bgenerate/${id}`);
    }

    
    const  ans=mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.name}</td>
                <td>{key.date}</td>
                <td>{key.contact}</td>
                <td>{key.address}</td>
                <td>{key.section}</td>
                <td>{key.city}</td>
                <td>{key.state}</td>
                <td>{key.zip}</td>
                <td>
                    <button onClick={()=>{billgenerate(key.id)}} style={{borderRadius:"10px"}}>General Bill</button>
                </td>
            </tr>
            
            </>
        )
    }) 
    return(
        <>
             <Table striped bordered hover>
      <thead>
        <tr>
        <th>Name:</th>
          <th>Date</th>
          <th>Contact</th>
          <th>Address</th>
          <th>Section</th>
          <th>City</th>
          <th>State</th>
          <th>Zip</th>
          <th>Bill Generate</th>
        </tr>
      </thead>
      <tbody>
               {ans} 
      </tbody>
    </Table>
        
    <ToastContainer />
        </>
    )
}
export default BookShow;