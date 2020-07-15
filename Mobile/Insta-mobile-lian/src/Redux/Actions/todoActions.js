import axios from 'axios';
import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILED,
  UPLOAD_START,
  UPLOAD_SUCCESS,
  UPLOAD_FAILED,
  FETCH_PROFILE_FEED,
  INIT_DATALIST,
} from '../types';
import {API_URL} from '../../Support/API_URL';
import {Platform} from 'react-native';

export const fetchTodo = () => {
  return async dispatch => {
    dispatch({
      type: FETCH_START,
    });
    try {
      let res = await axios.get(`${API_URL}/todo/get-all`);
      dispatch({
        type: FETCH_SUCCESS,
        payload: res.data.data,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: FETCH_FAILED,
        payload: err.message,
      });
    }
  };
};

export const uploadAction = ({postPhoto, caption, id}) => {
  return dispatch => {
    dispatch({
      type: UPLOAD_START,
    });
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
    console.log(image);
    data.append('image', image);
    data.append('todo', caption);
    axios
      .post(`${API_URL}/todo/add-todo/${id}`, data, options)
      .then(res => {
        console.log(res.data);
        dispatch({
          type: UPLOAD_SUCCESS,
        });
      })
      .catch(err => {
        console.log(err);
        dispatch({
          type: UPLOAD_FAILED,
          error: err.message,
        });
      });
  };
};

export const loadProfileFeed = id => {
  return async dispatch => {
    dispatch({
      type: FETCH_START,
    });
    try {
      let res = await axios.get(`${API_URL}/todo/get-todo/${id}`);
      dispatch({
        type: FETCH_PROFILE_FEED,
        payload: res.data.dataList,
      });
    } catch (err) {
      dispatch({
        type: FETCH_FAILED,
        payload: err.message,
      });
    }
  };
};

export const feedCleanUp = () => {
  return {
    type: INIT_DATALIST,
  };
};
