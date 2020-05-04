import { combineReducers } from 'redux'; 
import { authReducer } from './authReducer';
import { productReducer } from './productReducer';
import { cartReducer } from './cartReducer';
import { transactionReducer } from './transactionReducer';
import { latihanReducer } from './latihanReducer';

export default combineReducers({
    auth : authReducer,
    product: productReducer,
    cart : cartReducer,
    trx : transactionReducer,
    satu : latihanReducer
})