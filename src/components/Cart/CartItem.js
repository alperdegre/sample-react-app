import React from 'react';
import PropTypes from 'prop-types';
import classes from './CartItem.module.css';

function CartItem({ name, price, grindType, amount }) {
  // This will be used to add item to cart context
  // const addItemHandler = () => {};

  // This will be used to remove item from cart context
  // const removeItemHandler = () => {};

  return (
    <div className={classes['cart-item-container']}>
      <div className={classes['cart-item-amount-selector']}>
        <button
          className={classes['selector-button']}
          type="button"
          onClick={minusButtonClicked}
        >
          -
        </button>
        <input
          type="number"
          className={classes['selector-input']}
          min="0"
          max="99"
          value={amount}
          step="1"
          onChange={amountChangeHandler}
        />
        <button
          className={classes['selector-button']}
          type="button"
          onClick={plusButtonClicked}
        >
          +
        </button>
      </div>
      <div className={classes['cart-item-info']}>
        <div className={classes['cart-item-name']}>{name}</div>
        <div className={classes['cart-item-details']}>
          GRIND TYPE : {grindType}
        </div>
      </div>
      <div className={classes['cart-item-price-info']}>
        <div className={classes['cart-item-price-title']}>Total</div>
        <div className={classes['cart-item-price']}>$ {price}</div>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  grindType: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default CartItem;
