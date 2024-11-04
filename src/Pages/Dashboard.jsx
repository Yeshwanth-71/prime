import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Header from '../Components/Header';
import { Link } from 'react-router-dom';




function Dashboard() {
  return (
    <div className="dashboard-container">
      <Row>
        <Header />
      </Row>
      <Row>
      <Carousel className='ant'>
      <Carousel.Item interval={700}>
       <img src="https://wallpaperaccess.com/full/14643098.jpg" alt="" height={"700px"} width={"100%"} />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img src="https://wallpaperaccess.com/full/7420358.jpg" alt=""height={"700px"} width={"100%"} />
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img src="https://wallpaperaccess.com/full/1853985.jpg" alt=""height={"700px"} width={"100%"}  />
      </Carousel.Item>
    </Carousel>
      </Row>
      <Container>
        <Row className="mt-4">
          <Col sm={3}>
          <Link to={'/viewtel'} style={{textDecorationLine:"none", color:"black"}}>
            <div className="rounded-card">
              <img src="https://wallpaperaccess.com/full/7790523.jpg" alt="" />
              <h1>Telugu</h1>
            </div></Link>
          </Col>
          <Col sm={1}></Col>
          <Col sm={3}>
          <Link to={'/viewhin'}  style={{textDecorationLine:"none", color:"black"}}>
            <div className="rounded-card">
              <img src="https://images.ottplay.com/images/mirzapur-season-3-1718088141.jpg" alt="" />
              <h1>Hindi</h1>
            </div></Link>
          </Col>
          <Col sm={1}></Col>
          <Col sm={3}>
          <Link to={'/viewtam'} style={{textDecorationLine:"none", color:"black"}}>
            <div className="rounded-card">
              <img src="https://wallpaperaccess.com/full/14798432.jpg" alt="" />
              <h1>Tamil</h1>
            </div></Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
