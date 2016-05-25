//noinspection JSUnresolvedVariable
import React from 'react';

const App = ({children}) => (
  <div className="app-container root-app-test wrapper">{children}</div>
);

const Main = ({children}) => (
  <div className="main-container">
    <h1>Main container form Root app test</h1>
    <div>
      {children}
    </div>
  </div>
);

export {App, Main}