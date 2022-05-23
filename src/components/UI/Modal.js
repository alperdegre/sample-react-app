import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Backdrop from './Backdrop';
import ModalOverlay from './ModalOverlay';

const modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'overlay');
document.body.appendChild(modalRoot);

function Modal({ children, onClose }) {
  const modal = document.createElement('div');

  useEffect(() => {
    modalRoot.appendChild(modal);

    return () => {
      modalRoot.removeChild(modal);
    };
  });

  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, modal)}
      {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, modal)}
    </>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
