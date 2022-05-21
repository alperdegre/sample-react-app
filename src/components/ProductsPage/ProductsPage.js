import React, { useMemo } from 'react';
import classes from './ProductsPage.module.css';
import coffeeJSON from '../../data/coffees.json';

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
          if (coffee.id === '1') {
            return (
              <div key={coffee.id} className={classes['coffee-extended']}>
                {coffee.name}
                <p className={classes.description}>
                  Light roasted arabica beans Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Molestias, debitis. Lorem ipsum
                  dolor sit amet.
                </p>
              </div>
            );
          }
          return (
            <div key={coffee.id} className={classes.coffee}>
              {coffee.name}
              <p className={classes.description}>{coffee.description}</p>
            </div>
          );
        })}
        <h3>MEDIUM ROAST COFFEES</h3>
        <h3>DARK ROAST COFFEES</h3>
      </div>
    </div>
  );
}

export default ProductsPage;
