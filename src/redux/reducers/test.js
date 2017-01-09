import merge from 'lodash/merge';
import { API_CALL, API_CALL_SUCCESS, API_CALL_ERROR } from '../actions/test';

function toggleValue(state, id) {
  if (state[id] && state[id].value === 1) {
    return 0;
  }

  return 1;
}

export default function (state = {}, action) {
  switch (action.type) {
    case API_CALL:
      return merge({}, state, { [action.id]: { loading: true, error: null } });
    case API_CALL_SUCCESS:
      return merge({}, state, { [action.id]: { loading: false, error: null, value: toggleValue(state, action.id) } }); // eslint-disable-line max-len
    case API_CALL_ERROR:
      return merge({}, state, { [action.id]: { loading: false, error: action.error } });
    default:
      return state;
  }
}
