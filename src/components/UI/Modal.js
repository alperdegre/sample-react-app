import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Backdrop from './Backdrop';
import ModalOverlay from './ModalOverlay';

const portalElement = document.getElementById('overlays');

function Modal({ children, onClose }) {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
