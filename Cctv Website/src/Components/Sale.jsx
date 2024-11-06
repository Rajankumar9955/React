
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

import { useDispatch } from 'react-redux';
import { addcartData } from './addtocartSlice';
import { useNavigate } from 'react-router-dom';

const Sale=()=>{

const [mydata,setMydata]=useState([]);
const dispatch=useDispatch();

const loadData=()=>{
    let api="http://localhost:3000/products/?offer=yes";
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
    let offerPrice= (key.price-(key.price*key.discount/100)).toFixed(0);
    let save= (key.price*key.discount/100).toFixed(0);
    
     return(
        <>
        <Card style={{ width: '18rem' }} id='card'>
      <Card.Img variant="top" src={key.image} onClick={()=>{details(key.id)}} />
      <Card.Body>
        <Card.Title>{key.brand} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {key.name}</Card.Title>
        <h5 style={{color:"teal"}}>{key.description}</h5> 
        <Card.Text>
        <h3 style={{color:"red",fontSize:"16px",textDecoration:"line-through"}}>₹{key.price}</h3>
        <h4>Offer:{key.discount}%</h4>
         <h4 style={{width:"135px",height:"25px",backgroundColor:"green"}}>&nbsp;Save:₹{save}</h4>
        <h5>Today Price:₹{offerPrice}</h5> 
        </Card.Text>
          
        <Button variant="primary" onClick={()=>{addDataToCart(key.id, key.name,key.category, key.brand, offerPrice, key.description, key.image)}}>ADD TO CART</Button>
      </Card.Body>
    </Card>
        </>
     )
})

    return(
        <>
     
    <div>
        <center>
            <h2 style={{marginTop:"20px"}}>All Sale</h2>
        </center>
    </div>
    <div id='products'>
      {ans}
      </div>
        
    </>
    )
}
export default Sale;