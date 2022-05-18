import React from 'react';
import PropTypes from 'prop-types';
import classes from './HeaderButton.module.css';

function HeaderButton({ text }) {
  return (
    <button className={classes['navbar-button']} type="button">
      {text}
    </button>
  );
}

HeaderButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default HeaderButton;
