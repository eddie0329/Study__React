import { useState, useEffect } from 'react';

const useFetch = (promise) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const fetch = () => {
    setLoading(true);
    promise().then(res => {
      setData(res);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetch();
  }, []);

  return {
    data,
    loading,
    reFetch: fetch,
  };
};

export default useFetch;
