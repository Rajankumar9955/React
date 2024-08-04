

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link,Outlet } from 'react-router-dom';
import { useState } from 'react';
const Layout=()=>{
    const [Color,setColor]=useState("teal")
    const[Cnt,setCnt]=useState(0);
    const myDec=()=>{
        if(Cnt<=0)
        {
            alert("can't Negative Decrement")
        }
        else
        {
            setCnt(Cnt-15);
        }
    }
    return(
        <>
        
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="about">About</Nav.Link>
            <Nav.Link as={Link} to="contactUs">ContactUs</Nav.Link>
            <Nav.Link as={Link} to="gallery">Gallery</Nav.Link>
            <Nav.Link as={Link} to="placement">Placement</Nav.Link>
            <Nav.Link as={Link} to="service">Service</Nav.Link>
            <Nav.Link as={Link} to="insert">Insert</Nav.Link>
            <Nav.Link as={Link} to="display">Display</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

        <div style={{height:"450px", width:"800px",border:"2px solid black",margin:"auto",marginTop:"20px",backgroundColor:Color,color:"white"}}>
            <button onClick={()=>{setColor("black ")}}>Theme</button>
            <Outlet/>
        </div>
        <div style={{margin:"auto",width:"800px",marginTop:"15px"}}>
            <h1 style={{marginLeft:"35%"}}>This is footer</h1>
        </div>
{/* ================================== */}
  <hr  size="4" color='red'/>
{/* ================================= */}

     <div style={{height:"300px",width:"600px",borderRadius:"40%",backgroundColor:"yellow", margin:"auto",display:"flex"}}>
        <div style={{height:"200px",width:"400px",backgroundColor:"teal", margin:"auto", marginTop:"50px"}}>
            <div style={{height:"150px",width:"300px",borderRadius:"40%",backgroundColor:"red", margin:"auto",marginTop:"25px",display:"flex"}}>
                <h1 style={{height:"100px",width:"250px",color:"white", margin:"auto",marginTop:"25px",marginTop:"40px",marginLeft:"40px"}}>Rajan kumar</h1>
            </div>
        </div>
     </div>
{/* ========================== */}
<hr size="4" color='red' />
{/* ==============Increament and decrement================= */}
    <div style={{width:"400px",margin:"auto"}}>
<h1 style={{marginLeft:"60px"}}>Cout:{Cnt}</h1>
<button onClick={()=>{setCnt(Cnt+15)}}>Increment</button>
<button onClick={myDec}>Decrement</button>
<button onClick={()=>{setCnt(Cnt*0)}}>Reset</button>
    </div>
    <hr size="4" color='red' />

        </>
       
    )
}
export default Layout;