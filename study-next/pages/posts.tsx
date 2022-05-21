import React from 'react';
import type {IPost} from '../api/posts';
import services from '../api';
import PostCard from '../components/PostCard';

export async function getStaticProps() {
  const {posts: postServices} = services;
  const posts = await postServices.getPosts();
  return {
    props: {
      posts: posts ?? []
    }
  };
}

interface Props {
  posts: IPost[];
}

const Posts: React.FC<Props> = ({posts}) => {
  return (
    <main>
      <ul>
        {posts.map(post => <PostCard key={post.id} {...post} />)}
      </ul>
    </main>
  );
};

export default Posts;
