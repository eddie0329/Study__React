import { useState } from 'react';

const Title2 = ({ children }) => {
  const [name, setName] = useState('eddie');
  return children(name);
}

export default Title2;
