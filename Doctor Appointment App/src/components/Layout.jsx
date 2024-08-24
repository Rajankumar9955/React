
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet,Link } from "react-router-dom";

import { IoIosContrast } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { useEffect, useState } from 'react';


const Layout=()=>{
  const [theme,setTheme]=useState('light');
  const toggleTheme=()=>{
    if(theme==='light')
    {
      setTheme('dark')
    }else{
      setTheme('light')
    }
  };
  useEffect(()=>{
    document.body.className=theme;
  },[theme])

  // ==================


    return(
      <>
      <div style={{}}>

      
       <Navbar expand="lg" className="bg-body-tertiary" style={{}} >
      <Container style={{}}>
        <Navbar.Brand href="#">Raj Hospital</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <Nav.Link as={Link}to="home">Home</Nav.Link>
            <Nav.Link as={Link}to="about">About</Nav.Link>
            {/* <Nav.Link as={Link}to="insert">Insert</Nav.Link> */}
            <Nav.Link as={Link}to="display">Display</Nav.Link>
          </Nav>
          <p id='date'>{}</p>
          <button  style={{backgroundColor:"white",marginRight:"10px",fontSize:"25px",border:"none",marginBottom:"5px"}}><a href="https://github.com/Rajankumar9955"><FaGithub style={{fontSize:"32px",color:"black"}} /></a></button>
          <Button onClick={toggleTheme} id='darkmode' style={{backgroundColor:"black", marginRight:"10px"}}><IoIosContrast  style={{fontSize:"25px"}}/></Button>
          <Button  style={{marginRight:"10px",backgroundColor:"black"}}><i className="pi pi-spin pi-cog" style={{ fontSize: '20px',marginTop:"5px" }}></i></Button>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>

      

    <div style={{height:"528px", width:"100%",border:"2px solid black",backgroundRepeat:"no-repeat",backgroundSize:"cover"}} className={`Layout ${theme}`}>
        <Outlet/>
    </div>
    <div style={{height:"50px",backgroundColor:"skyblue"}}>
            <h5 style={{margin:"auto",width:"400px"}}>All Copy Are Reserved By the Admin</h5>
            <h6 style={{margin:"auto",width:"200px"}}>@Copy 2024</h6>
    </div>
      </>
    )
  }
  export default Layout;