import React from 'react';

const PostViewer = ({singlePost, editPost}) => (
  <div>
    <div>{singlePost.author}</div>
    {/* <div>{singlePost.date}</div> */}
    <div>{singlePost.title}</div>
    <div>{singlePost.content}</div>
    <button onClick={editPost.bind(this)}>edit</button>
  </div>
)

export default PostViewer
