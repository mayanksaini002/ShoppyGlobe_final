// Home.jsx
import React from 'react';
import ProductList from '../components/ProductList';
import './Home.css';

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="hero">
        <div className="hero-slide"></div>
        <div className="hero-slide"></div>
        <div className="hero-slide"></div>
        <div className="hero-slide"></div>
        <div className="hero-slide"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Welcome to ShoppyGlobe</h1>
          <p>Explore Market sitting at Home.</p>
        </div>
      </div>
      <section className="product-section">
        <ProductList />
      </section>
    </div>
  );
};

export default Home;
