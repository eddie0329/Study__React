import { useEffect, useState } from 'react';

const useFetch = (promise) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    console.log("HELLO");
  }, []);

  return {
    loading,
    data
  };
};

export default useFetch;