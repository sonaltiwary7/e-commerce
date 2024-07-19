import React from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { Form, Button, Row, Col, Container, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import './CheckoutForm.css';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const cart = useSelector((state) => state.cart);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    const result = await stripe.createToken(card);

    if (result.error) {
      console.log(result.error.message);
    } else {
      console.log(result.token);
    }
  };

  const calculateTotal = () => {
    return cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <Container>
      <Row className="mt-4">
        <Col md={8}>
          <Form onSubmit={handleSubmit}>
            <Card className="mb-4">
              <Card.Header>User Information</Card.Header>
              <Card.Body>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" required />
                </Form.Group>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" required />
                </Form.Group>
                <Form.Group controlId="formAddress">
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="text" placeholder="Enter your address" required />
                </Form.Group>
                <Form.Group controlId="formCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control type="text" placeholder="Enter your city" required />
                </Form.Group>
                <Form.Group controlId="formPostalCode">
                  <Form.Label>Postal Code</Form.Label>
                  <Form.Control type="text" placeholder="Enter your postal code" required />
                </Form.Group>
                <Form.Group controlId="formCountry">
                  <Form.Label>Country</Form.Label>
                  <Form.Control type="text" placeholder="Enter your country" required />
                </Form.Group>
              </Card.Body>
            </Card>
            <Card className="mb-4">
              <Card.Header>Payment Information</Card.Header>
              <Card.Body>
                <Form.Group controlId="formCard">
                  <CardElement />
                </Form.Group>
              </Card.Body>
            </Card>
            <Button variant="primary" type="submit" disabled={!stripe}>
              Pay Now
            </Button>
          </Form>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Header>Order Summary</Card.Header>
            <Card.Body>
              {cart.items.length === 0 ? (
                <p>Your cart is empty</p>
              ) : (
                <ul className="list-group list-group-flush">
                  {cart.items.map((item) => (
                    <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                      <div>
                        {item.name} x {item.quantity}
                      </div>
                      <div>${(item.price * item.quantity).toFixed(2)}</div>
                    </li>
                  ))}
                  <li className="list-group-item d-flex justify-content-between align-items-center font-weight-bold">
                    <div>Total</div>
                    <div>${calculateTotal()}</div>
                  </li>
                </ul>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutForm;
