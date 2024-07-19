import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../api/productsApi';
import { addToCart } from '../redux/actions/cartActions';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import './ProductPage.css';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      const products = await fetchProducts();
      const foundProduct = products.find(product => product.id === parseInt(id, 10));
      setProduct(foundProduct);
    };

    getProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="product-page">
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={6}>
          <h2>{product.name}</h2>
          <p>${product.price}</p>
          <Button variant="primary" onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
