import React from 'react';
import PropTypes from 'prop-types';
import classes from './Backdrop.module.css';

function Backdrop({ onClose }) {
  return (
    <div
      role="button"
      className={classes.backdrop}
      onClick={onClose}
      onKeyDown={onClose}
      tabIndex={0}
      aria-label="Close modal"
    />
  );
}

Backdrop.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Backdrop;
