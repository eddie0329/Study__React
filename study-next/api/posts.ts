import createApi from './api';

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const createPostServices = () => {
  const api = createApi('https://jsonplaceholder.typicode.com');
  return {
    getPosts: (): Promise<IPost[]> => api.get('/posts'),
    getPost: (postId: number | string): Promise<IPost> => api.get(`/posts/${postId}`),
    deletePost: (postId: number | string) => api.delete(`/posts/${postId}`),
  };
};

export default createPostServices;
