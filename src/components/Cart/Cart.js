import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';

function Cart({ onClose }) {
  const cartContext = useContext(CartContext);
  const checkoutHandler = () => {};
  return (
    <Modal onClose={onClose}>
      <div className={classes['cart-title']}>SHOPPING CART</div>
      {cartContext.items.length !== 0 ? (
        cartContext.items.map((item) => {
          return (
            <CartItem
              key={item.name}
              id={item.id}
              name={item.name}
              grindType={item.grindType}
              price={item.price}
              amount={item.amount}
            />
          );
        })
      ) : (
        <p className={classes['cart-no-items']}>
          There are no items in your cart
        </p>
      )}
      <div className={classes['cart-total']}>
        <div className={classes['cart-total-title']}>Total</div>
        <div>$ {cartContext.totalPrice.toFixed(2)}</div>
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
