import {
    API_AUTH_START,
    API_AUTH_SUCCESS,
    API_AUTH_FAILED,
    WALLET_USER,
    WALLET_TOP_UP,
} from "../Types";

const INITIAL_STATE = {
    id: 0,
    wallet : '',
    topup : '',
    loading : false,
    error : '',
};

export const WalletReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case API_AUTH_START :
            return {
                ...state,
                loading : true,
            };
        case API_AUTH_SUCCESS :
            return {
                ...state,
                loading : false,
            };
        case WALLET_USER :
            return {
                ...state,
                wallet : action.payload,
            };
        case WALLET_TOP_UP :
            return {
                ...state,
                topup : action.payload,
            };
        case API_AUTH_FAILED :
            return {
                ...state,
                loading : false,
                error : action.payload,
            };
        default : return state;
    };
};