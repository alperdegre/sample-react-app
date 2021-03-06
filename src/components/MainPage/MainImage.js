import React from 'react';
import { Link } from 'react-router-dom';
import classes from './MainImage.module.css';

function MainImage() {
  return (
    <div className={classes['header-image']}>
      <div className="container">
        <div className={classes['header-text']}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
            asperiores nemo sapiente earum sit, accusantium sequi laboriosam sed
            temporibus quidem! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quidem et ullam aut nisi nam totam quod temporibus
            cum, cumque natus?
          </p>
          <Link to="/products">Shop Now</Link>
        </div>
      </div>
    </div>
  );
}

export default MainImage;
