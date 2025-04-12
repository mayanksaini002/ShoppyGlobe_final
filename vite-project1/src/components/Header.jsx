import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';
import './Header.css';

const Header = () => {
  const { user, token } = useSelector((state) => state.auth);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQty = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <header className={`site-header ${token ? 'logged-in' : ''}`}>
      {token && (
        <div className="user-section-desktop">
          👤 {user?.name || "User"}
        </div>
      )}

      <div className="left-section">
        <Link to="/" className="logo-title">
          <img src="./src/assets/hero/logo.png" alt="Logo" className="logo-image" />
          <h1 className="site-title">ShoppyGlobe</h1>
        </Link>
      </div>

      <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li>
            <Link to="/cart" onClick={() => setMenuOpen(false)}>
              Cart {totalQty > 0 && <span className="cart-count">{totalQty}</span>}
            </Link>
          </li>
          <li><Link to="/checkout" onClick={() => setMenuOpen(false)}>Checkout</Link></li>
          {token ? (
            <li>
              <button className="logout-button" onClick={() => { handleLogout(); setMenuOpen(false); }}>Logout</button>
            </li>
          ) : (
            <>
              <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
              <li><Link to="/register" onClick={() => setMenuOpen(false)}>Register</Link></li>
            </>
          )}
          {token && (
            <li className="user-name-mobile">
              👤 {user?.name || "User"}
            </li>
          )}
        </ul>
      </nav>

      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
};

export default Header;
