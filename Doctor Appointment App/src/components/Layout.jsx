
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Outlet,Link } from "react-router-dom";
const Layout=()=>{
    return(
      <>
      <div style={{}}>

      
       <Navbar expand="lg" className="bg-body-tertiary" style={{}} >
      <Container style={{}}>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
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



    <div style={{height:"auto", width:"100%"}}>
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