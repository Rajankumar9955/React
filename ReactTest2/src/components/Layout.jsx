

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';

const Layout=()=>{
    return(
        <>
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link}to="home">Home</Nav.Link>
            <Nav.Link as={Link}to="insert">Insert</Nav.Link>
            <Nav.Link as={Link}to="display">Display</Nav.Link>
            <Nav.Link as={Link}to="search">Search</Nav.Link>
            <Nav.Link as={Link}to="update">Update</Nav.Link>
            <Nav.Link as={Link}to="totalQty">TotalQTY</Nav.Link>
            <Nav.Link as={Link}to="contactUs">Contact Us</Nav.Link> 
          </Nav>
        </Container>
      </Navbar>


      <div>
        <Outlet/>
      </div>


      <div>
        <h5>This is footer</h5>
      </div>
        </>
    )
}
export default Layout;