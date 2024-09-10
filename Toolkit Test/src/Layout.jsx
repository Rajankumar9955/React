
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet,Link } from "react-router-dom";

const Layout=()=>{
    return(
        <>
         <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="IncrementDecreament">IncrementDecrement</Nav.Link>
            <Nav.Link as={Link} to="todoapp">ToDoApp</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div align="center" style={{marginTop:"40px", width:"100%",height:"500px",border:"2px solid black"}}>

        <Outlet/>
      </div>
        
        </>
    )
}
export default Layout;