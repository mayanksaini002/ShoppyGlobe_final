import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/src/assets/hero/logo.png" alt="ShoppyGlobe Logo" />
          <h2>ShoppyGlobe</h2>
        </div>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} ShoppyGlobe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
