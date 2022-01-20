import React, { useReducer, useEffect } from "react";

const initialState = {
  idInput: '',
  passwordInput: '',
};

const reducer = (state, action) => {
  switch(action.type) {
    case 'setIdInput':
      return { ...state, idInput: action.payload };
    case 'setPasswordInput':
      return { ...state, passwordInput: action.payload };
    default:
      throw new Error('No Match Type');
  }
};

const Test1 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { idInput, passwordInput } = state;

  useEffect(() => {
    console.log(state);
  }, [state]);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div>idInput: {idInput}</div>
        <input value={idInput} onChange={e => dispatch({ type: 'setIdInput', payload: e.target.value })} />
        <div>passwordInput: {passwordInput}</div>
        <input value={passwordInput} onChange={e => dispatch({ type: 'setPasswordInput', payload: e.target.value })} />
      </form>
    </>
  );
};

export default Test1;
