import React from 'react';
import classes from './SuccessPage.module.css';
import { ReactComponent as SuccessSVG } from '../../assets/icons/success.svg';

function SuccessPage() {
  return (
    <div className={classes['success-wrapper']}>
      <div>
        <SuccessSVG className={classes['success-icon']} />
        <h2>THANK YOU FOR YOUR PURCHASE</h2>
        <p>YOUR ORDER HAS BEEN PLACED</p>
      </div>
    </div>
  );
}

export default SuccessPage;
