import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classes from './CheckoutCart.module.css';
import CartContext from '../../store/cart-context';
import CheckoutNextButton from './CheckoutNextButton';
import CheckoutCartItem from './CheckoutCartItem';

function CheckoutCart({ onCoffeesSet }) {
  const { items, totalPrice } = useContext(CartContext);
  const shippingPrice = '5.00';
  const taxPrice = '1.00';

  const setCoffeesHandler = () => {
    const orderData = {
      order: [...items],
      subTotal: totalPrice.toFixed(2),
      shipping: shippingPrice,
      taxExclTotal: (totalPrice + parseFloat(shippingPrice)).toFixed(2),
      tax: taxPrice,
      total: (
        totalPrice +
        parseFloat(shippingPrice) +
        parseFloat(taxPrice)
      ).toFixed(2),
    };
    onCoffeesSet(orderData);
  };

  return (
    <>
      <div className={classes['checkout-cart']}>
        <h3>YOUR CART</h3>

        {items.length !== 0 ? (
          items.map((item) => {
            return (
              <CheckoutCartItem
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
      </div>
      <div className={classes['checkout-details']}>
        <h3>DETAILS</h3>
        <div className={classes['subtotal-shipping']}>
          <div className={classes['price-row']}>
            <h4 className={classes['checkout-total-title']}>Subtotal</h4>
            <div className={classes['checkout-price']}>
              $ {totalPrice.toFixed(2)}
            </div>
          </div>
          <div className={classes['price-row']}>
            <h4 className={classes['checkout-total-title']}>Shipping</h4>
            <div className={classes['checkout-price']}>$ {shippingPrice}</div>
          </div>
        </div>
        <div className={classes['taxes-total']}>
          <div className={classes['price-row']}>
            <h4 className={classes['checkout-total-title']}>
              Total (tax excl.)
            </h4>
            <div className={classes['checkout-price']}>
              $ {(+totalPrice.toFixed(2) + +shippingPrice).toFixed(2)}
            </div>
          </div>
          <div className={classes['price-row']}>
            <h4 className={classes['checkout-total-title']}>Taxes</h4>
            <div className={classes['checkout-price']}>$ {taxPrice}</div>
          </div>
        </div>
        <div className={classes['total-price']}>
          <div className={classes['price-row']}>
            <h4 className={classes['checkout-total-title']}>
              Total (tax incl.)
            </h4>
            <div className={classes['checkout-price']}>
              ${' '}
              {(+totalPrice.toFixed(2) + +shippingPrice + +taxPrice).toFixed(2)}
            </div>
          </div>
        </div>
        <CheckoutNextButton onClick={setCoffeesHandler} text="NEXT" />
      </div>
    </>
  );
}

CheckoutCart.propTypes = {
  onCoffeesSet: PropTypes.func.isRequired,
};

export default CheckoutCart;
