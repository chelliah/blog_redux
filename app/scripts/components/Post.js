import React from 'react';
import {Link} from 'react-router';

const Post = ({post}) => (
  <div>
    <div>{post.author}</div>
    <Link to={`post/${post.postId}`}> view post </Link>
  </div>
)

export default Post
