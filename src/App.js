import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import Header from './components/Header';
import './App.css';

const App = () => (
  <Provider store={store}>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
