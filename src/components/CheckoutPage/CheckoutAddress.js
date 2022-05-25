import React from 'react';
import classes from './CheckoutAddress.module.css';

function CheckoutAddress() {
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
          />
        </div>
        <div className={classes['address-label']}>
          <h4>Last Name</h4>
          <input
            type="text"
            placeholder="Last Name"
            className={classes['address-input']}
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
          />
        </div>
        <div className={classes['address-label']}>
          <h4>State</h4>
          <input
            type="text"
            placeholder="State"
            className={classes['address-input']}
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
          />
        </div>
        <div className={classes['address-label']}>
          <h4>Country</h4>
          <input
            type="text"
            placeholder="Country"
            className={classes['address-input']}
          />
        </div>
      </div>
    </div>
  );
}

export default CheckoutAddress;
