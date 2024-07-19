import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  const cart = useSelector(state => state.cart);

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">My E-commerce Store</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/cart">Cart ({cart.items.length})</Nav.Link>
          <Nav.Link as={Link} to="/checkout">Checkout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
