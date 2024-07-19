import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions/cartActions';
import { ListGroup, Button, Container, Row, Col } from 'react-bootstrap';
import './Cart.css';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <Container>
      <h2>Shopping Cart</h2>
      {cart.items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ListGroup>
          {cart.items.map((item) => (
            <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
              <div>
                {item.name} - ${item.price} x {item.quantity}
              </div>
              <Button variant="danger" onClick={() => dispatch(removeFromCart(item.id))}>
                Remove
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </Container>
  );
};

export default Cart;
