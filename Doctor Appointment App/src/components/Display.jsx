import { message } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';




const Display=()=>{
    const [mydata, setMydata]=useState([]);
    const loadData=()=>{
        let url="http://localhost:3000/Appointment";
        axios.get(url).then((res)=>{
            setMydata(res.data);
            message.success("Fetch Data")
        })
    }
    useEffect(()=>{
        loadData();
    },[])
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
        </tr>
      </thead>
      <tbody>
               {ans} 
      </tbody>
    </Table>
        
        
        </>
    )
}
export default Display;