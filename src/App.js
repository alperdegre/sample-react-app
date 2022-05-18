import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Layout/Header';
import MainPage from './components/MainPage/MainPage';
import ProductsPage from './components/ProductsPage/ProductsPage';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
