import React from 'react';
import { ReactComponent as ShoppingCart } from '../../assets/icons/shopping-cart.svg';
import classes from './ShopIcon.module.css';

function ShopIcon() {
  return (
    <div className={classes['shop-icon']}>
      <ShoppingCart />
    </div>
  );
}

export default ShopIcon;
