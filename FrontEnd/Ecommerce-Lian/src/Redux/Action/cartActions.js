import Axios from "axios"
import { API_URL } from "../../Support/API_URL"

export const fetchCart = (id) => {
    return async (dispatch) => {
        try{
            dispatch({
                type: 'API_START'
            })
            let res = await Axios.get(`${API_URL}/cart?userId=${id}`)
            // console.log(res.data)
            dispatch({
                type: 'FETCH_CART',
                payload : res.data
            })
            dispatch({
                type: 'API_SUCCESS'
            })
        }
        catch(err){
            dispatch({
                type : 'API_FAILED',
                payload: err
            })
        }
    }
}

export const addToCartAction = (data) => {
    return async (dispatch) => {
        try{
            dispatch({
                type : 'API_START'
            })
            let res = await Axios.post(`${API_URL}/cart`, data)
            console.log(res)
            dispatch({
                type : 'API_SUCCESS'
            })
        }
        catch(err){
            dispatch({
                type : 'API_FAILED',
                payload : err
            })
        }

    }
}

export const editCart = (data, id, userId) => {
    return async (dispatch) => {
        try{
            dispatch({
                type : 'API_START'
            })
            await Axios.patch(`${API_URL}/cart/${id}`, data)
            let fetch = await Axios.get(`${API_URL}/cart?userId=${userId}`)
            dispatch({
                type: 'FETCH_CART',
                payload : fetch.data
            })
        }catch(err){
            dispatch({
                type : 'API_FAILED',
                payload : err
            })
        }
    }

}

export const deleteCart = (id, userId) => {
    return async (dispatch) => {
        try{
            dispatch({
                type : 'API_START'
            })
            await Axios.delete(`${API_URL}/cart/${id}`)
            let fetch = await Axios.get(`${API_URL}/cart?userId=${userId}`)
            dispatch({
                type : 'FETCH_CART',
                payload: fetch.data
            })
        }
        catch(err){
            dispatch({
                type : 'API_FAILED',
                payload: err
            })
        }
    }
}

export const checkoutAction = (data, userId) => {
    return async (dispatch) => {
        try{
            dispatch({
                type: 'API_START'
            })
            let res = await Axios.get(`${API_URL}/cart?userId=${userId}`)
            res.data.forEach (async (val) => {
                await Axios.delete(`${API_URL}/cart/${val.id}`)
            });
            dispatch({
                type : 'CLEAR_CART'
            })
            await Axios.post(`${API_URL}/transactions`, data)
            dispatch({
                type : 'API_SUCCESS'
            })
        }
        catch(err){
            dispatch({
                type : 'API_FAILED',
                payload: err
            })
        }
    }
}