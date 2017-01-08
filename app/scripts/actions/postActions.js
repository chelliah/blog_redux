import {push} from 'react-router'

export const publishNewPost = (newPost) => {
  return function(dispatch) {
    dispatch({type: "PUBLISH_NEW_POST", payload: newPost})
    dispatch({type: "CLEAR_EDIT_POST_FIELD"})
  }
}

export const enableEditPost = () => {
  return function(dispatch) {
    dispatch({type: 'ENABLE_EDIT_POST_MODE'})
  }
}

export const saveExistingPost = (existingPost) => {
  return function(dispatch) {
    dispatch({type: 'DISABLE_EDIT_POST_MODE'})
  }
}


export const changeField = (field) => {
  return function(dispatch) {
    dispatch({type: "CHANGE_FIELD", payload: field})
  }
}

export const fetchCurrentPost = (postId) => {
  return function(dispatch) {
    dispatch({type: "FETCH_CURRENT_POST", payload: postId})
  }
}
