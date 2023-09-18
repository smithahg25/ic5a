import React from 'react';
import './Home.css'; 
import { Container, Row, Col } from 'react-bootstrap'; 

function Home() {
  return (
    <Container>
      <h1>Food Items</h1>
      <Row>
        <Col md={3}>
          <div className="card mb-3">
            <img src="https://b.zmtcdn.com/data/reviews_photos/00d/2ebf8a1134f65f41562bfb33325e100d_1665631719.jpg" className="card-img-top" alt="Burger" />
            <div className="card-body">
              <h5 className="card-title">Burger</h5>
              <p className="card-text">
                Delicious burger with cheese and vegetables.
              </p>
              <p className="card-price">₹129</p> 
              <button className="btn btn-primary">Order Now</button>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div className="card mb-3">
            <img src="https://th.bing.com/th/id/R.019a864431d44a6daf75c2956bfdd04b?rik=FerNTCDzFFI9pQ&riu=http%3a%2f%2fpicz.in%2fdata%2fmedia%2f8%2fPizza.jpg&ehk=pQJo0DQh1aI3vTUjgHWR2HDTFE1BlOvlrh%2b%2fai%2fANEw%3d&risl=&pid=ImgRaw&r=0" className="card-img-top" alt="Pizza" />
            <div className="card-body">
              <h5 className="card-title">Pizza</h5>
              <p className="card-text">
                Mouthwatering pizza with various toppings.
              </p>
              <p className="card-price">₹169</p> 
              <button className="btn btn-primary">Order Now</button>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div className="card mb-3">
            <img src="https://curryncornbread.files.wordpress.com/2020/03/s2.jpg?w=2048" className="card-img-top" alt="Noodles" />
            <div className="card-body">
              <h5 className="card-title">Noodles</h5>
              <p className="card-text">
                Delicious and flavorful noodles.
              </p>
              <p className="card-price">₹160</p> 
              <button className="btn btn-primary">Order Now</button>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div className="card mb-3">
            <img src="https://th.bing.com/th/id/OIP.6VFRsrYFLmfEdUCRcM6GRwHaEo?pid=ImgDet&rs=1" className="card-img-top" alt="Pasta" />
            <div className="card-body">
              <h5 className="card-title">Pasta</h5>
              <p className="card-text">
                Classic Italian pasta dishes.
              </p>
              <p className="card-price">₹155</p>
              <button className="btn btn-primary">Order Now</button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
