import { combineReducers } from 'redux';
import { countReducer } from './countReducer';
import { contohReducer } from './contohReducer';

export default combineReducers({
    contoh : contohReducer,
    count : countReducer
})