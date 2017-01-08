import React from 'react';
import TextField from 'material-ui/TextField';
import {connect} from 'react-redux'

const PostEditor = ({singlePost, publishPost, handleChange}) => (
  <div>
    <TextField
      hintText="author name"
      // defaultValue = ""
      value={singlePost.author}
      name="author"
      onChange={handleChange.bind(this)}/>
    <TextField
      hintText="title"
      // defaultValue = ""
      value={singlePost.title}
      name="title"
      onChange={handleChange.bind(this)}/>
    <TextField
      hintText="content name"
      // defaultValue = ""
      value={singlePost.content}
      name="content"
      onChange={handleChange.bind(this)}/>
    <button onClick={publishPost}>publish</button>
  </div>
)

const mapStateToProps = function(store) {
  return {
    content: store.postList.singlePost.content,
    author: store.postList.singlePost.author,
    title: store.postList.singlePost.title
  }
}
export default connect(mapStateToProps)(PostEditor)
