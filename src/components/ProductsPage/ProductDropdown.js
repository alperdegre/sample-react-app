import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classes from './ProductDropdown.module.css';

function ProductDropdown({ items, placeholderText, onSelected }) {
  const [dropdownClicked, setDropdownClicked] = useState(false);
  const dropdownWrapperRef = useRef(null);

  const dropdownClickedHandler = () => {
    setDropdownClicked((prev) => {
      return !prev;
    });
  };

  const handleClickOutside = (event) => {
    if (
      dropdownWrapperRef.current &&
      !dropdownWrapperRef.current.contains(event.target)
    ) {
      setDropdownClicked(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, false);
    return () => {
      document.removeEventListener('click', handleClickOutside, false);
    };
  }, []);

  return (
    <div className={classes.dropdown} ref={dropdownWrapperRef}>
      <div
        className={classes['dropdown-button']}
        onClick={dropdownClickedHandler}
        onKeyDown={dropdownClickedHandler}
        role="button"
        tabIndex={0}
      >
        {placeholderText} <i className={`${classes.arrow} ${classes.down}`} />
      </div>
      <div
        className={
          dropdownClicked
            ? classes['dropdown-content']
            : `${classes['dropdown-content']} ${classes['dropdown-hidden']}`
        }
      >
        {items.map((item) => {
          return (
            <div
              key={item.id}
              className={classes['dropdown-option']}
              onClick={() => {
                setDropdownClicked(false);
                onSelected(item);
              }}
              onKeyDown={() => {
                setDropdownClicked(false);
                onSelected(item);
              }}
              role="button"
              tabIndex={0}
            >
              {item.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}

ProductDropdown.propTypes = {
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  placeholderText: PropTypes.string.isRequired,
  onSelected: PropTypes.func.isRequired,
};

export default ProductDropdown;
