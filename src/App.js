import './App.css';
import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Layout/Header';
import MainPage from './components/MainPage/MainPage';
import ProductsPage from './components/ProductsPage/ProductsPage';
import Footer from './components/Layout/Footer';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
