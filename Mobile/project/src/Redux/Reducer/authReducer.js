import {AUTH_SUCCESS, AUTH_FAILED, AUTH_START, AUTH_LOG_OUT} from '../types';

const INITIAL_STATE = {
  id: 0,
  username: '',
  roleId: 0,
  email: '',
  password: '',
  verified: '',
  displayPicture: '',
  loading: false,
  error: '',
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_START:
      return {
        ...state,
        loading: true,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
    case AUTH_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case AUTH_LOG_OUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};
