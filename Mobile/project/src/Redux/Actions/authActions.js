import Axios from 'axios';
import {API_URL} from '../../Support/API_URL';
import {AUTH_START, AUTH_FAILED, AUTH_SUCCESS} from '../types';

export const LoginAction = (username, password) => {
  return async dispatch => {
    dispatch({
      type: AUTH_START,
    });
    try {
      let res = await Axios.post(`${API_URL}/users/login`, {
        username,
        password,
      });
      console.log(res.data.data);
    } catch (err) {
      console.log(err.message);
      dispatch({
        type: AUTH_FAILED,
        payload: err.message,
      });
    }
  };
};

export const RegisterAction = (username, password, email) => {
  return async dispatch => {
    dispatch({
      type: AUTH_START,
    });
    try {
      let res = await Axios.post(`${API_URL}/users/register`, {
        username,
        password,
        email,
      });
      console.log(res.data.data);
    } catch (err) {
      dispatch({
        type: AUTH_FAILED,
        payload: err.message,
      });
    }
  };
};
