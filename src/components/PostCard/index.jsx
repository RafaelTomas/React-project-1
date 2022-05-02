import React from 'react';
import x from 'prop-types';

import './styles.css';

const PostCard = ({ cover, title, id, body }) => (
  <div className="post">
    <img src={cover} alt={title} />
    <div className="post-content">
      <h2>
        {title} {id}{' '}
      </h2>
      <p>{body}</p>
    </div>
  </div>
);

PostCard.propTypes = {
  cover: x.string.isRequired,
  title: x.string.isRequired,
  id: x.number.isRequired,
  body: x.string.isRequired,
};

export default PostCard;
