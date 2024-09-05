
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

import { useDispatch } from 'react-redux';
import { addcartData } from './addtocartSlice';
import { useNavigate } from 'react-router-dom';
import { BsPrinter } from 'react-icons/bs';
const Shop=()=>{
    const [CategoryData,setCategorySearch]=useState("");
    const [priceData,setPriceData]=useState("");
    const [displayState,setDisplayState]=useState([true]);

    const [mydata,setMydata]=useState([]);   // for first map fuction (ans)
    const [pricemydata,setPriceMydata]=useState([]); // for second map fuction  (ans1)

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



const ans1=pricemydata.map((key)=>{
  if(priceData==2000)
  {
    if(key.price>0 && key.price<2001)
    {
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
    }
  }

  if(priceData==4000)
  {
      if(key.price>2000 && key.price<4001)
      {
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
      }
  }

  if(priceData==5000)
  {
    if(key.price>4000 && key.price<5001)
    {
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
    }
  }

  if(priceData==6000)
    {
      if(key.price>5000)
      {
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
      }
    }
 
})


const handleCategorySubmit=()=>{
    let api=`http://localhost:3000/products/?category=${CategoryData}`;
    axios.get(api).then((res)=>{
        setMydata(res.data);
    })
    setCategorySearch(true);
}


const handleSubPrice=()=>{
  let api="http://localhost:3000/products";
  axios.get(api).then((res)=>{
    setPriceMydata(res.data)
  })
  setCategorySearch(false);
}

console.log(pricemydata);
   
    return(
        <>
        <center>
            <h2 style={{marginTop:"25px",fontWeight:"bold"}}>Shop Here</h2>
        </center>

          <div style={{width:"100%",display:"flex",justifyContent:"space-around"}}>  
            <div style={{width:"380px",marginLeft:"50px",fontWeight:"bold",padding:"5px"}}>
         <h5 style={{fontWeight:"bold"}}>Search By Category</h5>
         <input type="radio" name='radio' value="Day and night vision" onChange={(e)=>{setCategorySearch(e.target.value)}}/> Day and Night Vision <br />
         <input type="radio" name='radio' value="Only night vision" onChange={(e)=>{setCategorySearch(e.target.value)}}/> Day Vision Only <br />
         <input type="radio" name='radio' value="wire less" onChange={(e)=>{setCategorySearch(e.target.value)}}/> Wire less <br />
         <input type="radio" name='radio' value="Wireless Video Door Bell" onChange={(e)=>{setCategorySearch(e.target.value)}}/> Wireless Video Door Bell <br />
        <button size="sm" onClick={handleCategorySubmit} style={{width:"100px",borderRadius:"10px",marginLeft:"20px",marginTop:"10px"}}>Click me</button>
        <br /><br />

        <h5> Search By Price</h5> 
             
             <input type="radio" value="2000"  name="price"
             onChange={(e)=>{setPriceData(e.target.value)}}/> Rs 2000 & below
             <br/>
             <input type="radio" value="4000"  name="price"
             onChange={(e)=>{setPriceData(e.target.value)}} /> Rs 2000 - 4000
             <br/>
             <input type="radio" value="5000"  name="price" 
             onChange={(e)=>{setPriceData(e.target.value)}} /> Rs 4000 - 5000
             <br/>
             <input type="radio" value="6000"  name="price" 
             onChange={(e)=>{setPriceData(e.target.value)}} /> Rs 5000 & Above
             <br/>
             {""}
             <Button size="sm" onClick={handleSubPrice}>Search</Button>


        </div>   
         
         
       
      <div id='prod'>

             {displayState?ans:ans1}

      </div>
      </div> 
        
        
        </>
    )
}
export default Shop;