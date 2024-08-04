

import axios from 'axios';
import { useEffect, useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const Marks=()=>{
    const [phy,setPhy]=useState(0);
    const [chem,setChem]=useState(0);
    const [math,setMath]=useState(0);
    const [eng,setEng]=useState(0);
    const [hin, setHin]=useState(0);

    const [totalMarks,setTotalmarks]=useState(0);
    const [percentage,setpercentage]=useState(0);
    const [division,setDivision]=useState("");

    const handleSubmit=(e)=>{
      e.preventDefault();
      const total=Number(phy)+Number(chem)+Number(math)+Number(eng)+Number(hin);
      setTotalmarks(total);
      const per=(total/500)*100;
      setpercentage(per);
    };
    useEffect(()=>{
      let percent;
      if(percentage>=60)
      {
        percent="First Division";
      }
      else if(percentage>=45)
      {
        percent="second division";
      }
      else if(percentage>=33)
      {
        percent="Third division";
      }
      else 
      {
        percent="fail";
      }
      setDivision(percent);
    },[percentage])
    
  


    return(
        <>
        <div style={{width:"400px",margin:"auto", backgroundColor:"teal"}}>
          <form onSubmit={handleSubmit}>
      <FloatingLabel controlId="floatingPassword" label="Enter Physics Marks">
        <Form.Control type="text" placeholder="Enter Physics Marks" value={phy} onChange={(e)=>{setPhy(e.target.value)}} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Enter chemestry Marks">
        <Form.Control type="text" placeholder="Enter chemestry Marks" value={chem} onChange={(e)=>{setChem(e.target.value)}} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Enter Math Marks">
        <Form.Control type="text" placeholder="Enter Math Marks" value={math} onChange={(e)=>{setMath(e.target.value)}} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Enter English Marks">
        <Form.Control type="text" placeholder="Enter English Marks" value={eng} onChange={(e)=>{setEng(e.target.value)}} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Enter Hindi Marks">
        <Form.Control type="text" placeholder="Enter Hindi Marks" value={hin} onChange={(e)=>{setHin(e.target.value)}} />
      </FloatingLabel>
      <button type="submit">Submit </button>
      <h1>Total marks:{totalMarks}</h1>
      <h2>Percentage:{percentage.toFixed(2)}</h2>
      <h1>Division:{division}</h1>
      </form>
      </div>
        </>
    )
}
export default Marks;

