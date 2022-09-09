import React, { useState, useMemo, useCallback } from 'react';
import Todo from './Todo'

// 1. props 나 state가 변경이 되었을때 re-rendering이 일어남
// 2. re-rendering은 해당 컴포넌트 포함 + 하위 tree 전체를 리랜더링 함

export default function Counter() {
  const [count, setCount] = useState(0);

  const title = () => {
    if (count % 3) return 'sam'
    else return 'eddie'
  }

  // 객체일 경우가 있기 때문 -> useState -> Object.is()
  // todos = [todo1, todo2, todo3, todo4]
  // const todo = {
  //   title: '장보기'
  //   isComplete: false,
  //   id: 0
  //  }
  //  todo.isComplete = true
  // <Todo todo={todo} />

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>PLUS</button>
      <Todo title={title()} />
    </div>
  );
}
