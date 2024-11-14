import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addcartData } from './addtocartSlice';
import { useNavigate } from 'react-router-dom';


const Daynight=()=>{
const [mydata, setMydata]=useState([]);
const dispatch= useDispatch();

const loadData=()=>{
   let api=`http://localhost:3000/products/?category=Day and night vision`;
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
      <Card.Img variant="top" src={key.image} onClick={()=>{detail(key.id)}} />
      <Card.Body>
        <Card.Title> {key.name} </Card.Title>
        <h4  style={{color:"blue", fontSize:"14px"}}>  Brand : { key.brand} 

         {" "}   
         <br />
         {""}
         {key.category}
        </h4>
        <Card.Text>
           {key.description}
        </Card.Text>
         <h4 style={{color:"red", fontSize:"16px"}}> Price :₹{key.price}.00 </h4> 
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
        <center><h3 style={{marginTop:"30px"}}>Day and Night Camera's</h3></center>
       </div>
       
       <div id='eyetech' >
        {ans}        
       </div>

        </>
    )
}

export default Daynight;