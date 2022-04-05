import axios from 'axios';

let cached;
const useCache = () => {
  if (!cached) cached = new Map();
  return cached;
};

const useApi = (url) => {
  const cached = useCache();
  const _axiosInstance = axios.create({ baseURL: url });
  _axiosInstance.interceptors.response.use((response) => {
    const { data, config } = response;
    if (config?.headers?.cached) {
      if (cached.get(config?.url)) return cached.get(config?.url);
      else {
        cached.set(config?.url, data);
        return data;
      }
    } else {
      return data;
    }
  });

  const _get = (url, config) => {
    if (cached?.headers?.cached ?? cached.get(url)) return new Promise((resolve) => resolve(cached.get(url)));
    else return _axiosInstance(url, config);
  };
  return {
    get: _get,
  }
};

const useTodoService = () => {
  const api = useApi('https://jsonplaceholder.typicode.com');
  return {
    getTodos: () => api.get('/todos', { headers: { cached: true } }),
  };
};

const useServices = () => {
  const constructor = {
    todo: useTodoService
  };
  const instances = new Map();

  const getServices = (name) => {
    if (!instances.get(name)) instances.set(name, constructor[name]());
    return instances.get(name);
  };

  return {
    get todo() {
      return getServices('todo');
    }
  };
};

export default useServices;
