import Axios from 'axios';
import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILED,
  UPLOAD_START,
  UPLOAD_SUCCESS,
  UPLOAD_FAILED,
  FETCH_PROFILE_FEED,
} from '../types';
import {API_URL} from '../../Support/API_URL';

export const fetchTodo = () => {
  return async dispatch => {
    dispatch({
      type: FETCH_START,
    });
    try {
      let res = await Axios.get(`${API_URL}/todo/get-all`);
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
  return async dispatch => {
    dispatch({
      type: UPLOAD_START,
    });
    try {
      const headers = {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      };
      const formData = new FormData();
      const image = {
        uri: postPhoto.patch,
        type: 'image.jpeg',
        name: 'post.jpg',
      };
      // formData.append('image', image);
      formData.append('image', postPhoto);
      formData.append('todo', caption);
      await Axios.post(`${API_URL}/todo/add-todo/${id}`, formData, headers);
      dispatch({
        type: UPLOAD_SUCCESS,
      });
    } catch (err) {
      dispatch({
        type: UPLOAD_FAILED,
        payload: err.message,
      });
    }
  };
};

export const loadProfileFeed = id => {
  return async dispatch => {
    dispatch({
      type: FETCH_START,
    });
    try {
      let res = await Axios.get(`${API_URL}/todo/get-todo/${id}`);
      // console.log(res.data.dataList);
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
