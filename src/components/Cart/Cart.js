import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';

function Cart({ onClose }) {
  const { items, totalPrice } = useContext(CartContext);

  return (
    <Modal onClose={onClose}>
      <div className={classes['cart-title']}>SHOPPING CART</div>
      {items.length !== 0 ? (
        items.map((item) => {
          return (
            <CartItem
              key={item.name + item.grindType}
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
        <div>$ {totalPrice.toFixed(2)}</div>
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
        <Link to="/checkout" className={classes['cart-button']}>
          ORDER
        </Link>
      </div>
    </Modal>
  );
}

Cart.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Cart;
