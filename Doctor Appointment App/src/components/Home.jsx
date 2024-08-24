

import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FaWindowRestore } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa";
import { MdLibraryBooks } from "react-icons/md";

const Home=()=>{
    const myNav=useNavigate();
    const Book=()=>{
        myNav("/insert")
    }
    return(
      <>
      <div>
       <div >
       <Carousel fade>

      <Carousel.Item>
      <img src="public/images/first.jpg" alt=""  width="100%" height="520px" />
        <Carousel.Caption>
        <Button variant="info" onClick={Book} style={{width:"150px"}} id='book'>Book Appointment</Button>
          <h3 >WelCome To Raj Hospital</h3>
          <p id='rajsum'> Raj Hospital is a leading healthcare institution dedicated to providing comprehensive medical services. With a commitment to excellence in patient care, the hospital offers a wide range of treatments and specialties.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="public/images/second.jpeg" alt=""  width="100%" height="520px" />
        <Carousel.Caption>
        <Button variant="info" onClick={Book} style={{width:"150px",marginLeft:"-5px"}}>Book Appointment</Button>
          <h3>WelCome To Raj Hospital</h3>
          <p id='rajsum'> Raj Hospital is a leading healthcare institution dedicated to providing comprehensive medical services. With a commitment to excellence in patient care, the hospital offers a wide range of treatments and specialties.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="public/images/third.jpg" alt=""  width="100%" height="519px" />
        <Carousel.Caption>
      <Button variant="info" onClick={Book} style={{width:"150px"}}>Book Appointment</Button>
          <h3>WelCome To Raj Hospital</h3>
          <p id='rajsum'>
          Raj Hospital is a leading healthcare institution dedicated to providing comprehensive medical services. With a commitment to excellence in patient care, the hospital offers a wide range of treatments and specialties.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
       </div>
       <div style={{marginTop:"30px"}}>
      <Container>
       <Row>
        <Col sm>
             <div id='paramain'>
              <div id='para'>
              <p> <img src="public/images/aala.jpg" alt="" width="50px" height="35px"  /> Proffesional Staff</p>
              </div>
              <div id='para'>
              <p ><img src="public/images/ambulation.jpeg" alt="" width="50px" height="35px"  /> Emergency Treatment</p>
              </div>
              <div id='para'>
              <p ><img src="public/images/docs.jpg" alt="" width="50px" height="35px"  /> Trusted Doctors</p>
              </div>
              <div id='para'>
              <p ><img src="public/images/ser.png" alt="" width="50px" height="35px"  /> 24/7 Services</p>
              </div>
            </div>
        </Col>
        <Col sm>
             <div id='abt'>
              <h2 style={{marginLeft:"18px",fontWeight:"bold"}}>About Raj Hospital</h2>
              <p>Raj Hospital Bhopal,
             is a 300 bedded Super Specialty Hospital 
             is born of a dream. A dream that the people
              of Bhopal and Central India get the best 
              healthcare at affordable prices. A dream that the best infrastructure and technology be provided to doctors so that they can serve patients to best of their capability. This conviction inspired us to make a world class hospital in the heart of the country where the best infrastructure meets the best doctors to deliver.</p>
             </div>
        </Col>
        <Col sm>
        <div id='btnmain'>
          <button id='btn'><FaWindowRestore   id="coll"/>  Sample Collection</button><br />
          <button id='btn'><FaUserDoctor      id="coll"/> Find Doctor</button><br />
          <button id='btn'> <FaLocationArrow  id="coll"/> Find Locations</button><br />
          <button id='btn'><MdLibraryBooks    id="coll"/> Book a Health CheckUp</button><br />
        </div>
        
        </Col>
      </Row>
      </Container>
       </div>
       </div>
      </>
    )
  }
  export default Home;
