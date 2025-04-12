// src/pages/Checkout.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
  const location = useLocation();
  const item = location.state?.item;

  if (!item) {
    return (
      <div className="checkout-page">
        <h2>No Items to Checkout</h2>
        <p>Your checkout is empty. Please confirm a product from the cart.</p>
        <Link to="/" className="home-button">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h2>Checkout Confirmation</h2>
      <p className="success-message">Thank you for shopping with <strong>ShoppyGlobe</strong>.</p>

      <div className="order-summary">
        <h3>Order Summary</h3>
        <ul>
          <li><span>Product:</span><span>{item.name}</span></li>
          <li><span>Quantity:</span><span>{item.quantity}</span></li>
          <li><span>Total:</span><span>${item.price * item.quantity}</span></li>
        </ul>
      </div>

      <p className="info">We'll send your confirmation via email shortly.</p>
      <Link to="/" className="home-button">Back to Home</Link>
    </div>
  );
};

export default Checkout;
