import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const routeFactory = (Page, authRequired) => (
  <Suspense fallback={<>...</>}>
    <Page />
  </Suspense>
);

const Home = routeFactory(lazy(() => import('../pages/Home')));
const Posts = routeFactory(lazy(() => import('../pages/Posts')));
const Post = routeFactory(lazy(() => import('../pages/Post')));

const RouteView = () => {
  return (
    <Routes>
      <Route path="/" element={Home} />
      <Route path="/posts" element={Posts} />
      <Route path="/posts/:postId" element={Post} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export default RouteView;
