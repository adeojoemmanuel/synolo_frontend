import React from 'react';

import Portal from './Portal';

import modalClose from '../../assets/icons/modal-close.svg'

const Modal = ({ children, close, handleModal }) => (
  <Portal id="modal">
    <div className="modal-overlay">
      <div className="modal-box">
        {close && <img src={modalClose} alt="close modal" onClick={() => handleModal()}/> }
        <div className="modal">
          {children}
        </div>
      </div>
    </div>
  </Portal>
);

export default Modal;
