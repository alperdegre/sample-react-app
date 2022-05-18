import React from 'react';
import classes from './HeaderImage.module.css';

function HeaderImage() {
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
          <button type="button">Shop Now</button>
        </div>
      </div>
    </div>
  );
}

export default HeaderImage;
