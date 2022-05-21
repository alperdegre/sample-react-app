import React, { useMemo } from 'react';
import classes from './ProductsPage.module.css';
import coffeeJSON from '../../data/coffees.json';
import ProductItem from './ProductItem';

function ProductsPage() {
  const coffeeData = useMemo(() => JSON.parse(JSON.stringify(coffeeJSON)), []);

  return (
    <div className={classes['products-main']}>
      <h2 className={classes['products-title']}>ALL PRODUCTS</h2>
      <p className={classes['products-description']}>
        Browse all of our products
      </p>
      <div className={`container ${classes['products-container']}`}>
        <h3>LIGHT ROAST COFFEES</h3>
        {coffeeData.coffees.map((coffee) => {
          return (
            <ProductItem
              key={coffee.id}
              name={coffee.name}
              description={coffee.description}
              price={coffee.price.toString()}
            />
          );
        })}
        <h3>MEDIUM ROAST COFFEES</h3>
        <h3>DARK ROAST COFFEES</h3>
      </div>
    </div>
  );
}

export default ProductsPage;
