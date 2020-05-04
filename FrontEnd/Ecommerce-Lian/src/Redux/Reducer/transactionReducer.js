const INITIAL_STATE = {
    data : [],
    loading: false,
    error : '',
    boolean : false
}

export const transactionReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'FETCH_TRX_START' : 
            return{
                ...state,
                loading: true
            }
        case 'FETCH_TRX_SUCCESS' :
            return{
                ...state,
                data : action.payload,
                loading: false,
                boolean : true
            }
        case 'FETCH_TRX_FAILED' : 
            return{
                ...state,
                loading: false,
                error : action.payload
            }
        default : 
            return state
    }
}