import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Header from '../Components/Header';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Container fluid>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>

        {/* Single-item Carousel */}
        <Row>
          <Col>
            <Carousel className="ant">
              <Carousel.Item interval={700}>
                <img
                  src="https://wallpaperaccess.com/full/14643098.jpg"
                  alt="First slide"
                  style={{ width: '100%', height: 'auto', maxHeight: '700px' }}
                />
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img
                  src="https://wallpaperaccess.com/full/7420358.jpg"
                  alt="Second slide"
                  style={{ width: '100%', height: 'auto', maxHeight: '700px' }}
                />
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img
                  src="https://wallpaperaccess.com/full/1853985.jpg"
                  alt="Third slide"
                  style={{ width: '100%', height: 'auto', maxHeight: '700px' }}
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>

        {/* Multi-item Carousel with images side by side and no autoplay */}
        <Row className="mt-4">
          <Col>
            <Carousel className="multi-item-carousel" interval={null}> {/* Disables autoplay */}
              <Carousel.Item>
                <Row className="justify-content-center">
                  <Col md={3} className="px-2 text-center">
                    <Link to={'/telmovie'} style={{textDecoration:"none"}}><div className="image-container">
                      <img
                        src="https://wallpaperaccess.com/full/7790523.jpg"
                        alt="Item 1"
                        style={{ width: '100%', height: '200px' }}
                      />
                      <h1 className="image-label text-white">Telugu</h1>
                    </div></Link>
                  </Col>
                  <Col md={3} className="px-2 text-center">
                   <Link to={'/hinmovie'} style={{textDecoration:"none"}}> <div className="image-container">
                      <img
                        src="https://images.ottplay.com/images/mirzapur-season-3-1718088141.jpg"
                        alt="Item 2"
                        style={{ width: '100%', height: '200px' }}
                      />
                      <h1 className="image-label text-white">Hindi</h1>
                    </div></Link>
                  </Col>
                  <Col md={3} className="px-2 text-center">
                   <Link to={'/tammovie'} style={{textDecoration:"none"}}> <div className="image-container">
                      <img
                        src="https://wallpapercave.com/wp/wp8015498.jpg"
                        alt="Item 3"
                        style={{ width: '100%', height: '200px' }}
                      />
                      <h1 className="image-label text-white">Tamil</h1>
                    </div></Link>
                  </Col>
                  <Col md={3} className="px-2 text-center">
                   <Link to={'/engmovie'}  style={{textDecoration:"none"}}> <div className="image-container">
                      <img
                        src="https://4kwallpapers.com/images/walls/thumbs_3t/11684.jpg"
                        alt="Item 4"
                        style={{ width: '100%', height: '200px' }}
                      />
                      <h1 className="image-label text-white">English</h1>
                    </div></Link>
                  </Col>
                </Row>
              </Carousel.Item>

              <Carousel.Item>
                <Row className="justify-content-center">
                  <Col md={3} className="px-2 text-center">
                   <Link to={'/malmovie'} style={{textDecoration:"none"}}><div className="image-container">
                      <img
                        src="https://wallpaperaccess.com/full/14119726.jpg"
                        alt="Item 5"
                        style={{ width: '100%', height: '200px' }}
                      />
                      <h1 className="image-label text-white">Malayalam</h1>
                    </div></Link> 
                  </Col>
                  <Col md={3} className="px-2 text-center">
                   <Link to={'/kanmovie'} style={{textDecoration:"none"}}> <div className="image-container">
                      <img
                        src="https://wallpaperaccess.com/full/3744987.jpg"
                        alt="Item 6"
                        style={{ width: '100%', height: '200px' }}
                      />
                      <h1 className="image-label text-white">Kannada</h1>
                    </div></Link>
                  </Col>
                  <Col md={3} className="px-2 text-center">
                   <Link to={'/kormovie'} style={{textDecoration:"none"}}> <div className="image-container">
                      <img
                        src="https://wallpaperaccess.com/full/12622543.jpg"
                        alt="Item 7"
                        style={{ width: '100%', height: '200px' }}
                      />
                      <h1 className="image-label text-white ">K-Drama</h1>
                    </div></Link>
                  </Col>
                  <Col md={3} className="px-2 text-center">
                    <div className="image-container">
                      <img
                        src="https://wallpaperaccess.com/full/677417.jpg"
                        alt="Item 8"
                        style={{ width: '100%', height: '200px' }}
                      />
                      <h1 className="image-label text-white">Anime</h1>
                    </div>
                  </Col>
                </Row>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>

     
    </div>
  );
}

export default Dashboard;
