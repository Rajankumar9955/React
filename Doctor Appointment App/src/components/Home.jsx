

import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
const Home=()=>{
    const myNav=useNavigate();
    const Book=()=>{
        myNav("/insert")
    }
    return(
      <>
       <div>
            <h1>Wel-Come To Rajan Hospital</h1>
             <h2>How can you Help You!</h2>
            <div>
            <Button variant="info" onClick={Book}>Book Appointment</Button>
            </div>
       </div>
      </>
    )
  }
  export default Home;