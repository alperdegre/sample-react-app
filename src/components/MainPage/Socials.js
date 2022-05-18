import React from 'react';
import classes from './Socials.module.css';
import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg';
import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg';
import { ReactComponent as Youtube } from '../../assets/icons/youtube.svg';
import { ReactComponent as Twitter } from '../../assets/icons/twitter.svg';

function Socials() {
  return (
    <div className={classes.socials}>
      <div className="container-flex">
        <a href="http://example.com">
          <Instagram />
        </a>
        <a href="http://example.com">
          <Facebook />
        </a>
        <a href="http://example.com">
          <Youtube />
        </a>
        <a href="http://example.com">
          <Twitter />
        </a>
      </div>
    </div>
  );
}

export default Socials;
