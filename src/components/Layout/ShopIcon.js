import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as ShoppingCart } from '../../assets/icons/shopping-cart.svg';
import classes from './ShopIcon.module.css';
import CartContext from '../../store/cart-context';

function ShopIcon({ onShowCart }) {
  const { items } = useContext(CartContext);
  const numberOfCartItems = items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);
  const [badgeBump, setBadgeBump] = useState(false);
  const [badgeShow, setBadgeShow] = useState(false);
  const badgeClasses = `${classes.badge} ${
    badgeBump ? classes['badge-bump'] : ''
  } ${badgeShow ? classes['badge-show'] : ''}`;

  useEffect(() => {
    if (items.length === 0) {
      setBadgeShow(false);
    } else {
      setBadgeShow(true);
    }
    setBadgeBump(true);

    const timeout = setTimeout(() => {
      setBadgeBump(false);
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  }, [items, setBadgeBump, setBadgeShow, numberOfCartItems]);

  return (
    <div
      className={classes['shop-icon']}
      onClick={onShowCart}
      onKeyDown={onShowCart}
      role="button"
      tabIndex={0}
      aria-label="Open cart"
    >
      <div className={badgeClasses}>{numberOfCartItems}</div>
      <ShoppingCart />
    </div>
  );
}

ShopIcon.propTypes = {
  onShowCart: PropTypes.func.isRequired,
};

export default ShopIcon;
