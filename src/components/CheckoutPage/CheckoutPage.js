import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CheckoutCart from './CheckoutCart';
import classes from './CheckoutPage.module.css';
import CheckoutAddress from './CheckoutAddress';
import CheckoutCardInfo from './CheckoutCardInfo';
import CheckoutFinal from './CheckoutFinal';

function CheckoutPage({ onCheckoutMade }) {
  const [pageState, setPageState] = useState(0);
  const [confirmedAddress, setConfirmedAddress] = useState({});
  const [confirmedCart, setConfirmedCart] = useState({});
  const [confirmedCard, setConfirmedCard] = useState({});

  const goBackHandler = () => {
    if (pageState > 0 && pageState <= 3) {
      setPageState((prev) => prev - 1);
      onCheckoutMade(false);
    }
  };

  const addressSetHandler = (address) => {
    setConfirmedAddress(address);
    setPageState((prev) => prev + 1);
  };

  const cartSetHandler = (cart) => {
    setConfirmedCart(cart);
    setPageState((prev) => prev + 1);
  };

  const cardInfoHandler = (card) => {
    setConfirmedCard(card);
    setPageState((prev) => prev + 1);
    onCheckoutMade(true);
  };

  return (
    <div className={classes['checkout-main']}>
      <h2 className={classes['checkout-title']}>CHECKOUT</h2>
      <div className={`container ${classes['checkout-container']}`}>
        {pageState === 0 && (
          <CheckoutAddress onAddressSet={addressSetHandler} />
        )}
        {pageState === 1 && <CheckoutCart onCoffeesSet={cartSetHandler} />}
        {pageState === 2 && (
          <CheckoutCardInfo onCardInfoSet={cardInfoHandler} />
        )}
        {pageState === 3 && (
          <CheckoutFinal
            addressData={confirmedAddress}
            cartData={confirmedCart}
            cardData={confirmedCard}
          />
        )}
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

CheckoutPage.propTypes = {
  onCheckoutMade: PropTypes.func.isRequired,
};
export default CheckoutPage;
