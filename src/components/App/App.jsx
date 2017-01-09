import React, { PropTypes } from 'react';

const propTypes = {
  children: PropTypes.node.isRequired,
};

function App({ children = null }) {
  return (
    <div>
      {children}
    </div>
  );
}

App.propTypes = propTypes;

export default App;
