import Axios from "axios"
import { API_URL } from "../../Support/API_URL"

export const fetchProduct = () => {
    return async (dispatch) => {
        try{
            dispatch({
                type : 'FETCH_DATA_START'
            })
            let res  = await Axios.get(`${API_URL}/products`)
            dispatch({
                type : 'FETCH_DATA_SUCCESS',
                payload: res.data,
                brandArr : res.data.map((val) => val.brand)
            })
        }
        catch(err){
            dispatch({
                type: 'FETCH_DATA_FAILED',
                payload: err
            })
        }
    }
}

export const fetchProductById = (id) => {
    return async (dispatch) => {
        try{
            dispatch({
                type : 'FETCH_DATA_START'
            })
            let res = await Axios.get(`${API_URL}/products/${id}`)
            console.log(res.data)
            dispatch({
                type : 'FETCH_DATA_BY_ID',
                payload : res.data
            })
        }
        catch(err){
            dispatch({
                type : 'FETCH_DATA_FAILED',
                payload: err
            })
        }
    }
}