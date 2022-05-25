import React from 'react';
import FeaturedProducts from './FeaturedProducts';
import MainImage from './MainImage';
import ProductMessage from './ProductMessage';

function MainPage() {
  return (
    <main>
      <MainImage />
      <ProductMessage />
      <FeaturedProducts />
    </main>
  );
}

export default MainPage;
