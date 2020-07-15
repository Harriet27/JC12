import axios from 'axios';
import {API_URL} from '../../Support/API_URL';
import {
  AUTH_START,
  AUTH_FAILED,
  AUTH_SUCCESS,
  AUTH_LOG_OUT,
  INIT_DATALIST,
  AUTH_CHANGE_SUCCESS,
  AUTH_DP_SUCCESS,
  AUTH_INIT_ERROR,
} from '../types';
import AsyncStorage from '@react-native-community/async-storage';
import {Platform} from 'react-native';
// import {AsyncStorage} from 'react-native';

export const loginAction = data => {
  return async dispatch => {
    dispatch({
      type: AUTH_START,
    });
    try {
      let res = await axios.post(`${API_URL}/users/login`, data);
      let {
        id,
        username,
        roleId,
        email,
        password,
        verified,
        token,
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
      console.log(err.message);
      dispatch({
        type: AUTH_FAILED,
        payload: err.response.status,
      });
    }
  };
};

export const registerAction = data => {
  return async dispatch => {
    dispatch({
      type: AUTH_START,
    });
    try {
      let res = await axios.post(`${API_URL}/users/register`, data);
      let {
        id,
        username,
        password,
        email,
        roleId,
        verified,
        token,
        displayPicture,
      } = res.data.data;
      dispatch({
        type: AUTH_SUCCESS,
        payload: {
          id,
          username,
          password,
          email,
          roleId,
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

export const KeepLogin = token => {
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
      const res = await axios.post(`${API_URL}/users/keep-login`, {}, headers);
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
          password,
          email,
          roleId,
          verified,
          displayPicture,
        },
      });
    } catch (err) {
      dispatch({
        type: AUTH_FAILED,
        payload: err.response.data.message,
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
      let res = await axios.post(`${API_URL}/users/change-pass`, data, options);
      dispatch({
        type: AUTH_CHANGE_SUCCESS,
      });
      // console.log(res.data);
      await AsyncStorage.setItem('token', res.data.token);
    } catch (err) {
      dispatch({
        type: AUTH_FAILED,
        payload: err.message,
      });
    }
  };
};

export const ChangeDPAction = ({postPhoto, id}) => {
  return async dispatch => {
    dispatch({
      type: AUTH_START,
    });
    try {
      const options = {
        headers: {
          'Content-Type': 'application/form-data',
        },
      };
      const data = new FormData();
      const uri =
        Platform.OS === 'android'
          ? postPhoto.path
          : postPhoto.replace('file://', '');
      const image = {
        uri,
        type: 'image/jpeg',
        name: 'photo.jpg',
      };
      data.append('image', image);
      let response = await axios.post(
        `${API_URL}/users/change-display/${id}`,
        data,
        options,
      );
      let {token, imagePath} = response.data;
      await AsyncStorage.setItem('token', token);
      dispatch({
        type: AUTH_DP_SUCCESS,
        payload: imagePath,
      });
    } catch (err) {
      dispatch({
        type: AUTH_FAILED,
        payload: err.message,
      });
    }
  };
};

export const InitError = () => {
  return {
    type: AUTH_INIT_ERROR,
  };
};
