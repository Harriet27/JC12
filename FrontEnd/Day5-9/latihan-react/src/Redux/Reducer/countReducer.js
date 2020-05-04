const INITIAL_STATE = {
    hitung : 0
}

export const countReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'COUNT' :
            return {
                hitung : action.payload
            }
        default : 
            return state
    }
}