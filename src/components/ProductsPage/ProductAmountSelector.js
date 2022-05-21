import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classes from './ProductAmountSelector.module.css';

function ProductAmountSelector({ onAmountChange }) {
  const [selectedAmount, setSelectedAmount] = useState(0);

  const amountChangeHandler = (event) => {
    // check if the entered value is a number between 1 and 99
    if (
      (event.target.value >= 1 && event.target.value <= 99) ||
      event.target.value.length === 0
    ) {
      setSelectedAmount(event.target.value);
    }
  };

  const plusButtonClicked = () => {
    if (selectedAmount < 99) {
      setSelectedAmount((prev) => +prev + 1);
    }
  };

  const minusButtonClicked = () => {
    if (selectedAmount > 0) {
      setSelectedAmount((prev) => +prev - 1);
    }
  };

  useEffect(() => {
    if (selectedAmount > 0) {
      onAmountChange(selectedAmount);
    }
  }, [selectedAmount]);

  return (
    <div className={classes['selector-wrapper']}>
      <button
        className={`${classes['selector-button']} ${classes.minus}`}
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
        value={selectedAmount}
        step="1"
        onChange={amountChangeHandler}
      />
      <button
        className={`${classes['selector-button']} ${classes.plus}`}
        type="button"
        onClick={plusButtonClicked}
      >
        +
      </button>
    </div>
  );
}

ProductAmountSelector.propTypes = {
  onAmountChange: PropTypes.func.isRequired,
};

export default ProductAmountSelector;
