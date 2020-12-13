import { useReducer, useCallback } from "react";

const CHANGE_FORM = "CHANGE_FORM";
const RESET_FORM = "RESET_FORM";

function reducer(state, action) {
  switch (action.type) {
    case CHANGE_FORM:
      return {
        ...state,
        [action.name]: action.value,
      };
    case RESET_FORM:
      return {
        ...action.initialForm,
      };
    default:
      return state;
  }
}

function useInputs(initialForm) {
  const [form, dispatch] = useReducer(reducer, initialForm);

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({ type: CHANGE_FORM, name, value });
  }, []);

  const reset = useCallback(() => dispatch({ type: RESET_FORM, initialForm }), [
    initialForm,
  ]);

  return [form, onChange, reset];
}

export default useInputs;
