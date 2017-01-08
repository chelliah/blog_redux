import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { createStore, applyMiddleware } from 'redux'

import blogApp from './reducers'


const configureStore = () => {
  const middleware = applyMiddleware(promise(), thunk, logger())
  let store = createStore(blogApp, middleware);

  return store
}

export default configureStore
