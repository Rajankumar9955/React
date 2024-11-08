import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const Payment=()=>{

const mynav=useNavigate();
const placeorder=()=>{
    mynav("/placeorder")
}

    return(
        <>
        <h4 align="center" style={{marginTop:"20px"}}>Payment Section</h4>
      
      <div id='payment'>
         <div>
         <FloatingLabel
        controlId="floatingInput"
        label="Name"
        className="mb-3">
        <Form.Control type="name" placeholder="name@example.com"  />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Email" className='mb-3'>
        <Form.Control type="Email" placeholder="Email" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Adress" className='mb-3'>
        <Form.Control type="address" placeholder="Password" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="pincode" className='mb-3'>
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
     
         </div>
         <div>
         <input type="radio" value="2000"  name="price"/> Rs 2000 & below
             <br/>
             <input type="radio" value="4000"  name="price"/> Rs 2000 - 4000
             <br/>
             <input type="radio" value="5000"  name="price" /> Rs 4000 - 5000
             <br/>
             <input type="radio" value="6000"  name="price" /> Rs 5000 & Above
             <br/>
             <button style={{borderRadius:"10px"}} onClick={placeorder}>Place Order!</button>
         </div>
      </div>
        </>
    )
}
export default Payment;