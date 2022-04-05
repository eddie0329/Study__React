import { useQuery } from 'react-query';
import PostCard from '../components/PostCard';
import useServices from '../hooks/useServices';
import Loading from '../components/Loading';

const Posts = () => {
  const services = useServices();
  const { isLoading, data: postData } = useQuery('posts', services.post.getPosts);

  if (isLoading) return <Loading />;
  return (
    <div>
      <h1>Posts</h1>
      {postData.map(post => <PostCard key={post.id} info={post} />)}
    </div>
  );
};

export default Posts;