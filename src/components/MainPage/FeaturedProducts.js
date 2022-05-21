import React from 'react';
import { Link } from 'react-router-dom';
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
      <Link to="/products" className={classes['buy-now-button']}>
        Buy Now
      </Link>
    </div>
  );
}

export default FeaturedProducts;
