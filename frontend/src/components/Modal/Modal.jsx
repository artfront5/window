import React from 'react';
import Portal from '../Portal/Portal';
import css from './Modal.module.scss'

function Modal({ closeModal, children }) {
  return (
    <Portal>
      <div className={css.background_modal} onClick={() => closeModal(false)}>
        <div className={css.box} onClick={(event) => event.stopPropagation()}>
          
          {children}
        </div>
      </div>
    </Portal>
  );
}

export default Modal;
