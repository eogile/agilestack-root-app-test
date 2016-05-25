import React from 'react';

const OuterComponent = ({children}) => (
  <div>
    <h2>Outer component</h2>
    <p>Children</p>
    <div>
      {children}
    </div>
  </div>
);

export { OuterComponent };
