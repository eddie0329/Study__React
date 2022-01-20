import React, { useReducer } from "react";

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

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ idInput, passwordInput });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div>idInput: {idInput}</div>
        <input value={idInput} onChange={e => dispatch({ type: 'setIdInput', payload: e.target.value })} />
        <div>passwordInput: {passwordInput}</div>
        <input value={passwordInput} onChange={e => dispatch({ type: 'setPasswordInput', payload: e.target.value })} />
        <div>
          <button type="submit">SUBMIT</button>
        </div>
      </form>
    </>
  );
};

export default Test1;
