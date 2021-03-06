import React from 'react';
import { Link } from 'react-router';

const HomePage = () => (
  <div>
    <h2>Home page</h2>
    <h3>Hard coded menu</h3>
    <ul>
      <li><Link to="/login">Login page</Link></li>
      <li><Link to="/">Home page</Link></li>
      <li><Link to="/todo-list">Todo list</Link></li>
      <li><Link to="/outer">Outer router</Link></li>
      <li><Link to="/outer/inner">Inner route</Link></li>
    </ul>
  </div>
);

export { HomePage };
