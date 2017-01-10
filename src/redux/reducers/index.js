import { combineReducers } from 'redux';
import test from './test';
import request from './request';

export default combineReducers({
  request,
  test,
});
