const INTIAL_STATE = {
    cart : [],
    loading: false,
    error : ''
}

export const cartReducer = (state = INTIAL_STATE, action) => {
    switch(action.type){
        case 'API_START' : 
            return {
                ...state,
                loading: true
            }
        case 'API_SUCCESS' : 
            return{
                ...state,
                loading : false,
            }
        case 'API_FAILED' : 
            return{
                ...state,
                loading : false,
                error : action.payload
            }
        case 'FETCH_CART' : 
            return{
                ...state,
                cart : action.payload
            }
        case 'CLEAR_CART' :
            return{
                ...state,
                cart : []
            }
        default :
            return state
    }
}