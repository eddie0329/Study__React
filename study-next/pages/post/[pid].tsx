import React from 'react';
import type {IPost} from '../../api/posts';
import {GetServerSideProps} from 'next';
import services from '../../api';

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const {posts: postServices} = services;
  const post = await postServices.getPost(query?.pid as string);
  return {
    props: {
      post: post ?? {}
    }
  };
}

interface Props {
  post: IPost
}

const Post: React.FC<Props> = ({ post }) => {
  return (
    <main>
      <h1>{post.id}. {post.title}</h1>
      <p>{post.title}</p>
    </main>
  );
}

export default Post;
