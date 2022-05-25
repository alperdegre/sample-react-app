import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import classes from './CheckoutFinal.module.css';
import CheckoutNextButton from './CheckoutNextButton';
import CartContext from '../../store/cart-context';

function CheckoutFinal({ addressData, cartData, cardData }) {
  const { clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const setOrderHandler = () => {
    // We have all the data we need to make an order.
    // We can send it to the server.
    // So we will clear the cart for now.
    clearCart();
    navigate('../success', { replace: true });
  };
  return (
    <div className={classes['checkout-final-wrapper']}>
      <h3>ADDRESS INFO</h3>
      <div className={classes['checkout-row']}>
        <div className={classes['checkout-pair']}>
          <div className={classes['checkout-title']}>First Name</div>
          <div className={classes['checkout-text']}>
            {addressData.firstName}
          </div>
        </div>
        <div className={classes['checkout-pair']}>
          <div className={classes['checkout-title']}>Last Name</div>
          <div className={classes['checkout-text']}>{addressData.lastName}</div>
        </div>
      </div>
      <div className={classes['checkout-pair']}>
        <div className={classes['checkout-title']}>Address</div>
        <div className={classes['checkout-text']}>{addressData.address}</div>
      </div>
      <div className={classes['checkout-row']}>
        <div className={classes['checkout-pair']}>
          <div className={classes['checkout-title']}>City</div>
          <div className={classes['checkout-text']}>{addressData.city}</div>
        </div>
        <div className={classes['checkout-pair']}>
          <div className={classes['checkout-title']}>State</div>
          <div className={classes['checkout-text']}>{addressData.state}</div>
        </div>
      </div>
      <div className={classes['checkout-row']}>
        <div className={classes['checkout-pair']}>
          <div className={classes['checkout-title']}>Zip/Postal Code</div>
          <div className={classes['checkout-text']}>{addressData.zip}</div>
        </div>
        <div className={classes['checkout-pair']}>
          <div className={classes['checkout-title']}>Country</div>
          <div className={classes['checkout-text']}>{addressData.country}</div>
        </div>
      </div>
      <h3>YOUR ORDER</h3>
      <div className={classes['order-item']}>
        {cartData.order.map((item) => {
          return (
            <div className={classes['product-item']} role="button" tabIndex={0}>
              <div className={classes['product-half']}>
                <h4>{item.name}</h4>
                <p className={classes['product-description']}>
                  {item.grindType}
                </p>
              </div>
              <div className={classes['product-price-half']}>
                <div className={classes['price-container']}>
                  <h5 className={classes['product-sub-title']}>Price</h5>
                  <h4 className={classes['product-price']}>
                    {item.itemTotal.toFixed(2)} $
                  </h4>
                </div>
              </div>
            </div>
          );
        })}
        <div className={classes['total-price-container']}>
          <div className={`${classes['price-pair']} ${classes.subtotal}`}>
            <h5 className={classes['details-sub-title']}>Subtotal</h5>
            <h4 className={classes['details-price']}>{cartData.subTotal} $</h4>
          </div>
          <div className={`${classes['price-pair']} ${classes.shipping}`}>
            <h5 className={classes['details-sub-title']}>Shipping</h5>
            <h4 className={classes['details-price']}>{cartData.shipping} $</h4>
          </div>
          <div className={`${classes['price-pair']} ${classes.tax}`}>
            <h5 className={classes['details-sub-title']}>Tax</h5>
            <h4 className={classes['details-price']}>{cartData.tax} $</h4>
          </div>
          <div className={`${classes['price-pair']} ${classes.total}`}>
            <h5 className={classes['details-sub-title']}>Total Price</h5>
            <h4 className={classes['details-price']}>{cartData.total} $</h4>
          </div>
        </div>
      </div>
      <h3>CREDIT CARD INFO</h3>
      <div className={classes['checkout-row']}>
        <div className={classes['checkout-pair']}>
          <div className={classes['checkout-title']}>First Name</div>
          <div className={classes['checkout-text']}>{cardData.firstName}</div>
        </div>
        <div className={classes['checkout-pair']}>
          <div className={classes['checkout-title']}>Last Name</div>
          <div className={classes['checkout-text']}>{cardData.lastName}</div>
        </div>
      </div>
      <div className={classes['checkout-row']}>
        <div className={classes['checkout-pair']}>
          <div className={classes['checkout-title']}>Card Number</div>
          <div className={classes['checkout-text']}>
            {`****  ****  ****  ${cardData.cardNumber
              .replace(/\s/g, '')
              .slice(-4)}`}
          </div>
        </div>
        <div className={classes['checkout-pair']}>
          <div className={classes['checkout-title']}>Expiration Date</div>
          <div className={classes['checkout-text']}>
            {cardData.expirationDate}
          </div>
        </div>
      </div>
      <CheckoutNextButton onClick={setOrderHandler} text="PLACE YOUR ORDER" />
    </div>
  );
}

CheckoutFinal.propTypes = {
  addressData: PropTypes.objectOf(PropTypes.string).isRequired,
  cartData: PropTypes.objectOf(PropTypes.string).isRequired,
  cardData: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default CheckoutFinal;
