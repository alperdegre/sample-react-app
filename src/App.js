import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Layout/Header';
import MainPage from './components/MainPage/MainPage';
import ProductsPage from './components/ProductsPage/ProductsPage';
import Footer from './components/Layout/Footer';
import Cart from './components/Cart/Cart';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  const hideCart = () => {
    setCartIsShown(false);
  };

  const showCart = () => {
    setCartIsShown(true);
  };

  return (
    <>
      {cartIsShown && <Cart onClose={hideCart} />}
      <Header onShowCart={showCart} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
