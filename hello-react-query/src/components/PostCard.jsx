import { useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import useServices from '../hooks/useServices';

const PostCard = ({ info }) => {
  const navigate = useNavigate();
  const services = useServices();
  const queryClient = useQueryClient();
  const { mutate } = useMutation(services.post.deletePost, {
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
    }
  });

  const id = useMemo(() => info?.id ?? 0, [info]);
  const title = useMemo(() => info?.title ?? '', [info]);
  const body = useMemo(() => info?.body ?? '', [info]);

  const onClickDelete = (e) => {
    e.stopPropagation();
    mutate(id);
  };

  return (
    <article style={{ border: '1px solid black', marginBottom: '2px', cursor: 'pointer' }} onClick={() => navigate(`/posts/${id}`)}>
      <button onClick={onClickDelete}>X</button>
      <h3>{id}. {title}</h3>
      <p>{body}</p>
    </article>
  );
};

export default PostCard;
