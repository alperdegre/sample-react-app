// import logo from './logo.svg';
// import coffee from './assets/icons/coffee.svg';
import './App.css';
import React from 'react';
import Header from './components/Layout/Header';
import MainPage from './components/MainPage/MainPage';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <div>
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
