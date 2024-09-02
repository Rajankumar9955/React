
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import { useSelector } from "react-redux";


import { message } from "antd";
import { useEffect, useState } from "react";





const Layout=()=>{


  const [usrname,setUname]=useState("");
  const mynav=useNavigate();
  useEffect(()=>{
      const name=localStorage.getItem("uname");
      setUname(name);
      if(!name)
      {
          mynav("/");
      }
  },[])


  const logout=()=>{
      localStorage.clear();
      mynav("/");
      message.error("you are successfully loged-out");
  }

  useEffect(()=>{
    usrname;
  },[])


  const MyData=useSelector((state)=>state.addCart.cart);
  console.log(MyData);
  const DataCount=MyData.length;

const myNav=useNavigate();

const mycart=()=>{
  myNav("/mycart")
}
    

const Mynav=useNavigate();
const user=()=>{
  Mynav("/lrpage")
}

const [searchData,setSearchData]=useState("")
const handleSearch=()=>{
  Mynav(`searchproduct/${searchData}`)
}

    return (
        <>
        <div id="topmenu">
        <Navbar expand="lg" className="bg-body-tertiary" style={{}}>
      <Container fluid>
        <Navbar.Brand href="#" style={{marginLeft:"20px"}}>CCTV BAZAR</Navbar.Brand>
        <Navbar.Toggle  aria-controls="navbarScroll"  />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link}to="products">Products</Nav.Link>
            <NavDropdown title="Brand" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="eyetech">EyeTech Camera</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="daynight">
                Day and Night camera
              </NavDropdown.Item>
              <NavDropdown.Divider />
             
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>{setSearchData(e.target.value)}}/>
            <Button variant="outline-success" style={{marginRight:"20px"}} onClick={handleSearch}>Search</Button>
          </Form>
          <button style={{border:"none",marginRight:"10px"}}  >< FaUser style={{fontSize:"24px",height:"50px"}} onClick={user}/></button> 
          <button style={{border:"none",marginRight:"10px"}}  onClick={mycart}><FaShoppingCart  style={{fontSize:"24px",height:"50px"}}   /><sup style={{fontSize:"20px"}}>{DataCount}</sup></button>
             <div style={{height:"50px"}}>
             <p style={{marginBottom:"-8px",marginTop:"5px",color:"green",fontSize:"18px",marginLeft:"5px"}}>Welcome</p>
            
             <NavDropdown title={usrname} id="navbarScrollingDropdown">
              <NavDropdown.Item ><button onClick={logout} id="logout">Log-out</button></NavDropdown.Item>
              <NavDropdown.Divider />
           </NavDropdown>
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        </div>
       <div >
        <Outlet/>
       </div>
       {/* ========footer============ */}
       <div style={{marginTop:"30px"}}>
       <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='https://www.facebook.com/profile.php?id=100037204516179' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://x.com/Raj_Malhotra4u' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.instagram.com/mr_malhotraaa/' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/in/rajan-kumar-741aa722a/' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://github.com/rajankumar9955' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' label='Email address' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className='mb-4'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
            voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
        </section>

        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 3
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 4
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 3
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 4
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 3
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 4
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Link 1
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 2
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 3
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Link 4
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright:
        <a className='text-white' href='https://github.com/rajankumar9955'>
          CctvBazzar.com
        </a>
      </div>
    </MDBFooter>
       </div>
        </>
    )
}
export default Layout;


