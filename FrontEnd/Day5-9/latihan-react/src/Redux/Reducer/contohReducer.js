const INITIAL_STATE = {
    username : '',
    bolean : false
}

export const contohReducer = ( state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'LOGIN' :
            return{
                username : action.payload
            }
        case 'LOGOUT' :
            return INITIAL_STATE
        default :
            return state
    }
}