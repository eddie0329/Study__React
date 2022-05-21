import React from 'react';
import {IPost} from '../api/posts';
import {useRouter} from 'next/router';

const PostCard: React.FC<IPost> = ({userId, id, title, body}) => {
  const router = useRouter();

  const onClick = async () => {
    await router.push(`/post/${id}`);
  }

  return (
    <li>
      <article onClick={onClick}>
        <h3>{id}. {title}</h3>
        <p>{body}</p>
      </article>
    </li>
  );
}

export default PostCard;
