import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classes from './CheckoutAddress.module.css';
import CheckoutNextButton from './CheckoutNextButton';

function CheckoutAddress({ onAddressSet }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [country, setCountry] = useState('');

  const firstNameChangeHandler = (event) => {
    setFirstName(event.target.value);
  };

  const lastNameChangeHandler = (event) => {
    setLastName(event.target.value);
  };

  const addressChangeHandler = (event) => {
    setAddress(event.target.value);
  };

  const cityChangeHandler = (event) => {
    setCity(event.target.value);
  };

  const stateChangeHandler = (event) => {
    setState(event.target.value);
  };

  const zipChangeHandler = (event) => {
    setZip(event.target.value);
  };

  const countryChangeHandler = (event) => {
    setCountry(event.target.value);
  };

  const setAddressHandler = () => {
    const confirmedAddress = {
      firstName,
      lastName,
      address,
      city,
      state,
      zip,
      country,
    };
    onAddressSet(confirmedAddress);
  };

  return (
    <div className={classes['address-wrapper']}>
      <h3>ADDRESS DETAILS</h3>
      <div className={classes['address-row']}>
        <div className={classes['address-label']}>
          <h4>First Name</h4>
          <input
            type="text"
            placeholder="First Name"
            className={classes['address-input']}
            value={firstName}
            onChange={firstNameChangeHandler}
          />
        </div>
        <div className={classes['address-label']}>
          <h4>Last Name</h4>
          <input
            type="text"
            placeholder="Last Name"
            className={classes['address-input']}
            value={lastName}
            onChange={lastNameChangeHandler}
          />
        </div>
      </div>
      <div className={classes['address-row']}>
        <div className={classes['address-label-full']}>
          <h4>Address</h4>
          <input
            type="text"
            placeholder="Address"
            className={classes['address-input']}
            value={address}
            onChange={addressChangeHandler}
          />
        </div>
      </div>
      <div className={classes['address-row']}>
        <div className={classes['address-label']}>
          <h4>City</h4>
          <input
            type="text"
            placeholder="City"
            className={classes['address-input']}
            value={city}
            onChange={cityChangeHandler}
          />
        </div>
        <div className={classes['address-label']}>
          <h4>State</h4>
          <input
            type="text"
            placeholder="State"
            className={classes['address-input']}
            value={state}
            onChange={stateChangeHandler}
          />
        </div>
      </div>
      <div className={classes['address-row']}>
        <div className={classes['address-label']}>
          <h4>Zip/Postal Code</h4>
          <input
            type="text"
            placeholder="Zip/Postal Code"
            className={classes['address-input']}
            value={zip}
            onChange={zipChangeHandler}
          />
        </div>
        <div className={classes['address-label']}>
          <h4>Country</h4>
          <input
            type="text"
            placeholder="Country"
            className={classes['address-input']}
            value={country}
            onChange={countryChangeHandler}
          />
        </div>
      </div>
      <CheckoutNextButton onClick={setAddressHandler} text="NEXT" />
    </div>
  );
}

CheckoutAddress.propTypes = {
  onAddressSet: PropTypes.func.isRequired,
};

export default CheckoutAddress;
