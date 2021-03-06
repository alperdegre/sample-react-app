import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import classes from './ProductItem.module.css';
import ProductDropdown from './ProductDropdown';
import ProductAmountSelector from './ProductAmountSelector';
import CartContext from '../../store/cart-context';

function ProductItem({ id, name, description, price }) {
  const [isSelected, setIsSelected] = useState(false);
  const [selectedType, setSelectedType] = useState({
    id: 0,
    title: 'Select a Type',
    value: 'no',
  });
  const [selectedAmount, setSelectedAmount] = useState(0);
  const cartContext = useContext(CartContext);

  const dropdownItems = [
    { id: 1, title: 'Extra Coarse (Cold Brew)', value: 'extra-coarse' },
    { id: 2, title: 'Coarse (French Press)', value: 'coarse' },
    { id: 3, title: 'Medium-Coarse (Chemex)', value: 'medium-coarse' },
    { id: 4, title: 'Medium', value: 'medium' },
    { id: 5, title: 'Medium-Fine (Pour Over)', value: 'medium-fine' },
    { id: 6, title: 'Fine (Espresso)', value: 'fine' },
    { id: 7, title: 'Extra Fine (Turkish Coffee)', value: 'extra-fine' },
  ];

  const coffeeExtendHandler = () => {
    if (isSelected === false) {
      setIsSelected(() => true);
    }
  };

  const closeDetailsHandler = () => {
    if (isSelected === true) {
      setIsSelected(false);
    }
  };

  const dropdownSelectedHandler = (item) => {
    setSelectedType(item);
  };

  const productAmountChangeHandler = (amount) => {
    setSelectedAmount(+amount);
  };

  const addToCartHandler = () => {
    if (selectedType.value !== 'no') {
      cartContext.addItem({
        id,
        name,
        price,
        grindType: selectedType.title,
        amount: selectedAmount,
      });
    }
  };

  return (
    <div
      className={
        isSelected ? classes['product-item-extend'] : classes['product-item']
      }
      onClick={coffeeExtendHandler}
      onKeyDown={coffeeExtendHandler}
      role="button"
      tabIndex={0}
    >
      <div className={classes['product-half']}>
        <h4>{name}</h4>
        <p className={classes['product-description']}>{description}</p>
        {isSelected && (
          <>
            <h5 className={classes['type-title']}>Grind Type</h5>
            <ProductDropdown
              items={dropdownItems}
              placeholderText={selectedType.title}
              onSelected={dropdownSelectedHandler}
            />
            <h5 className={classes['amount-title']}>Amount</h5>
            <ProductAmountSelector
              onAmountChange={productAmountChangeHandler}
            />
            <button
              className={classes['product-close']}
              type="button"
              onClick={closeDetailsHandler}
            >
              CLOSE
            </button>
          </>
        )}
      </div>
      <div className={classes['product-price-half']}>
        <div className={classes['price-container']}>
          <h5 className={classes['product-sub-title']}>Price</h5>
          <h4 className={classes['product-price']}>{price} $</h4>
        </div>
        {isSelected && (
          <div className={classes['price-container']}>
            <h5 className={classes['product-total-title']}>Total Price</h5>
            <h4 className={classes['product-price-total']}>
              {(selectedAmount * price).toFixed(2)} $
            </h4>
            <button
              className={classes['add-to-cart']}
              type="button"
              onClick={addToCartHandler}
            >
              Add to Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default ProductItem;
