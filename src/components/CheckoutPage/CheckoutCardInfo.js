import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classes from './CheckoutCardInfo.module.css';
import Visa from '../../assets/icons/visa-color.svg';
import MasterCard from '../../assets/icons/mastercard-color.svg';
import AmericanExpress from '../../assets/icons/amex-color.svg';
import Discover from '../../assets/icons/discover-color.svg';
import Default from '../../assets/icons/card-default-color.svg';
import CheckoutNextButton from './CheckoutNextButton';

function CheckoutCardInfo({ onCardInfoSet }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDateNumber] = useState('');
  const [cardType, setCardType] = useState(undefined);
  const [cvcNumber, setCVCNumber] = useState('');

  const cardInputChangeHandler = (event) => {
    // regex check if the input is a number
    if (/^[0-9]*$/.test(event.target.value.replace(/\s/g, ''))) {
      setCardNumber(event.target.value);
      const oneDigit = event.target.value.substring(0, 1);
      const twoDigits = event.target.value.substring(0, 2);
      const threeDigits = event.target.value.substring(0, 3);
      const fourDigits = event.target.value.substring(0, 4);
      const sixDigits = event.target.value.substring(0, 6);
      if (
        oneDigit === '4' ||
        fourDigits === '4026' ||
        fourDigits === '4508' ||
        fourDigits === '4844' ||
        fourDigits === '4913' ||
        fourDigits === '4917' ||
        sixDigits === '417500'
      ) {
        setCardType('Visa');
      } else if (
        (+twoDigits >= 51 && +twoDigits <= 55) ||
        (+fourDigits >= 2221 && +fourDigits <= 2720)
      ) {
        setCardType('MasterCard');
      } else if (twoDigits === '34' || twoDigits === '37') {
        setCardType('AmericanExpress');
      } else if (
        fourDigits === '6011' ||
        twoDigits === '65' ||
        (+threeDigits >= 644 && +threeDigits <= 649) ||
        (+fourDigits >= 622126 && +fourDigits <= 622925)
      ) {
        setCardType('Discover');
      } else if (oneDigit === '') {
        setCardType(undefined);
      }
    }
  };

  const expirationInputChangeHandler = (event) => {
    // regex check if the input is a number
    if (/^[0-9]*$/.test(event.target.value.replace(/\//g, ''))) {
      setExpirationDateNumber(event.target.value);
    }
  };

  const cvcNumberChangeHandler = (event) => {
    // regex check if the input is a number
    if (/^[0-9]*$/.test(event.target.value)) {
      setCVCNumber(event.target.value);
    }
  };

  const setCardInfoHandler = () => {
    // can add logic to check if the card info is valid
    const cardInfo = {
      firstName,
      lastName,
      cardNumber,
      expirationDate,
      cvcNumber,
    };
    onCardInfoSet(cardInfo);
  };

  const firstNameChangeHandler = (event) => {
    setFirstName(event.target.value);
  };

  const lastNameChangeHandler = (event) => {
    setLastName(event.target.value);
  };
  return (
    <div className={classes['card-wrapper']}>
      <h3>CREDIT CARD INFORMATION</h3>
      <div className={classes['card-row']}>
        <div className={classes['card-label']}>
          <h4>First Name</h4>
          <input
            type="text"
            placeholder="First Name"
            className={classes['card-input']}
            value={firstName}
            onChange={firstNameChangeHandler}
          />
        </div>
        <div className={classes['card-label']}>
          <h4>Last Name</h4>
          <input
            type="text"
            placeholder="Last Name"
            className={classes['card-input']}
            value={lastName}
            onChange={lastNameChangeHandler}
          />
        </div>
      </div>
      <div className={classes['card-row-wrap']}>
        <div className={classes['card-number-label']}>
          <h4>Card Number</h4>
          {cardType === undefined && (
            <img
              src={Default}
              alt="No Credit Card Icon"
              className={classes['card-icon']}
            />
          )}
          {cardType === 'Visa' && (
            <img
              src={Visa}
              alt="Visa Credit Card Icon"
              className={classes['card-icon']}
            />
          )}
          {cardType === 'MasterCard' && (
            <img
              src={MasterCard}
              alt="MasterCard Credit Card Icon"
              className={classes['card-icon']}
            />
          )}
          {cardType === 'AmericanExpress' && (
            <img
              src={AmericanExpress}
              alt="American Express Credit Card Icon"
              className={classes['card-icon']}
            />
          )}
          {cardType === 'Discover' && (
            <img
              src={Discover}
              alt="Discover Credit Card Icon"
              className={classes['card-icon']}
            />
          )}
          <input
            type="text"
            placeholder="0000  0000  0000  0000"
            className={classes['card-number-input']}
            value={
              cardNumber.length > 0
                ? cardNumber
                    .replace(/\s/g, '')
                    .match(/.{1,4}/g)
                    .join('  ')
                : cardNumber
            }
            onChange={cardInputChangeHandler}
            maxLength="22"
            data-testid="card-number-input"
          />
        </div>
        <div className={classes['card-label']}>
          <h4>Expiration Date</h4>
          <input
            type="text"
            placeholder="MM/YY"
            className={classes['card-input']}
            value={
              expirationDate.length > 0
                ? expirationDate
                    .replace(/\//g, '')
                    .match(/.{1,2}/g)
                    .join('/')
                : expirationDate
            }
            onChange={expirationInputChangeHandler}
            maxLength="5"
            data-testid="expiration-date-input"
          />
        </div>
        <div className={classes['card-label']}>
          <h4>CVC</h4>
          <input
            type="text"
            placeholder="CVC"
            className={classes['card-input']}
            maxLength="3"
            value={cvcNumber}
            onChange={cvcNumberChangeHandler}
            data-testid="cvc-number-input"
          />
        </div>
      </div>
      <CheckoutNextButton
        text="PROCEED TO ORDER"
        onClick={setCardInfoHandler}
      />
    </div>
  );
}

CheckoutCardInfo.propTypes = {
  onCardInfoSet: PropTypes.func.isRequired,
};

export default CheckoutCardInfo;
