import axios from 'axios';

const createApi = (url: string) => {
  const _axios = axios.create({
    baseURL: url
  });
  _axios.interceptors.response.use((response) => response?.data);
  return _axios;
};

export default createApi;
