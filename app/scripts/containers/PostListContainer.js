import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'

import Post from '../components/Post'
import Header from '../components/Header'


// import PokemonList from '../components/PokemonList'

class PostListContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    const {posts} = this.props
    return (
      <div>
        <Header />
        {posts.map((post) => <Post post={post} key={post.postId}/>)}
      </div>
    )
  }
}

PostListContainer.propTypes = {
    posts: PropTypes.array
}

const mapStateToProps = (state, ownProps) => {
    return {
        posts: state.postList.posts
    }
}

export default connect(mapStateToProps)(PostListContainer)
