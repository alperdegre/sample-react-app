import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classes from './HeaderButton.module.css';

function HeaderButton({ text, to }) {
  return (
    <Link className={classes['navbar-button']} to={to}>
      {text}
    </Link>
  );
}

HeaderButton.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default HeaderButton;
