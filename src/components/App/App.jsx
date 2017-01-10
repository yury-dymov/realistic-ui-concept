import React, { PropTypes } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Header from '../Header';

const propTypes = {
  children: PropTypes.node.isRequired,
};

function App({ children = null }) {
  return (
    <div>
      <Header />
      <Grid>
        {children}
      </Grid>
    </div>
  );
}

App.propTypes = propTypes;

export default App;
