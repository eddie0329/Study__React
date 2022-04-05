import { useState, useEffect } from 'react';
import useServices from '../hooks/useServices';
import useFetch from '../hooks/useFetch';

const Home = () => {
  const {}  = useFetch();

  return (
    <div>
      <h1>HELLO HOME</h1>
    </div>
  );
};

export default Home;
