import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart } from './redux/cartSlice';
import Header from './components/Header';
import NotFound from './components/NotFound';
import WelcomePopup from './components/WelcomePopup';
import Footer from './components/Footer';

const Home = lazy(() => import('./pages/Home'));
const ProductDetail = lazy(() => import('./components/ProductDetail'));
const Cart = lazy(() => import('./components/Cart'));
const Checkout = lazy(() => import('./pages/Checkout'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));

const BodyClassManager = () => {
  const location = useLocation();

  useEffect(() => {
    const body = document.body;
    if (location.pathname === '/') {
      body.classList.remove('body-with-padding');
    } else {
      body.classList.add('body-with-padding');
    }
  }, [location.pathname]);

  return null;
};

const AppRoutes = () => {
  const dispatch = useDispatch();
  const { token, user, isAuthenticated } = useSelector((state) => state.auth);
  const location = useLocation();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (token) {
      dispatch(fetchCart());
    }
  }, [dispatch, token]);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('hasSeenPopup');

    if (
      isAuthenticated &&
      user &&
      location.pathname === '/' &&
      hasSeenPopup === 'false'
    ) {
      setShowPopup(true);
      sessionStorage.setItem('hasSeenPopup', 'true');

      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [isAuthenticated, user, location.pathname]);

  return (
    <>
      <Header />
      <BodyClassManager />
      {showPopup && <WelcomePopup user={user} />}
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};

const App = () => (
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
);

export default App;
