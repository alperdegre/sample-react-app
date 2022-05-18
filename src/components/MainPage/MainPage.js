import React from 'react';
import FeaturedProducts from './FeaturedProducts';
import HeaderImage from './HeaderImage';
import ProductMessage from './ProductMessage';

function MainPage() {
  return (
    <main>
      <HeaderImage />
      <ProductMessage />
      <FeaturedProducts />
    </main>
  );
}

export default MainPage;
