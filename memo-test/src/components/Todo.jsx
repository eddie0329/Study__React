import React, { memo } from 'react';

function TodoComp({ title1, title2, title3, title4 }) {
  return (
    <div>
      <h1>{title1}</h1>
    </div>
  );
}

// use ... hook

// useCallback -> 함수를 캐싱
// useMemo  -> 상수를 캐싱


const Todo = memo(TodoComp);

// memo(TodoComp, {})

export default Todo;


// memo ->

// TodoComp -> props

// 해당 컴포넌트가 있는데, 그 컴포넌트가 상태 관리를 하고 있지 않고 의존적인 경우 (display component)
// -> pure component

// props가 바뀔때만 rendering 하겠다고
// SSR, SSG -> REACT_QUERY
// NEXT -> REACT_QUERY
