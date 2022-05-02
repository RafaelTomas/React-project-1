import React from 'react';
import x from 'prop-types';

import PostCard from '../PostCard';
import './styles.css';

const Posts = ({ posts = [] }) => (
  <div className="posts">
    {posts.map((post) => (
      <PostCard key={post.id} title={post.title} body={post.body} id={post.id} cover={post.cover} />
    ))}
  </div>
);

Posts.defaultProps = {
  posts: [],
};

Posts.propTypes = {
  posts: x.array,
};

export default Posts;
