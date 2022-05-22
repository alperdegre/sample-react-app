import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../UI/Modal';

function Cart({ onClose }) {
  return (
    <Modal onClose={onClose}>
      <h2>Cart</h2>
      <p>Items</p>
      <h2>Close</h2>
      <h2>Order</h2>
    </Modal>
  );
}

Cart.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Cart;
