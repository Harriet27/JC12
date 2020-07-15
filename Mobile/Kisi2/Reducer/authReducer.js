import {
    API_AUTH_FAILED,
    API_AUTH_START,
    API_AUTH_SUCCESS,
    LOGIN,
    GET_RESTAURANT,
    GET_RESTAURANT_BY_ID,
    LOGOUT
  } from '../Types';
  
  const INITIAL_STATE = {
    username:'',
    error:'',
    loading:false,
    restaurantList:[],
    restaurantDetail:[]
  };
  
  export const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case API_AUTH_START:
        return {
          ...state,
          loading: true,
        };
      case API_AUTH_SUCCESS:
        return {
          ...state,
          ...action.payload,
          loading: false,
        };
      case API_AUTH_FAILED:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case LOGIN:
        return {
          ...state,
          loading: false,
          username:action.payload,
        };
      case LOGOUT:
        return {
          INITIAL_STATE,
          loading: false,
          
        };
      case GET_RESTAURANT:
        return {
          ...state,
          loading: false,
          restaurantList:action.payload,
        };
      case GET_RESTAURANT_BY_ID:
        return {
          ...state,
          loading: false,
          restaurantDetail:action.payload,
        };
      default:
        return state;
    }
  };
  