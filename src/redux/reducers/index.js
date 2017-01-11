import { combineReducers } from 'redux';
import readme from './readme';
import request from './request';
import test from './test';

export default combineReducers({
  readme,
  request,
  test,
});
