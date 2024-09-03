
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

import { useDispatch } from 'react-redux';
import { addcartData } from './addtocartSlice';
import { useNavigate } from 'react-router-dom';
const Shop=()=>{
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
    Mynav(`/details/${id}`)
 }

const addDataToCart=(id,  name, cate, brand,  price, desc,  image)=>{
  dispatch(addcartData({id:id,  name:name, category:cate, brand:brand,  price:price,  description:desc,image:image, qnty:1}))

}

const [CategoryData,setCategorySearch]=useState("");
const handleCategorySubmit=()=>{
    let api=`http://localhost:3000/products/?category=${CategoryData}`;
    axios.get(api).then((res)=>{
        setMydata(res.data);
    })
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
        <h3 style={{color:"green"}}>₹{key.price}.00</h3>
        </Card.Text>
        <Button variant="primary" onClick={()=>{addDataToCart(key.id, key.name,key.category, key.brand, key.price, key.description, key.image)}}>ADD TO CART</Button>
      </Card.Body>
    </Card>
        </>
     )
})

   
   
    return(
        <>
        <center>
            <h2 style={{marginTop:"25px",fontWeight:"bold"}}>Shop Here</h2>
        </center>
        
        
            
          <div style={{width:"100%",display:"flex",justifyContent:"space-around"}}>  
            <div style={{width:"380px",marginLeft:"50px",marginTop:"150px",fontWeight:"bold",padding:"5px"}}>
         <h5 style={{fontWeight:"bold"}}>Search By Category</h5>
         <input type="radio" name='radio' value="Day and night vision" onChange={(e)=>{setCategorySearch(e.target.value)}}/> Day and Night Vision <br />
         <input type="radio" name='radio' value="Only night vision" onChange={(e)=>{setCategorySearch(e.target.value)}}/> Day Vision Only <br />
         <input type="radio" name='radio' value="wire less" onChange={(e)=>{setCategorySearch(e.target.value)}}/> Wire less <br />
         <input type="radio" name='radio' value="Wireless Video Door Bell" onChange={(e)=>{setCategorySearch(e.target.value)}}/> Wireless Video Door Bell <br />
        <button onClick={handleCategorySubmit} style={{width:"100px",borderRadius:"10px",marginLeft:"20px",marginTop:"10px"}}>Click me</button>
        </div>   
        
       
      <div id='prod'>
      {ans}
      </div>
      </div> 
        
        
        </>
    )
}
export default Shop;