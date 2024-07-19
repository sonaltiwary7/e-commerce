import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../components/CheckoutForm';
import { Container } from 'react-bootstrap';
import './CheckoutPage.css';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const CheckoutPage = () => (
  <Container className="mt-5">
    <h1>Checkout</h1>
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  </Container>
);

export default CheckoutPage;
