export const API_CALL = 'API_CALL';
export const API_CALL_SUCCESS = 'API_CALL_SUCCESS';
export const API_CALL_ERROR = 'API_CALL_ERROR';

function testCallBegin(id, description) {
  return {
    type: API_CALL,
    id,
    description,
  };
}

function testCallSuccess(id, description) {
  return {
    type: API_CALL_SUCCESS,
    id,
    description,
  };
}

function testCallError(id, description) {
  return {
    type: API_CALL_ERROR,
    error: 'API failed, please, try again',
    id,
    description,
  };
}

export function testCall(id, description) {
  return (dispatch) => {
    dispatch(testCallBegin(id, description));

    return setTimeout(() => {
      if (Math.random() * 10 <= 6) {
        return dispatch(testCallSuccess(id, description));
      }

      return dispatch(testCallError(id, description));
    }, 1000 * (2 + (Math.random() * 8)));
  };
}
