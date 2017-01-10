import assign from 'lodash/assign';
import now from 'lodash/now';
import { API_CALL, API_CALL_SUCCESS, API_CALL_ERROR } from '../actions/test';
import { REQUEST_CLEAR, REQUEST_REPLAY } from '../actions/request';

const initialState = {
  active: 0,
  error: 0,
  processing: {},
  failed: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case API_CALL: {
      const nextState = assign({}, state);

      nextState.processing[action.description] = {
        timestamp: now(),
        status: 0,
        ...action,
      };

      return nextState;
    }
    case API_CALL_SUCCESS: {
      const nextState = assign({}, state);

      nextState.processing[action.description].status = 1;

      delete nextState.failed[action.description];

      return nextState;
    }

    case API_CALL_ERROR: {
      const nextState = assign({}, state);

      nextState.failed[action.description] = nextState.processing[action.description];
      nextState.failed[action.description].status = 2;

      delete nextState.processing[action.description];

      return nextState;
    }
    case REQUEST_CLEAR: {
      const nextState = assign({}, state);

      if (nextState.processing[action.description]) {
        delete nextState.processing[action.description];
      }

      if (nextState.failed[action.description]) {
        delete nextState.failed[action.description];
      }

      return nextState;
    }
    case REQUEST_REPLAY: {
      const nextState = assign({}, state);

      delete nextState.processing[action.description];
      delete nextState.failed[action.description];

      return nextState;
    }
    default:
      return state;
  }
}
