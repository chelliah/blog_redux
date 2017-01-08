import { combineReducers } from 'redux'
import postList from './postList'

/**
 * The state parameter is different for every reducer, and corresponds to the part of the state it manages.
 *
 */

const blogApp = combineReducers({
    postList,
    // singlePost
})

export default blogApp
