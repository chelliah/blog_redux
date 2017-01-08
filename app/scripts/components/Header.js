import React from 'react';
import {Link} from 'react-router';

const Header = () => (
  <div className="header">
    <h1>Some blog or something</h1>
    <Link to="post/new" className="header--action">New Post</Link>
  </div>
)

export default Header
