// Actoion Creator => function yg mengreturn sebuah obj namanya action

export const Login = (username) => {
    return{
        type : 'LOGIN',
        payload : username
    }
}

export const Logout = () => {
    return{
        type: 'LOGOUT'
    }
}