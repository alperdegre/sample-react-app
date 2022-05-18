import React from 'react';
import coffeeBag from '../../assets/images/lightroastedcoffee.png';
import classes from './FeaturedItem.module.css';

function FeaturedItem() {
  return (
    <div className={classes.card}>
      <img src={coffeeBag} alt="A coffee bag" />
      <h2>Light Roast</h2>
      <p>
        Light roasted arabica beans Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Molestias, debitis. Lorem ipsum dolor sit amet.
      </p>
    </div>
  );
}

export default FeaturedItem;
