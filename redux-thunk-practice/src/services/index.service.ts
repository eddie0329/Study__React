import axios from 'axios';

export const apiManager = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  timeout: 10000,
  transformResponse: [(data) => data],
});
