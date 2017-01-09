import React from 'react';
import { browserHistory, IndexRoute, Route, Router } from 'react-router';
import App from './components/App';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';

const routes = (
  <Router history={browserHistory}>
    <Route component={App} path="/">
      <IndexRoute component={PageOne} />
      <Route component={PageTwo} path="/second-page" />
    </Route>
  </Router>
);

export default routes;
