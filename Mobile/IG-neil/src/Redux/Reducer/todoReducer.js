import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILED,
  UPLOAD_START,
  UPLOAD_SUCCESS,
  FETCH_PROFILE_FEED,
  UPLOAD_FAILED,
  INIT_DATALIST,
} from '../types';

const INITIAL_STATE = {
  profileDataList: [],
  dataList: [],
  error: '',
  loading: false,
};

export const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        dataList: action.payload,
      };
    case FETCH_PROFILE_FEED:
      return {
        ...state,
        loading: false,
        profileDataList: action.payload,
      };
    case FETCH_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPLOAD_START:
      return {
        ...state,
        loading: true,
      };
    case UPLOAD_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case UPLOAD_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case INIT_DATALIST:
      return INITIAL_STATE;
    default:
      return state;
  }
};
