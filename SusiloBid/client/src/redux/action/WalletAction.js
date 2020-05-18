import Axios from 'axios';
import { API_URL } from '../../support/API_URL';
import { API_AUTH_START ,API_AUTH_FAILED, API_AUTH_SUCCESS, WALLET_UPDATE } from '../Types';

export const GetBalance = id => {
    return async dispatch => {
        dispatch({
            type : API_AUTH_START,
        });
        try {
            let res = await Axios.get(`${API_URL}/wallet/get-balance/${id}`);
            console.log(res.data);
            dispatch({
                type : WALLET_UPDATE,
                payload : res.data,
            });
            dispatch({
                type : API_AUTH_SUCCESS,
            });
        } catch (err) {
            dispatch({
                type : API_AUTH_FAILED,
                payload : err.response,
            });
        }
    };
};

export const TopUpBalance = id => {
    return async dispatch => {
        dispatch({
            type: API_AUTH_START,
        });
        try {
            let res = await Axios.post(`${API_URL}/wallet/top-up-balance/${id}`);
            console.log(res.data);
        } catch (err) {
            dispatch({
                type: API_AUTH_FAILED,
                payload: err.response,
            });
        }
    };
};
