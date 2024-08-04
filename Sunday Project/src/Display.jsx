import axios from "axios";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';

const Display=()=>{
    const [mydata, setMydata]=useState([]);
    const loadData=()=>{
        let url="http://localhost:3000/Student";
        axios.get(url).then((res)=>{
            console.log(res.data);
            setMydata(res.data);
        })
    }
    useEffect(()=>{
        loadData();
    },[])
    const ans=mydata.map((key)=>{
        return(
            <>
             <tr>
                <td>{key.rollno}</td>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.fees}</td>
             </tr>
            
            </>
        )
    })
    return(
        <>
         <div style={{width:"100%",height:"100px"}}>
         <div></div>
            <h1 >Insert Data!</h1>
               <Table>
                <thead>
                <tr>
                    <th>Roll NO</th>
                    <th>Name</th>
                    <th>City</th>
                    <th>Fees</th>
                </tr>
                </thead>
                <tbody>
                    {ans}
                </tbody>
               </Table>
               </div>
        </>
    )
}
export default Display;