import { useState, useEffect } from 'react';

const useModal = () => {
  const [modalContainer, setModalContainer] = useState();
  useEffect(() => {
    setModalContainer(window._modalContainer);
  }, []);

  const push = async (modalComponent, options) => await modalContainer.push(modalComponent, options);

  return { push }
};

export default useModal;
