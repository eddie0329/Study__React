import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import useServices from '../hooks/useServices';

const Post = () => {
  const services = useServices();
  const { postId } = useParams();
  const { data: postData } = useQuery(`posts/${postId}`, () => services.post.getPost(postId)) ;

  const title = useMemo(() => postData?.title ?? '', [postData]);
  const body = useMemo(() => postData?.body ?? '', [postData]);

  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
};

export default Post;