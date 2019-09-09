import React from 'react';

export default function Button({ add }) {
  return <button onClick={() => add('hello')}>추가</button>;
}