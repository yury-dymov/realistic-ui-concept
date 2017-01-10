import { testCall } from './test';

export const REQUEST_CLEAR = 'REQUEST_CLEAR';
export const REQUEST_REPLAY = 'REQUEST_REPLAY';

export function requestClear(description) {
  return {
    type: REQUEST_CLEAR,
    description,
  };
}

function requestReplayBegin(description) {
  return {
    type: REQUEST_REPLAY,
    description,
  };
}

export function requestReplay(description) {
  return (dispatch, getState) => {
    const id = getState().request.failed[description].id;

    dispatch(requestReplayBegin(description));

    return dispatch(testCall(id, description));
  };
}
