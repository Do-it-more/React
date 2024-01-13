import React from 'react';
import { Container, Col, Card, Button, Navbar, Nav } from 'react-bootstrap';
import img1 from './img/img1.jpg'; 
import img2 from './img/img2.jpg'; 
import img3 from './img/img3.jpg'; 
import img4 from './img/img4.jpeg'; 
import img5 from './img/img5.jpeg'; 
import img6 from './img/img6.jpeg'; 

const YourComponent = () => {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Skytraveller</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="p-4">
        <div className="row">
          {/* First Row */}
          <Col md="4">
            <Card>
              <Card.Img variant="top" src={img1} />
              <Card.Body>
                <Card.Title>America</Card.Title>
                <Card.Text>
                America boasts diverse natural wonders, from the iconic Grand Canyon's mesmerizing rock formations to the picturesque landscapes of Yellowstone National Park, featuring geysers and wildlife. Its scenic beauty encompasses everything from the serene Great Lakes to the vibrant fall foliage of New England.
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md="4">
            <Card>
              <Card.Img variant="top" src={img2} />
              <Card.Body>
                <Card.Title>London</Card.Title>
                <Card.Text>
                    London, as a bustling metropolis, is characterized by its urban landscape and historic architecture rather than natural features. While the city offers beautiful parks and the serene River Thames, its nature is more influenced by urban greenery and iconic landmarks than expansive natural landscapes.
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md="4">
            <Card>
              <Card.Img variant="top" src={img3} />
              <Card.Body>
                <Card.Title>srilanka</Card.Title>
                <Card.Text>
                Sri Lanka is blessed with the diverse nature and lush natural landscapes, including tropical beaches with golden sands and crystal-clear waters. The country is adorned with verdant tea plantations, ancient forests, and wildlife-rich national parks, offering a rich tapestry of natural beauty.
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Second Row */}
          <Col md="4">
            <Card>
              <Card.Img variant="top" src={img4} />
              <Card.Body>
                <Card.Title>Japan</Card.Title>
                <Card.Text>
                  Japan is graced with a captivating that includes landscapes scenic mountain ranges such as the iconic Mount Fuji. The country's diverse terrain encompasses tranquil gardens, hot springs, and ancient forests, creating a harmonious blend of traditional and picturesque elements.
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md="4">
            <Card>
              <Card.Img variant="top" src={img5} />
              <Card.Body>
                <Card.Title>India</Card.Title>
                <Card.Text>
                India boasts diverse natural wonders, from the snow-capped peaks of the Himalayas to the serene backwaters of Kerala. The country's rich tapestry of landscapes includes lush jungles, golden deserts, and pristine beaches, offering a captivating blend of biodiversity and scenic beauty.
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md="4">
            <Card>
              <Card.Img variant="top" src={img6} />
              <Card.Body>
                <Card.Title>Kazhakstan's</Card.Title>
                <Card.Text>
                Kazakhstan's nature is marked by vast steppes, rugged mountain ranges like the Tian Shan, and the unique beauty of the Charyn Canyon. The country also features the Caspian Sea coastline and diverse ecosystems, making it a land of contrasting landscapes and natural wonders.
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
        </div>
      </Container>
    </div>
  );
};

export default YourComponent;
