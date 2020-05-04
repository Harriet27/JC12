export const Add = (count) => {
    return{
        type : 'COUNT',
        payload : count + 1
    }
}

export const Min = (count) => {
    return{
        type : 'COUNT',
        payload : count - 1
    }
}