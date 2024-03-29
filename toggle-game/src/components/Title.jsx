import {memo} from 'react';

const Title = ({ message }) => {
  return (
    <h1>{message}</h1>
  );
}

export default memo(Title);
