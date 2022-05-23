import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as ShoppingCart } from '../../assets/icons/shopping-cart.svg';
import classes from './ShopIcon.module.css';

function ShopIcon({ onShowCart }) {
  return (
    <div
      className={classes['shop-icon']}
      onClick={onShowCart}
      onKeyDown={onShowCart}
      role="button"
      tabIndex={0}
      aria-label="Open cart"
    >
      <ShoppingCart />
    </div>
  );
}

ShopIcon.propTypes = {
  onShowCart: PropTypes.func.isRequired,
};

export default ShopIcon;
