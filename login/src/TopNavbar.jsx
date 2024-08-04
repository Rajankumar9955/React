
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const TopNavbar=()=>{
  // ================Registration===========================
    const [input,setInput]=useState({});

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values,[name]:value}))
        console.log(input);
    }
    const handleSubmit=()=>{
        let url="http://localhost:3000/register";
        axios.post(url,input).then((res)=>{
         setShow(false);
         toast.success("you are successfully Registred");
        })
    }
  // ================ login=====================
  const [userid,setUserid]=useState("");
  const [pwd,setpwd]=useState("");

  const [showlogin, setShowlogin] = useState(false);
  const handleCloselogin = () => setShowlogin(false);
  const handleShowlogin = () => setShowlogin(true);
  const mynav =useNavigate();

  const handleLogin=()=>{
    let api= `http://localhost:3000/register/?userid=${userid}`;
    axios.get(api).then((res)=>{
      if(res.data.length>=1)
      {
        if(res.data[0].password==pwd)
        {
          localStorage.setItem("uname",res.data[0].name)
          localStorage.setItem("uemail",res.data[0].email)
          mynav("/dashboard");
          setShowlogin(false);
        }
        else{
          alert("wrong password!!")
        }
      }
      else{
        alert("Invalid user")
      }
    })
  }
    return(
        <>
        
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link href="#features" onClick={handleShow}>Registeration</Nav.Link>
            <Nav.Link href="#features" onClick={handleShowlogin}>Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
{/* ============================= Registration======================*/}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Student Registration Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <FloatingLabel controlId="floatingInput"label="Name"className="mb-1">
        <Form.Control type="text" name="name" onChange={handleInput} autoFocus />
       </FloatingLabel>
       <FloatingLabel controlId="floatingInput" label="Email" className="mb-1">
        <Form.Control type="text" name="email" onChange={handleInput}  />
       </FloatingLabel>
       <FloatingLabel controlId="floatingInput" label="UserID" className="mb-1">
        <Form.Control type="text" name="userid" onChange={handleInput}  />
       </FloatingLabel>
       <FloatingLabel controlId="floatingPassword" label="Password" className="mb-1">
        <Form.Control type="password" name="password" onChange={handleInput}  />
       </FloatingLabel>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Registration
          </Button>
        </Modal.Footer>
      </Modal>



{/* ===================login========================================= */}
      <Modal show={showlogin} onHide={handleCloselogin}>
        <Modal.Header closeButton>
          <Modal.Title>Student Login Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       <FloatingLabel controlId="floatingInput" label="UserID" className="mb-1">
        <Form.Control type="text" name="userid" value={userid} onChange={(e)=>{setUserid(e.target.value)}} />
       </FloatingLabel>
       <FloatingLabel controlId="floatingPassword" label="Password" className="mb-1">
        <Form.Control type="password" name="password" value={pwd} onChange={(e)=>{setpwd(e.target.value)}}  />
       </FloatingLabel>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloselogin}>
            Close
          </Button>
          <Button variant="primary" onClick={handleLogin}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
        </>
    )
}
export default TopNavbar;