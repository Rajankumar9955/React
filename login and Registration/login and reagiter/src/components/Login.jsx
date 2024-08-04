
import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
const Login=()=>{
  // ===============================register==========================
   const [input,setInput]=useState({});
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
        alert("Your are Registered!!");

    })
  }
// ============Login section==================
const [password,setpassword]=useState("");
const [email,setemail]=useState("");
const [showlogin, setShowlogin] = useState(false);
const handleCloselogin = () => setShowlogin(false);
const handleShowlogin = () => setShowlogin(true);

const mynav=useNavigate();

const handleSubmitlogin=()=>{
  let url=`http://localhost:3000/Student/?email=${email}`;
  axios.get(url).then((res)=>{
    if(res.data.length>=1)
    {
          if(res.data[0].password==password)
          {
            localStorage.setItem("uname",res.data[0].name);
            localStorage.setItem("uemail",res.data[0].email);
            alert("You are Succesfully loged-in:"+res.data[0].name)
            mynav("/dashboard")
          }
          else{
            alert("Wrong Password");
          }
    }
    else{
      alert("Wrong Email")
    }
  })
}
   return(
    <>
    <div>
        <button onClick={handleShow}>Registration</button>
        <button onClick={handleShowlogin}>Login</button>
    </div>
    {/* ==================================register modal======================= */}
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


{/* =================================login modal ================================= */}

      <Modal show={showlogin} onHide={handleCloselogin}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Enter Email</Form.Label>
              <Form.Control
                type="text" name='email' value={email} onChange={(e)=>{setemail(e.target.value)}}
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
    
    </>
   )
}
export default Login;