import React, { PropTypes } from 'react';
import Like from '../Like';

const propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

function Post({ id, text }) {
  return (
    <div className="post-block">
      <div className="post">
        {text}
      </div>
      <div className="like-block">
        <Like id={id} />
      </div>
    </div>
  );
}

Post.propTypes = propTypes;

export default Post;
