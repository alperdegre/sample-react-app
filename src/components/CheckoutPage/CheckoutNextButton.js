import React from 'react';
import PropTypes from 'prop-types';
import classes from './CheckoutNextButton.module.css';

function CheckoutNextButton({ text, onClick }) {
  return (
    <button
      className={classes['checkout-next-button']}
      type="button"
      onClick={onClick}
      onKeyDown={onClick}
    >
      {text}
    </button>
  );
}

CheckoutNextButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CheckoutNextButton;
