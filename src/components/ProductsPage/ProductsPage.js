import React, { useMemo } from 'react';
import classes from './ProductsPage.module.css';
import coffeeJSON from '../../data/coffees.json';

function ProductsPage() {
  const coffeeData = useMemo(() => JSON.parse(JSON.stringify(coffeeJSON)), []);

  return (
    <div className={classes['products-main']}>
      <h2>ALL PRODUCTS</h2>
      <p>Browse all of our products</p>
      <div className={`container ${classes['product-container']}`}>
        {coffeeData.coffees.map((coffee) => {
          return <div>coffee {coffee.name}</div>;
        })}
      </div>
    </div>
  );
}

export default ProductsPage;
