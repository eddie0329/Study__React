import axios from 'axios';

const useApi = (url) => {
  const _axios = axios.create({
    baseURL: url
  });
  _axios.interceptors.response.use((response) => response.data);
  return _axios;
};

const usePostServices = () => {
  const api = useApi('https://jsonplaceholder.typicode.com');
  return {
    getPosts: () => api.get('/posts'),
    getPost: (postId) => api.get(`/posts/${postId}`),
    deletePost: (postId) => api.delete(`/posts/${postId}`),
  };
};

const useServices = () => {
  const constructor = {
    post: usePostServices,
  };
  const instances = new Map();
  const getInstance = (name) => {
    if (instances.get) instances.set(name, constructor[name]());
    return instances.get(name);
  };
  return {
    get post() {
      return getInstance('post');
    },
  };
};

export default useServices;
