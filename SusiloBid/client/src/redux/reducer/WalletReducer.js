import {
    API_AUTH_START,
    API_AUTH_SUCCESS,
    API_AUTH_FAILED,
    WALLET_UPDATE
} from "../Types";

const INITIAL_STATE = {
    wallet : '',
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
        case WALLET_UPDATE :
            return {
                ...state,
                wallet : action.payload,
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