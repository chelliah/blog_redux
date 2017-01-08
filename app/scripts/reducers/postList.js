import find from 'lodash/find'
import findIndex from 'lodash/findIndex'
const postList = (
  state = {posts: [
  {
    author: "brian",
    date: new Date(),
    title: "I can write",
    content: "blahh blahh",
    postId: 12345
  }],
  singlePost: {
    author: "",
    title: "",
    content: ""
  },
  editing: false}, action) => {
    switch(action.type) {
      case 'PUBLISH_NEW_POST': {
        return {...state, posts: [...state.posts, action.payload]}
        break;
      }

      case 'UPDATE_EXISTING_POST': {
        let postIndex = findIndex(state.posts, (post) => post.postId == action.payload.postId)
        console.log(postIndex)
        // return {...state, posts : [
        //   ...state.posts,
        //   [postIndex]: action.payload
        // ]}
      }
      case 'FETCH_CURRENT_POST': {
        let currentPost = find(state.posts, (post) => post.postId == action.payload)
        if (currentPost) {
          return {...state, singlePost: find(state.posts, (post) => post.postId == action.payload)}

        }else {
          return {...state, singlePost:  {
            author: "",
            title: "",
            content: ""
          }}
        }
        break;
      }
      case 'ENABLE_EDIT_POST_MODE': {
        return {...state, editing: true}
        break;
      }
      case 'DISABLE_EDIT_POST_MODE': {
        return {...state, editing: false}
        break;
      }
      case 'CHANGE_FIELD': {
        return {...state,
            singlePost: Object.assign(state.singlePost, action.payload)
          }
        break;
      }
      case 'CLEAR_EDIT_POST_FIELD': {
        return {...state, singlePost: {
          author: "",
          title: "",
          content: ""
        }}
        break;
      }
    }

    return state;
  }

export default postList
