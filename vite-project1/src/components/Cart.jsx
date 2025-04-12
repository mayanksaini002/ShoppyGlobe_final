// src/pages/Cart.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import './Cart.css';
import { fetchCart } from '../redux/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your Cart is Empty</h2>
        <Link to="/">Return to Shop</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item._id} itemData={item} />
        ))}
      </div>
      <div className="cart-summary">
        <h3>Total: ${totalAmount.toFixed(2)}</h3>
        {/* Passing the first cart item to Checkout page */}
        <Link
          to="/checkout"
          state={{ item: cartItems[0], total: totalAmount.toFixed(2) }}
          className="btn-checkout"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
