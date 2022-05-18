import React from 'react';
import FeaturedProducts from './FeaturedProducts';
import HeaderImage from './HeaderImage';
import ProductMessage from './ProductMessage';
import Socials from './Socials';

function MainPage() {
  return (
    <main>
      <HeaderImage />
      <ProductMessage />
      <FeaturedProducts />
      <Socials />
    </main>
  );
}

export default MainPage;
