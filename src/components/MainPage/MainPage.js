import React from 'react';
import FeaturedProducts from './FeaturedProducts';
import MainImage from './MainImage';
import ProductMessage from './ProductMessage';
import Socials from './Socials';

function MainPage() {
  return (
    <main>
      <MainImage />
      <ProductMessage />
      <FeaturedProducts />
      <Socials />
    </main>
  );
}

export default MainPage;
