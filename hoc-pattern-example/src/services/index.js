import axios from 'axios';

const ApiService = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  timeout: 1000,
});

ApiService.interceptors.response.use(
  (response) => response.data, 
  (error) => Promise.reject(error)
);

export default ApiService;
