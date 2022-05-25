import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import modalPlugin from './ModalPlugin';

function ModalPortal({ children }) {
  modalPlugin.setModalContainer(ModalContainer);
  return createPortal(children, modalPlugin.getModalRoot());
}

function ModalContainer() {
  useEffect(() => {
  }, []);
  return (
    <ModalPortal>
      <h1>hello modal container</h1>
    </ModalPortal>
  );
}

export default ModalContainer;