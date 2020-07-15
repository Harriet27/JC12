import {
  FETCH_SUCCESS,
  FETCH_START,
  FETCH_FAILED,
  UPLOAD_SUCCESS,
  UPLOAD_START,
  UPLOAD_FAILED,
  FETCH_PROFILE_FEED,
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
