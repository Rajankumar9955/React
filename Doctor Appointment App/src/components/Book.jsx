import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useParams } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import { message } from 'antd';

import { useState } from 'react';
import axios from 'axios';

const Book=()=>{
  const {id}=useParams();

    const [cnt,setCnt]=useState({});
   const  handleInput=(e)=>{
       let name=e.target.name;
       let value=e.target.value;
       setCnt(values=>({...values,[name]:value}))
       console.log(cnt);
   }
   const myNav=useNavigate();
   const handleSubmit=()=>{
        let url="http://localhost:4000/booking";
        axios.post(url,cnt).then((res)=>{
            message.success("successFully Booked")
            myNav("/bookshow")
        })
   }

    return(
      <>
   <div style={{backgroundColor:""}}>
           <div style={{height:"520px", width:"480px",margin:"auto",border:"1px solid black",marginTop:"30px",borderRadius:"20px",backgroundColor:"teal"}}>
           <Form style={{width:"400px",margin:"auto",marginTop:"5px"}}>
            <p style={{width:"125px",margin:"auto",fontSize:"25px",backgroundColor:"green",borderRadius:"10px"}}>BED NO: {id}</p>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Your Name" name="name" value={cnt.name} onChange={handleInput} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" placeholder="Enter Date" name="date" value={cnt.date} onChange={handleInput} />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Contact</Form.Label>
        <Form.Control placeholder="Enter Contact Number" name="contact" value={cnt.contact} onChange={handleInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="Enter Address" name="address" value={cnt.address} onChange={handleInput}/>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Section</Form.Label>
          <Form.Select defaultValue="Choose..." name="section" value={cnt.section} onChange={handleInput}>
            <option>Choose...</option>
            <option>A</option>
            <option>B</option>
            
            
          </Form.Select>
        </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control placeholder="Enter City" name="city" value={cnt.city} onChange={handleInput} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose..." name="state" value={cnt.state} onChange={handleInput}>
            <option>Choose...</option>
            <option>Madhya Pradesh</option>
            <option>Uttar Pradesh</option>
            <option>Himachal Pradesh</option>
            <option>Bihar</option>
            <option>Mumbai</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control placeholder="Enter Zip" name="zip" value={cnt.zip} onChange={handleInput} />
        </Form.Group>
      </Row>
      <Button variant="primary" onClick={handleSubmit}>
        Book Now
      </Button>
    </Form>
           </div>
           </div>
      </>
    )
  }
  export default Book;