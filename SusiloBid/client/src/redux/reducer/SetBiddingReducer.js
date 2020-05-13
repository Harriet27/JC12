import {
    API_START,
    GET_SUBMISSION_AUCT,
    API_SUCCESS, 
    API_FAILED 
} from '../Types';

const INITIAL_STATE = {
    submission: [],
    count: 0,
    error: '',
    loading: false
};

export const setBidding = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case API_START :
            return {
                ...state,
                loading: true
            };
        case API_SUCCESS :
            return {
                ...state,
                loading: false
            };
        case API_FAILED :
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case GET_SUBMISSION_AUCT :
            return {
                ...state,
                submission: [...action.payload],
                count: action.count
            };
        default : return state;
    };
};