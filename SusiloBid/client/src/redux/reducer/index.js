import { combineReducers } from 'redux';
import { authReducer } from './AuthReducer';
import { ModalReducer } from './ModalReducer';
import { userReducer } from './userReducer';
import { sellerReducer } from './SellerReducer';
import { checkStatusReducer } from './CheckStatusReducer';
import { setBidding } from './SetBiddingReducer';

export default combineReducers({
    auth : authReducer,
    modal : ModalReducer,
    user : userReducer,
    seller : sellerReducer,
    status : checkStatusReducer,
    setBidding
});