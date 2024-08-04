import axios from "axios";
import { useState } from "react";
import Table from 'react-bootstrap/Table';

const Search=()=>{
    const [srch,setSrch]=useState("");
    const [mydata,setMydata]=useState([]);
    const mySearch=()=>{
        let url=`http://localhost:3000/Student/?rollno=${srch}`;
        axios.get(url).then((res)=>{
            setMydata(res.data);
        });
    }
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
        Enter Rollno:<input type="text" value={srch} onChange={(e)=>{setSrch(e.target.value)}}/>
        <button onClick={mySearch}>search Here</button>
        <Table>
            <thead>
                <tr>
                    <th>RollNO</th>
                    <th>Name</th>
                    <th>City</th>
                    <th>Fees</th>
                </tr>
            </thead>
            <tbody>
                {ans}
            </tbody>
        </Table>
        </>
    )
}
export default Search;