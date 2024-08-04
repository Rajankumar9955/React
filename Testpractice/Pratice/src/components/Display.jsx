import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';

const Display=()=>{
    const [Cnt,setCnt]=useState([]);
    const loadData=()=>{
        let url="http://localhost:3000/student";
        axios.get(url).then((res)=>{
          console.log(res.data);
          setCnt(res.data);
        })
    }
    useEffect(()=>{
        loadData();
    },[])
    let ans=Cnt.map((key)=>{
        return(
           <>
             <tr>
                <td>{key.emp_id}</td>
                <td>{key.name}</td>
                <td>{key.degignation}</td>
                <td>{key.department}</td>
                <td>{key.basic_salary}</td>
             </tr>
           </>
        )
    })
    return(
        <>
        <h1 style={{marginLeft:"200px",marginTop:"10px"}}>This is Display section</h1>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Emp_ID</th>
          <th>Name</th>
          <th>Degignation</th>
          <th>Department</th>
          <th>Basic_salary</th>
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