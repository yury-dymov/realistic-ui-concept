import React from 'react';
import { browserHistory, IndexRoute, Route, Router } from 'react-router';
import App from './components/App';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';

function hashLinkScroll() {
  const { hash } = window.location;
  if (hash !== '') {
    // Push onto callback queue so it runs after the DOM is updated,
    // this is required when navigating from a different page so that
    // the element is rendered on the page before trying to getElementById.
    setTimeout(() => {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) element.scrollIntoView();
    }, 0);
  }
}

const routes = (
  <Router history={browserHistory} onUpdate={hashLinkScroll}>
    <Route component={App} path="/">
      <IndexRoute component={PageOne} />
      <Route path="/second-page" component={PageTwo} />
      <Route path="*" component={PageOne} />
    </Route>
  </Router>
);

export default routes;
