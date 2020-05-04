const INITIAL_STATE = {
    productList : [],
    brands : [],
    loading : false,
    error : '',
    productById : {}
}

export const productReducer = (state = INITIAL_STATE, action) => {
    // console.log(action)
    switch(action.type){
        case 'FETCH_DATA_START' : 
            return {
                ...state,
                loading : true
            }
        case 'FETCH_DATA_SUCCESS' : 
            return {
                ...state,
                productList: action.payload,
                brands : action.brandArr,
                loading: false
            }
        case 'FETCH_DATA_BY_ID' : 
            return{
                ...state,
                productById : action.payload,
                loading: false
            }
        case 'FETCH_DATA_FAILED' : 
            return {
                ...state,
                loading : false,
                error : action.payload
            }
        default :
            return state
    }
}