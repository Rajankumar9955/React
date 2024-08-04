

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';


const Layout=()=>{
// =========================================regiter==========
         const[input,setInput]=useState({});
         const [show, setShow] = useState(false);
         const handleClose = () => setShow(false);
         const handleShow = () => setShow(true);

         const handleInput=(e)=>{
            let name=e.target.name;
            let value=e.target.value;
            setInput(values=>({...values,[name]:value}));
         }
         const handleSubmit=()=>{
            let url="http://localhost:3000/Student";
            axios.post(url,input).then((res)=>{
                setShow(false);
                alert("You are Registered!");
            })
         }
    // =======================login section=================
    const [password,setpassword]=useState("");
    const [email,setEmail]=useState("");
    const [showlogin, setShowlogin] = useState(false);
    const handleCloselogin = () => setShowlogin(false);
    const handleShowlogin = () => setShowlogin(true);

    const myNav=useNavigate();
    const handleSubmitlogin=()=>{
          let url=`http://localhost:3000/Student/?email=${email}`;
          axios.get(url).then((res)=>{
            if(res.data.length>=1)
            {
                if(res.data[0].password==password)
                {
                    localStorage.setItem("uname",res.data[0].name);
                    localStorage.setItem("uemail",res.data[0].email);
                    alert("You are SuccessFully loged-in:"+res.data[0].name)
                    myNav("/dashboard")
                }
                else{
                    alert("wrong password");
                }
            }
            else
            {
                alert("Wrong Email")
            }
          })
    } 
    return(
        <>
        <div>

         <Navbar expand="lg" className="bg-body-tertiary" style={{display:"flex"}}>
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="Home">Home</Nav.Link>
            <Nav.Link as={Link} to="insert">Insert</Nav.Link>
            <Nav.Link as={Link} to="display">Display</Nav.Link>
            <Nav.Link as={Link} to="search">Search</Nav.Link>
            <Nav.Link as={Link} to="update">Update</Nav.Link>
             <div>
            <button onClick={handleShowlogin}>login</button>
            <button onClick={handleShow}>Register</button>
            </div>
            
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
{/* ======================================= */}

{/* ============regiter================================ */}
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text" name='name' onChange={handleInput}
                autoFocus/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="text" name='age' onChange={handleInput}
                autoFocus/>
            </Form.Group><Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text" name='email' onChange={handleInput}
                 autoFocus/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password" name='password' onChange={handleInput}
                autoFocus/>
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
           Register Now
          </Button>
        </Modal.Footer>
      </Modal>














{/* =================   login    ====================== */}

    {/* ==================modal============ */}
    <Modal show={showlogin} onHide={handleCloselogin}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter Email</Form.Label>
              <Form.Control
                type="text" name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}
                autoFocus/>
            </Form.Group>
           
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label> Enter Password</Form.Label>
              <Form.Control
                type="password" name='password' value={password} onChange={(e)=>{setpassword(e.target.value)}}
                 autoFocus/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloselogin}>
            Close
          </Button>
          <Button variant="primary"  onClick={handleSubmitlogin} > 
           login Now
          </Button>
        </Modal.Footer>
      </Modal>
{/* ===================================================== */}

   <div style={{height:"480px",backgroundColor:"black",width:"100%"}}>
    <Outlet/>
   </div>
<div style={{width:"370px",margin:"auto"}}>
    <h5>This is All copy Reserved by Rajan kumar</h5>
    <h6 style={{marginLeft:"80px"}}>All Content is Reserved!</h6>

</div>

</div>
        </>
    )
}
export default Layout;