

import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

import { useDispatch } from 'react-redux';
import { addcartData } from './addtocartSlice';
import { useParams } from 'react-router-dom';


const Details=()=>{

const [mydata,setMydata]=useState([]);
const dispatch=useDispatch();
const {id}=useParams();
const loadData=()=>{
    let api=`http://localhost:3000/products/?id=${id}`;
    axios.get(api).then((res)=>{
        setMydata(res.data);
    })
}
useEffect(()=>{
    loadData();
},[])




const addDataToCart=(id,  name, cate, brand,  price, desc,  image)=>{
  dispatch(addcartData({id:id,  name:name, category:cate, brand:brand,  price:price,  description:desc,image:image, qnty:1}))

}
const ans=mydata.map((key)=>{
     return(
        <>
       <div id='details'>
      <div id='img1'>
        <img src={key.image} alt=""width="500px" id='img2'/>
      </div>
      <div id='desc'>
      <h2 style={{width:"260px"}}>{key.name}</h2>
        <p style={{width:"250px"}}>{key.description}</p>
        <h3>Brand:{key.brand}</h3>
        <h2 style={{color:"green"}}>₹{key.price}.00</h2>
      
        <Button variant="primary" onClick={()=>{addDataToCart(key.id, key.name,key.category, key.brand, key.price, key.description, key.image)}}>ADD TO CART</Button>
        </div>
        </div>
        </>
     )
})


    return(
        <>
       <center><h2 style={{marginTop:"30px"}}>Product Details</h2></center> 
    <div id='products'>
      {ans}
      </div>
        
    </>
    )
}
export default Details;