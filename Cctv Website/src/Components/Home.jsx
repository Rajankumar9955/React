

import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';


const Home=()=>{
const [mydata,setMydata]=useState([]);
const loadData=()=>{
    let url="http://localhost:3000/products";
    axios.get(url).then((res)=>{
        setMydata(res.data);
    })
}
useEffect(()=>{
    loadData();
})
let ans=mydata.map((key)=>{
     return(
        <>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={key.image} />
      <Card.Body>
        <Card.Title>{key.brand} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {key.name}</Card.Title>
        <h5 style={{color:"teal"}}>{key.description}</h5> 
        <Card.Text>
        <h3 style={{color:"green"}}>{key.price}</h3>
        </Card.Text>
      
        <Button variant="primary">Order Now</Button>
      </Card.Body>
    </Card>
        </>
     )
})

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
    return(
        <>
         <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
       <img src="https://t4techvision.com/wp-content/uploads/2024/02/2-1.jpg" alt="" style={{width:"100%",height:"500px"}}/>
        <Carousel.Caption>
          <h3>ALL CCTV CAMERA ARE AVAILABLE</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://www.purplerockdubai.com/wp-content/uploads/2023/05/CCTV-Vs.-IP-Cameras-Which-Is-Better-image-1024x553.jpg" alt="" style={{width:"100%",height:"500px"}}/>
        <Carousel.Caption>
          <h3>ALL CCTV CAMERA ARE AVAILABLE</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
     <img src="https://www.clearway.co.uk/wp-content/uploads/2020/09/temp-and-fixed-800x530.jpg" alt="" style={{width:"100%",height:"500px"}}/>
        <Carousel.Caption>
          <h3>ALL CCTV CAMERA ARE AVAILABLE</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div>
        <center>
            <h2 style={{marginTop:"20px"}}>This Website About CCTV Camera</h2>
        </center>
    </div>
    <div id='products'>{ans}</div>
        
    </>
    )
}
export default Home;