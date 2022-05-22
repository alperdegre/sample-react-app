import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import ProductItem from '../ProductsPage/ProductItem';

function Cart({ onClose }) {
  const checkoutHandler = () => {};
  return (
    <Modal onClose={onClose}>
      <div className={classes['cart-title']}>SHOPPING CART</div>
      {/* Here will be a check like 
      cartContext.items.length !== 0 ? <Show Cart Items> : <Show No Items Div> 
      After we add context for cart items
      */}
      <CartItem />
      <ProductItem name="Test" description="Test" price="20" />
      <p className={classes['cart-no-items']}>
        There are no items in your cart
      </p>
      <div className={classes['cart-total']}>
        <div className={classes['cart-total-title']}>Total</div>
        <div>$ 50.00</div>
      </div>
      <div className={classes['cart-controls']}>
        <div
          role="button"
          className={classes['cart-button']}
          onClick={onClose}
          onKeyDown={onClose}
          tabIndex={0}
        >
          CLOSE
        </div>
        <div
          role="button"
          className={classes['cart-button']}
          onClick={checkoutHandler}
          onKeyDown={checkoutHandler}
          tabIndex={0}
        >
          ORDER
        </div>
      </div>
    </Modal>
  );
}

Cart.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Cart;
