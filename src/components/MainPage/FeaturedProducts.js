import React from 'react';
import classes from './FeaturedProducts.module.css';
import FeaturedItem from './FeaturedItem';

function FeaturedProducts() {
  return (
    <div className={classes['featured-products']}>
      <h2>Featured Products</h2>
      <p>Delicious beans served for your tastebuds.</p>
      <div className={`container ${classes['product-container']}`}>
        <FeaturedItem />
        <FeaturedItem />
        <FeaturedItem />
      </div>
      <button type="button" className={classes['buy-now-button']}>
        Buy Now
      </button>
    </div>
  );
}

export default FeaturedProducts;
