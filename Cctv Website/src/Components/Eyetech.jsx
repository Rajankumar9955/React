import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addcartData } from './addtocartSlice';
import { useNavigate } from 'react-router-dom';


const Eyetech=()=>{
const [mydata, setMydata]=useState([]);
const dispatch= useDispatch();

const loadData=()=>{
   let api=`http://localhost:3000/products/?brand=Eyetech`;
   axios.get(api).then((res)=>{
    setMydata(res.data);
   })
}

useEffect(()=>{
  loadData();
}, [])


const addDataToCart=(id, name, cate, brand, price, desc, image)=>{
     dispatch(addcartData({id:id, name:name, category:cate, 
      brand:brand, price:price, description:desc,image:image, qnty:1}))
}


const mynav=useNavigate();
const detail=(id)=>{
    mynav(`/details/${id}`)
}


const ans=mydata.map((key)=>{
   return(
    <>
     <Card style={{ width: '300px', marginTop:"20px",marginLeft:"20px" }} id='card'>
      <Card.Img variant="top" src={key.image} onClick={()=>{detail(key.id)}} id='imgpro'/>
      <Card.Body>
        <Card.Title> 
         <h4 style={{fontsize:"18px"}}>{key.name}</h4>
         
          </Card.Title>
        <h4  style={{color:"teal", fontSize:"20px"}}>  Brand : { key.brand} 

         {" "}   
         <br />
         {""}
         </h4>
         <h4 style={{fontSize:"18px",color:"sandybrown"}}>Category:{key.category}</h4>
       
        <Card.Text>
          <h1 style={{fontSize:"20px"}}>{key.description}</h1> 
        </Card.Text>
         <h4 style={{color:"green", fontSize:"21px"}}> Price : ₹{key.price}.00 </h4>
        <Button variant="primary" 
        onClick={()=>{addDataToCart(key.id, key.name, key.category, key.brand, key.price, key.description, key.image)}}>Add To Cart</Button>
      </Card.Body>
    </Card>
    
    </>
   )
})

 return(
        <>
       <div id="proHeading">
        <center><h3 style={{marginTop:"30px"}}> EYE TECH CAMERA'S</h3></center>
       </div>
       
       <div id='eyetech' >
        {ans}        
       </div>

        </>
    )
}

export default Eyetech;