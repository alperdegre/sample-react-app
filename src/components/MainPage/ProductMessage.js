import React from 'react';
import coffeeImage from '../../assets/images/photo01.png';
import classes from './ProductMessage.module.css';

function ProductMessage() {
  return (
    <div className={classes['product-div']}>
      <div className="container-flex">
        <img src={coffeeImage} alt="espresso with a flower shaped decoration" />
        <div>
          <h2>Our company uses coffee beans roasted to perfection.</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            hic consectetur dignissimos facere molestiae repellat amet ex sunt
            beatae id! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Quis, perferendis blanditiis amet earum alias molestias magni
            dignissimos qui in. Vitae repudiandae blanditiis in quod asperiores
            dolorem quae quasi tenetur nihil.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductMessage;
