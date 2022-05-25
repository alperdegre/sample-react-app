import React, { useState, useContext } from 'react';
import CheckoutCart from './CheckoutCart';
import classes from './CheckoutPage.module.css';
import CartContext from '../../store/cart-context';
import CheckoutAddress from './CheckoutAddress';
import CheckoutCardInfo from './CheckoutCardInfo';

function CheckoutPage() {
  const [pageState, setPageState] = useState(0);

  // eslint-disable-next-line no-unused-vars
  const { items } = useContext(CartContext);

  const goNextHandler = () => {
    if (pageState >= 0 && pageState < 3) {
      setPageState((prev) => prev + 1);
    }
  };

  const goBackHandler = () => {
    if (pageState > 0 && pageState <= 3) {
      setPageState((prev) => prev - 1);
    }
  };

  return (
    <div className={classes['checkout-main']}>
      <h2 className={classes['checkout-title']}>CHECKOUT</h2>
      <div className={`container ${classes['checkout-container']}`}>
        {pageState === 0 && <CheckoutAddress />}
        {pageState === 1 && <CheckoutCart />}
        {pageState === 2 && <CheckoutCardInfo />}
        <button
          className={classes['checkout-next-button']}
          type="button"
          onClick={goNextHandler}
          onKeyDown={goNextHandler}
        >
          {pageState === 3 ? `PLACE YOUR ORDER` : `NEXT`}
        </button>
        {pageState > 0 && (
          <button
            className={classes['checkout-back-button']}
            type="button"
            onClick={goBackHandler}
            onKeyDown={goBackHandler}
          >
            BACK
          </button>
        )}
      </div>
    </div>
  );
}

export default CheckoutPage;
