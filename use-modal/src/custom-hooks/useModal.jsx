import React, { useState, useCallback, useMemo, useEffect } from "react";

const ModalContainer = () => {
  const [modals, setModals] = useState([]);

  const push = () => {
    console.log("HELLO WORLD");
  };

  return (
    <div>
      <h1>HELLO WORLD</h1>
    </div>
  );
};

const useModal = (modalComponent) => {
  const [root, setRoot] = useState();
  const push = () => {};
  const pop = () => {}

  useEffect(() => {
    if (root) return;
    const _root = document.querySelector("#root");
    console.log(ModalContainer);
    // _root.appendChild(ModalContainer());
    setRoot(_root);
  }, [root]);

  return { push, pop }
};

export default useModal;
