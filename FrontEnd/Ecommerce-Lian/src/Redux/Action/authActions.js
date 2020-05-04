import Axios from 'axios';
import { API_URL } from '../../Support/API_URL';

// export const Login = (data) => {
//     return{
//         type : 'LOGIN',
//         payload : data
//     }
// }

export const Login = (username, password) => {
    return(dispatch) => {
        Axios.get(`${API_URL}/users?username=${username}&password=${password}`)
        .then((res) => {
            console.log(res)
            localStorage.setItem('token', JSON.stringify({ username, password }))
            dispatch({
                type : 'LOGIN',
                payload : res.data[0]
            })
        })
        .catch((err) => {
            console.log(err)
            dispatch({
                type : 'LOGOUT'
            })
        })
    }
}

export const keepLogin = (token) => {
    return(dispatch) => {
        token = JSON.parse(token)
        let { username, password } = token;
        Axios.get(`${API_URL}/users?username=${username}&password=${password}`)
        .then((res) => {
            dispatch({
                type: 'LOGIN',
                payload: res.data[0]
            })
            dispatch({
                type : 'FETCH_TRX'
            })
        })
        .catch((err) => {
            console.log(err)
            dispatch({
                type: 'LOGOUT'
            })
        })
    }
}

export const Logout = () => {
    return{
        type : 'LOGOUT'
    }
}

export const LoginContoh = (data) => {
    return (dispatch) => {
        Axios.get(`${API_URL}/users`)
        .then((res) => {
            console.log(res.data)
            // [{},{},{}]
            dispatch({
                type : 'GET_ALL_USERS',
                payload : res.data // [{},{},{}]
            })
            dispatch({
                type : 'FETCH_TRX_SUCCESS',
                payload : []
            })
        })
        .catch((err) => {
            dispatch({
                type : 'GET_ALL_FAILED',
                payload : err
            })
        })
    }
}