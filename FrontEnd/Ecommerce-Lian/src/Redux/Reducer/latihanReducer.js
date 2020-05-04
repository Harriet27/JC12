const INITIAL_STATE = {
    satuNama : ''
}

export const latihanReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'REDUCER_SATU':
            return{
                satuName : action.payload
            }
        default :
            return state
    }
}