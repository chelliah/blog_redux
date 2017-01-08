import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'
import { connect } from 'react-redux'
import every from 'lodash/every'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import {saveExistingPost, publishNewPost, changeField, fetchCurrentPost, enableEditPost} from '../actions/postActions'

import PostEditor from './PostEditor'
import PostViewer from '../components/PostViewer'
// import PokemonList from '../components/PokemonList'

class SinglePostContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchCurrentPost(this.props.params.postId))
  }

  publishPost (context) {
    const {dispatch} = this.props
    const validPost = every([
      this.props.singlePost.author,
      this.props.singlePost.title,
      this.props.singlePost.content
    ])

    if (!validPost) return

    const post =
      {
        author: this.props.singlePost.author,
        date: this.props.singlePost.date || new Date(),
        title: this.props.singlePost.title,
        content: this.props.singlePost.content,
        postId: this.props.singlePost.postId ||  Date.now()
      }

    if(this.props.params.postId == 'new') {
      dispatch(publishNewPost(post))
    } else {
      dispatch(saveExistingPost(post))
    }
    this.props.router.push('/')
  }

  changeField(event) {
    const {dispatch} = this.props
    dispatch(changeField({[event.target.name]: event.target.value}))
  }

  editPost(event){
    const {dispatch} = this.props
    console.log('yo')
    dispatch(enableEditPost())
  }

  render() {
    const newPost = this.props.params.postId == 'new'
    if(newPost || this.props.editing) {
      return (
        <div>
          <Link to="/" >Go home</Link>
          <MuiThemeProvider>
            <PostEditor
              handleChange={this.changeField.bind(this)}
              publishPost={this.publishPost.bind(this)}
              singlePost={this.props.singlePost}
              />
          </MuiThemeProvider>
        </div>
      )
    } else {
      return (
        <div>
          <Link to="/" >Go home</Link>
          <PostViewer singlePost={this.props.singlePost} editPost={this.editPost.bind(this)}/>
        </div>
        )
    }
  }
}

SinglePostContainer.propTypes = {
    singlePost: PropTypes.object,
    editing: PropTypes.bool

}

const mapStateToProps = (state, ownProps) => {
    return {
        singlePost: state.postList.singlePost,
        editing: state.postList.editing
    }
}

export default connect(mapStateToProps)(SinglePostContainer)
