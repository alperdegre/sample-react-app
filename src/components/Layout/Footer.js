import React from 'react';
import classes from './Footer.module.css';
import { ReactComponent as Logo } from '../../assets/icons/coffee.svg';

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={`${classes['footer-content']} container-flex`}>
        <div>
          <h2>COFFEE COMPANY</h2>
          <a href="http://example.com">Privacy Policy</a> |{' '}
          <a href="http://example.com">Terms of use</a> |{' '}
          <a href="http://example.com">Contact us</a> |{' '}
          <a href="http://example.com">Cookie Preferences</a>
          <p>© 2021 Coffee Company. All rights reserved.</p>
        </div>
        <Logo />
      </div>
    </footer>
  );
}

export default Footer;
