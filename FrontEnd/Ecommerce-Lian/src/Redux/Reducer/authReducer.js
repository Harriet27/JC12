const INITIAL_STATE = {
    id : null,
    username: '',
    email: '',
    role: 'user',
    logged : false,
    users : [],
    error : ''
}

export const authReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'LOGIN' : 
            return {
                id: action.payload.id,
                username : action.payload.username,
                email : action.payload.email,
                role : action.payload.role,
                logged : true
            }
        case 'LOGOUT' : 
            return INITIAL_STATE
        case 'LOGIN_CONTOH' :
            return {
                username : action.payload.username
            }
        case 'GET_ALL_USERS' : 
            return{
                users : action.payload
            }
        case 'GET_ALL_FAILED' : 
            return {
                error : action.payload
            }
        default : 
            return state
    }
}