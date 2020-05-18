import Axios from 'axios';
import {API_URL} from '../../Support/API_URL';
import {AUTH_START, AUTH_FAILED, AUTH_SUCCESS, AUTH_LOG_OUT} from '../types';
import {AsyncStorage} from 'react-native';

export const LoginAction = data => {
  return async dispatch => {
    dispatch({
      type: AUTH_START,
    });
    try {
      let res = await Axios.post(`${API_URL}/users/login`, data);
      let {
        id,
        username,
        password,
        email,
        roleId,
        verified,
        displayPicture,
        token,
      } = res.data.data;
      dispatch({
        type: AUTH_SUCCESS,
        payload: {
          id,
          username,
          roleId,
          email,
          password,
          verified,
          displayPicture,
        },
      });
      AsyncStorage.setItem('token', token);
    } catch (err) {
      console.log(err.message);
      dispatch({
        type: AUTH_FAILED,
        payload: err.message,
      });
    }
  };
};

export const RegisterAction = data => {
  return async dispatch => {
    dispatch({
      type: AUTH_START,
    });
    try {
      let res = await Axios.post(`${API_URL}/users/register`, data);
      let {
        id,
        username,
        password,
        email,
        roleId,
        verified,
        displayPicture,
        token,
      } = res.data.data;
      dispatch({
        type: AUTH_SUCCESS,
        payload: {
          id,
          username,
          roleId,
          email,
          password,
          verified,
          displayPicture,
        },
      });
      await AsyncStorage.setItem('token', token);
    } catch (err) {
      console.log(err.message);
      dispatch({
        type: AUTH_FAILED,
        payload: err.message,
      });
    }
  };
};

export const keepLogin = token => {
  return async dispatch => {
    dispatch({
      type: AUTH_START,
    });
    try {
      const headers = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      let res = await Axios.post(`${API_URL}/users/keep-login`, {}, headers);
      let {
        id,
        username,
        password,
        email,
        roleId,
        verified,
        displayPicture,
      } = res.data.data;
      dispatch({
        type: AUTH_SUCCESS,
        payload: {
          id,
          username,
          roleId,
          email,
          password,
          verified,
          displayPicture,
        },
      });
      await AsyncStorage.setItem('token', token);
    } catch (err) {
      dispatch({
        type: AUTH_FAILED,
        payload: err.message,
      });
    }
  };
};

export const LogoutAction = () => {
  return async dispatch => {
    await AsyncStorage.removeItem('token');
    dispatch({
      type: AUTH_LOG_OUT,
    });
  };
};
