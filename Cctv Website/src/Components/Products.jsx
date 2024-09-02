


import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

import { useDispatch } from 'react-redux';
import { addcartData } from './addtocartSlice';
import { useNavigate } from 'react-router-dom';

const Products=()=>{

const [mydata,setMydata]=useState([]);
const dispatch=useDispatch();

const loadData=()=>{
    let api="http://localhost:3000/products";
    axios.get(api).then((res)=>{
        setMydata(res.data);
    })
}
useEffect(()=>{
    loadData();
},[])


const Mynav=useNavigate();
 const details=(id)=>{
    Mynav(`/details/${id}`)  //productdetails
 }

const addDataToCart=(id,  name, cate, brand,  price, desc,  image)=>{
  dispatch(addcartData({id:id,  name:name, category:cate, brand:brand,  price:price,  description:desc,image:image, qnty:1}))

}
const ans=mydata.map((key)=>{
     return(
        <>
        <Card style={{ width: '18rem' }} id='card'>
      <Card.Img variant="top" src={key.image} onClick={()=>{details(key.id)}} />
      <Card.Body>
        <Card.Title>{key.brand} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {key.name}</Card.Title>
        <h5 style={{color:"teal"}}>{key.description}</h5> 
        <Card.Text>
        <h3 style={{color:"green"}}>₹{key.price}</h3>
        </Card.Text>
      
        <Button variant="primary" onClick={()=>{addDataToCart(key.id, key.name,key.category, key.brand, key.price, key.description, key.image)}}>ADD to Card</Button>
      </Card.Body>
    </Card>
        </>
     )
})

  
    return(
        <>
     
    <div>
        <center>
            <h2 style={{marginTop:"20px"}}>All Products</h2>
        </center>
    </div>
    <div id='products'>
      {ans}
      </div>
        
    </>
    )
}
export default Products;