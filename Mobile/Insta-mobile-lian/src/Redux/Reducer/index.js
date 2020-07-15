import {combineReducers} from '@reduxjs/toolkit';
import {authReducer} from './authReducer';
import {todoReducer} from './todoReducer';

export default combineReducers({
  auth: authReducer,
  todo: todoReducer,
});
