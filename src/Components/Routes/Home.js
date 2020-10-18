import React,{useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './style.css'
import i1 from './assets/1.jpg'
import i2 from './assets/2.jpg'
import i3 from './assets/3.jpg'

import {Form,Card,Image, Col} from 'react-bootstrap';
import { InputGroupButton } from 'react-bootstrap';

function Home() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  const Notifications =[
    {id:1,notDes:"Notidications Announced"},
    {id:2,notDes:"BER Uploaded"},
    {id:3,notDes:"Upload your Documents"},
    {id:4,notDes:"GSK Shaba Zar Kawa"}
  ];

  return (
  <>
  <Form.Row>
    <Form.Group as={Col} md="8" controlId="formGridState">
      <div className="Carouselcontents">
      <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={i2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>An apple a day keep the doctors a way.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={i2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Health is Wealth.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={i3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Prenting Medicines.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div>
    </Form.Group>
      <Form.Group as={Col} md="4" controlId="formGridState">
        <div className="Cardcontens">
          <Card bg="secondary" text="white" style={{ width: '18rem' }}>
            <Card.Header>Notifications</Card.Header>
          <Card.Body>
            
            <Card.Text>
              {Notifications.map(n => <marquee direction = "up" scrolldelay="300" height="80" id="marquee" ><li><a href="">{n.notDes}</a></li></marquee>)}

            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      </Form.Group>
    </Form.Row>
    <div class="content">
</div>
  <div className="foot">
    <footer id="myFooter">
        <div class="container">
            <div class="row">
                <div class="col-sm-3">
                    <h2 class="logo"><a href="#"> LOGO </a></h2>
                </div>
                <div class="col-sm-2">
                    <h5>Get started</h5>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Sign up</a></li>
                        <li><a href="#">Downloads</a></li>
                    </ul>
                </div>
                <div class="col-sm-2">
                    <h5>About us</h5>
                    <ul>
                        <li><a href="#">Company Information</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Reviews</a></li>
                    </ul>
                </div>
                <div class="col-sm-2">
                    <h5>Support</h5>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Help desk</a></li>
                        <li><a href="#">Forums</a></li>
                    </ul>
                </div>
                <div class="col-sm-3">
                    <div class="social-networks">
                        <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
                        <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
                        <a href="#" class="google"><i class="fa fa-google-plus"></i></a>
                    </div>
                    <button type="button" class="btn btn-default">Contact us</button>
                </div>
            </div>
        </div>
    </footer>
  </div>
    </>

  );
}


export default Home;