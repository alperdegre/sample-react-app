import React from 'react';
import PropTypes from 'prop-types';
import classes from './ModalOverlay.module.css';

function ModalOverlay({ children }) {
  return <div className={classes.modal}>{children}</div>;
}

ModalOverlay.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ModalOverlay;
