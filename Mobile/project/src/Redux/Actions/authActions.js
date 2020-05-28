import Axios from 'axios';
import {API_URL} from '../../Support/API_URL';
import {AsyncStorage} from 'react-native';
import {
  AUTH_START,
  AUTH_FAILED,
  AUTH_SUCCESS,
  AUTH_LOG_OUT,
  INIT_DATALIST,
  AUTH_CHANGE_SUCCESS,
} from '../types';

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
      console.log(token);
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
      type: INIT_DATALIST,
    });
    dispatch({
      type: AUTH_LOG_OUT,
    });
  };
};

export const ChangePassAction = data => {
  return async dispatch => {
    dispatch({
      type: AUTH_START,
    });
    try {
      const token = await AsyncStorage.getItem('token');
      const options = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      let res = await Axios.post(`${API_URL}/users/change-pass`, data, options);
      dispatch({
        type: AUTH_CHANGE_SUCCESS,
      });
      AsyncStorage.setItem('token', res.data.token);
    } catch (err) {
      dispatch({
        type: AUTH_FAILED,
        payload: err.message,
      });
    }
  };
};
