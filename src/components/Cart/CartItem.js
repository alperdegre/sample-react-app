import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classes from './CartItem.module.css';
import CartContext from '../../store/cart-context';

function CartItem({ id, name, price, grindType, amount }) {
  const cartContext = useContext(CartContext);

  // This will be used to add item to cart context
  const addItemHandler = () => {
    cartContext.addItem({
      id,
      name,
      price,
      grindType,
      amount: 1,
    });
  };

  // This will be used to subtract one item from cart context
  const subtractItemHandler = () => {
    cartContext.subtractOneItem(id, grindType);
  };

  const removeItemHandler = () => {
    cartContext.removeItem(id, grindType);
  };

  return (
    <div className={classes['cart-item-container']}>
      <div className={classes['cart-item-amount-selector']}>
        <button
          className={classes['selector-button']}
          type="button"
          onClick={subtractItemHandler}
        >
          -
        </button>
        <div className={classes['selector-amount']}> {amount} </div>
        <button
          className={classes['selector-button']}
          type="button"
          onClick={addItemHandler}
        >
          +
        </button>
      </div>
      <div className={classes['cart-item-info']}>
        <div className={classes['cart-item-name']}>{name}</div>
        <div className={classes['cart-item-details']}>TYPE : {grindType}</div>
      </div>
      <div className={classes['cart-item-price-info']}>
        <div className={classes['cart-item-price-title']}>Total</div>
        <div className={classes['cart-item-price']}>
          {(amount * price).toFixed(2)}
        </div>
        <button
          className={classes['cart-item-remove']}
          type="button"
          onClick={removeItemHandler}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  grindType: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default CartItem;
