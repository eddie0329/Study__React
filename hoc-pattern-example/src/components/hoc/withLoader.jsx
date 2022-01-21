import { useState, useEffect, useCallback } from 'react';
import ApiService from '../../services';

const withLoader = (Component, url) => {
  return (props) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);

    const fetchData = useCallback(async () => {
      setLoading(true);
      setData(await ApiService.get(url));
      setLoading(false);
    }, []);

    useEffect(() => {
      fetchData();
    } , [fetchData]);

    if (loading) return <div style={{ fontSize: '200px' }}>Loading...</div>
    else return <Component  {...props} data={data} fetchData={fetchData} />
  }
}

export default withLoader;