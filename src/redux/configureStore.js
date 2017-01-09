import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export default function (initialState = {}) {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

  if (module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(require('./reducers').default)); // eslint-disable-line global-require, max-len
  }

  return store;
}
