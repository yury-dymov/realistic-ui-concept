import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import configureStore from './redux/configureStore';
import routes from './routes';

const store = configureStore();

ReactDOM.render(
  <IntlProvider locale="en">
    <Provider store={store}>
      {routes}
    </Provider>
  </IntlProvider>,
  document.getElementById('react-view'),
);
