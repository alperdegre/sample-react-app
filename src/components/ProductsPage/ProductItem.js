import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classes from './ProductItem.module.css';

function ProductItem({ key, name, description, price }) {
  const [isSelected, setIsSelected] = useState(false);

  const coffeeExtendHandler = () => {
    if (isSelected === false) {
      setIsSelected(() => true);
    }
  };

  const closeDetailsHandler = () => {
    if (isSelected === true) {
      setIsSelected(false);
    }
  };

  return (
    <div
      key={key}
      className={
        isSelected ? classes['product-item-extend'] : classes['product-item']
      }
      onClick={coffeeExtendHandler}
      onKeyDown={coffeeExtendHandler}
      role="button"
      tabIndex={0}
    >
      <div className={classes['product-half']}>
        <h4>{name}</h4>
        <p>{description}</p>
        {isSelected && (
          <>
            <h5 className={classes['type-title']}>Type</h5>
            <p>Dropdown</p>
            <h5 className={classes['amount-title']}>Amount</h5>
            <p>+ 5 -</p>
            <button
              className={classes['product-close']}
              type="button"
              onClick={closeDetailsHandler}
            >
              CLOSE
            </button>
          </>
        )}
      </div>
      <div className={classes['product-half']}>
        <h5 className={classes['product-sub-title']}>Price</h5>
        <h4 className={classes['product-price']}>{price}</h4>
        {isSelected && (
          <>
            <h5 className={classes['product-sub-title']}>Total Price</h5>
            <h4 className={classes['product-price']}>50</h4>
            <button className={classes['add-to-cart']} type="button">
              Add to Cart
            </button>
          </>
        )}
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  key: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default ProductItem;
