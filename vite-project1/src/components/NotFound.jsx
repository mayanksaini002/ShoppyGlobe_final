// NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="notfound-container">
      <h2>404 - Page Not Found</h2>
      <p>Sorry, we couldn’t find what you were looking for.</p>
      <Link to="/">Return Home</Link>
    </div>
  );
};

export default NotFound;
