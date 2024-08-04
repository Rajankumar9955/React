import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom";

const Update=()=>{
    const [mydata,setMydata]=useState([]);
    const loadData=()=>{
        let url="http://localhost:3000/Student";
        axios.get(url).then((res)=>{
            setMydata(res.data);
        })
    }
    useEffect(()=>{
        loadData();
    },[])
    
const mydel=(myid)=>{
      let url=`http://localhost:3000/Student/${myid}`;
      axios.delete(url).then((res)=>{
        alert("record deleted");
      })
}

const mynav=useNavigate();
const myEdit=(myid)=>{
    mynav(`/myedit/${myid}`)
}

    const ans=mydata.map((key)=>{
        return(
            <>
               <tr>
                <td>{key.rollno}</td>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.fees}</td>
                <td>
                      <button onClick={()=>{mydel(key.id)}}>Delete</button>
                      <button onClick={()=>{myEdit(key.id)}}>Update</button>
                </td>
               </tr>
            </>
        )
    })

    return(
        <>
         <Table>
         <thead>
            <tr>
                <th>Rollno</th>
                <th>Name</th>
                <th>City</th>
                <th>Fees</th>
                <th>Delete|Update</th>
            </tr>
            </thead>
            <tbody>
                {ans}
            </tbody>
         </Table>
         
        </>
    )
}
export default Update;