import axios from 'axios';

export const apiManager = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  timeout: 10000,
});

apiManager.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  return Promise.reject(error);
});
