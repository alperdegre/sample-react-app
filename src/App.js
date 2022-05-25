import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Layout/Header';
import MainPage from './components/MainPage/MainPage';
import ProductsPage from './components/ProductsPage/ProductsPage';
import AboutPage from './components/AboutPage/AboutPage';
import Footer from './components/Layout/Footer';
import Cart from './components/Cart/Cart';
import Socials from './components/MainPage/Socials';
import CheckoutPage from './components/CheckoutPage/CheckoutPage';
import SuccessPage from './components/SuccessPage/SuccessPage';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [iconIsShown, setIconIsShown] = useState(false);
  const [isCheckedOut, setIsCheckedOut] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (cartIsShown) {
      setCartIsShown(false);
    }
    if (pathname !== '/success') {
      setIconIsShown(true);
    }
  }, [pathname]);

  const hideCart = () => {
    setCartIsShown(false);
  };

  const showCart = () => {
    setCartIsShown(true);
  };

  const checkoutMadeHandler = (isCheckoutMade) => {
    if (isCheckoutMade) {
      setIconIsShown(false);
      setIsCheckedOut(true);
    } else {
      setIconIsShown(true);
    }
  };

  return (
    <>
      {cartIsShown && <Cart onClose={hideCart} />}
      <Header onShowCart={showCart} showIcon={iconIsShown} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route
          path="/checkout"
          element={<CheckoutPage onCheckoutMade={checkoutMadeHandler} />}
        />
        {isCheckedOut && <Route path="/success" element={<SuccessPage />} />}
      </Routes>
      <Socials />
      <Footer />
    </>
  );
}

export default App;
