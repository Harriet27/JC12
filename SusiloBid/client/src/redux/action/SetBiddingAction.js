import Axios from 'axios';
import { API_URL } from '../../support/API_URL';
import {
    API_START,
    GET_SUBMISSION_AUCT,
    API_SUCCESS, 
    API_FAILED 
} from '../Types';

export const GetSubmissionAuct = () => {
    return async dispatch => {
        try {
            dispatch({
                type: API_START
            });
            let res = await Axios.get(`${API_URL}/set-bidding-room/get-submission-auct`);
            // console.log(res.data);
            dispatch({
                type: GET_SUBMISSION_AUCT,
                payload: res.data
            });
            dispatch({
                type: API_SUCCESS
            });
        } catch(err) {
            dispatch({
                type: API_FAILED,
                payload: err
            });
        };
    };
};