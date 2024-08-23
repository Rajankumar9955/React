

import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
const Home=()=>{
    const myNav=useNavigate();
    const Book=()=>{
        myNav("/insert")
    }
    return(
      <>
       <div style={{width:"410px",margin:"auto",marginTop:"170px",}}>
            <h1 >Wel-Come To Hospital</h1>
           
            <div>
            <Button variant="info" onClick={Book} style={{width:"150px",marginLeft:"30%",marginTop:"20px"}}>Book Appointment</Button>
            </div>
       </div>
      </>
    )
  }
  export default Home;