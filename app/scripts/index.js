import React from 'react'
import { render } from 'react-dom'
// import { Router, Route, hashHistory, IndexRoute} from 'react-router';
import {Router, Route, hashHistory, IndexRoute} from 'react-router'
import { Provider } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin';

import configureStore from './configureStore'
import App from './components/App'
import PostListContainer from './containers/PostListContainer'
import SinglePostContainer from './containers/SinglePostContainer'
require('../styles/main.scss');

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
const store = configureStore()

render(
    <Provider store={store}>
      <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={PostListContainer} />
            <Route path="post(/:postId)" component={SinglePostContainer} />
          </Route>
      </Router>
    </Provider>,
    document.getElementById('root')
);
