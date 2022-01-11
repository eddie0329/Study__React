import React, {useReducer} from 'react';
import CounterProvder from './context';
import Child1 from './Child1';
import {initialState, reducer}  from './reducer';

const ReducerContextProvider = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <section>
      <h1>Reducer Context Provider Test</h1>
      <CounterProvder.Provider value={{state, dispatch}}>
        <Child1 />
      </CounterProvder.Provider>
    </section>
  );
};

export default ReducerContextProvider;
