export const API_CALL = 'API_CALL';
export const API_CALL_SUCCESS = 'API_CALL_SUCCESS';
export const API_CALL_ERROR = 'API_CALL_ERROR';

function testCallBegin(id) {
  return {
    type: API_CALL,
    id,
  };
}

function testCallSuccess(id) {
  return {
    type: API_CALL_SUCCESS,
    id,
  };
}

function testCallError(id) {
  return {
    type: API_CALL_ERROR,
    error: 'API failed, please, try again',
    id,
  };
}

export function testCall(id) {
  return (dispatch) => {
    dispatch(testCallBegin(id));

    return setTimeout(() => {
      if (Math.random() * 10 <= 6) {
        return dispatch(testCallSuccess(id));
      }

      return dispatch(testCallError(id));
    }, 1000 * (2 + (Math.random() * 8)));
  };
}
