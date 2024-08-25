

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
const Services=()=>{
    const mynav=useNavigate()
    const booknow=()=>{
        mynav("/book")
    }
    
    return(
        <>
           
<div>
            <div>Wel-come to Service Section</div>
    <div>
     <Container>
        <div>
      <Row>
        <Col id="ser">
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="public/images/adv1.jpg" />
      <Card.Body>
        <Card.Title>BED NO:-1</Card.Title>
        <Card.Text>
          Some quick example text to build on the BED NO:-1 and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant= "primary" onClick={booknow}>Book Now</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col id="sers">
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="public/images/adv2.jpeg" />
      <Card.Body>
        <Card.Title>BED NO:-2</Card.Title>
        <Card.Text>
          Some quick example text to build on the BED NO:-2 and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant= "primary" onClick={booknow}>Book Now</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col id="serss">
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="public/images/adv3.jpg" />
      <Card.Body>
        <Card.Title>BED NO:-3</Card.Title>
        <Card.Text>
          Some quick example text to build on the BED  and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant= "primary" onClick={booknow}>Book Now</Button>
      </Card.Body>
    </Card>
        </Col>
        </Row>
        </div>
        <div>
      <Row>
        <Col id="serv">
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="public/images/adv1.jpg" />
      <Card.Body>
        <Card.Title>BED NO:-4</Card.Title>
        <Card.Text>
          Some quick example text to build on the BED NO:-3 and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant= "primary" onClick={booknow}>Book Now</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col id="servi">  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="public/images/adv1.jpg" />
      <Card.Body>
        <Card.Title>BED NO:-5</Card.Title>
        <Card.Text>
          Some quick example text to build on the BED NO:-3 and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant= "primary" onClick={booknow}>Book Now</Button>
      </Card.Body>
    </Card></Col>
        <Col id="servic"> <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="public/images/adv1.jpg" />
      <Card.Body>
        <Card.Title>BED NO:-6</Card.Title>
        <Card.Text>
          Some quick example text to build on the BED NO:-3 and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant= "primary" onClick={booknow}>Book Now</Button>
      </Card.Body>
    </Card></Col>
      </Row>
      </div>
     </Container>
    </div>
</div>
        
        </>
    )
}
export default Services;