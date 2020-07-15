import axios from 'axios';
import {ZOMATO_URL, ZOMATO_KEY} from '../../Support/API_URL';
import {
  API_AUTH_START,
  API_AUTH_FAILED,
  API_AUTH_SUCCESS,
  LOGIN,
  GET_RESTAURANT,
  GET_RESTAURANT_BY_ID,
  LOGOUT
} from '../Types';
import AsyncStorage from '@react-native-community/async-storage';

export const loginAction = (username) =>{
  return async dispatch =>{
    dispatch({
      type:API_AUTH_START
    })
    try {
      dispatch({
        type:LOGIN,
        payload:username
      })
      await AsyncStorage.setItem('token',username)
      dispatch({
        type:API_AUTH_SUCCESS
      })
    } catch (error) {
      dispatch({
        type:API_AUTH_FAILED,
        payload:error.response.data.message
      })
    }
  }
}

export const logOutAction = () =>{
  return async dispatch =>{
    dispatch({
      type:API_AUTH_START
    })
    try {
      dispatch({
        type:LOGOUT
      })
      await AsyncStorage.clear()
      dispatch({
        type:API_AUTH_SUCCESS
      })
    } catch (error) {
      dispatch({
        type:API_AUTH_FAILED,
        payload:error.response.data.message
      })
    }
  }
}

export const keepLogin = (token) =>{
  return async dispatch =>{
    dispatch({
      type:API_AUTH_START
    })
    try {
      dispatch({
        type:LOGIN,
        payload:token
      })
      dispatch({
        type:API_AUTH_SUCCESS
      })
    } catch (error) {
      dispatch({
        type:API_AUTH_FAILED,
        payload:error.response.data.message
      })
    }
  }
}
export const getRestaurant = () =>{
  return async dispatch=>{
    dispatch({
      type:API_AUTH_START
    })
    try {
      let res = await axios.get(`${ZOMATO_URL}/search?start=1&count=10&sort=rating`,{headers:{
        "user-key":ZOMATO_KEY
      }})
      dispatch({
        type:GET_RESTAURANT,
        payload:res.data.restaurants
      })
      dispatch({
        type:API_AUTH_SUCCESS
      })
    } catch (error) {
      console.log(error)
    }
  }
}
export const getRestaurantById = (id) =>{
  return async dispatch=>{
    dispatch({
      type:API_AUTH_START
    })
    try {
      let res = await axios.get(`${ZOMATO_URL}/restaurant?res_id=${id}`,{headers:{
        "user-key":ZOMATO_KEY
      }})
      dispatch({
        type:GET_RESTAURANT_BY_ID,
        payload:res.data
      })
      dispatch({
        type:API_AUTH_SUCCESS
      })
    } catch (error) {
      console.log(error)
    }
  }
}
