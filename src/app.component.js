//noinspection JSUnresolvedVariable
import React from 'react';
import Menu from './menu.component';

const App = ({children}) => (
  <div className="app-container root-app-test wrapper">{children}</div>
);

const Main = ({children}) => (
  <div className="main-container">
    <h1>Main container from Root app test</h1>
    <div className="menu-container">
      <Menu/>
    </div>
    <div>
      {children}
    </div>
  </div>
);

export {App, Main}