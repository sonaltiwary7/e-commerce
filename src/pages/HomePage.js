import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api/productsApi';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './HomePage.css';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts();
      setProducts(products);
    };

    getProducts();
  }, []);

  return (
    <Container>
      <h1>Products</h1>
      <Row>
        {products.map(product => (
          <Col key={product.id} md={4}>
            <Card className="mb-4 shadow-sm">
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Button as={Link} to={`/product/${product.id}`} variant="primary">
                  View
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;
