import {createSlice} from '@reduxjs/toolkit';

const {actions, reducer} = createSlice({
  name: 'Cart',
  initialState: {
    cart: [],
  },
  reducers: {
    AddCart: (state, action) => {
      state.cart = action.payload;
    },
    EmptyCart: state => {
      state.cart = [];
    },
  },
});

export default reducer;
export const {AddCart, EmptyCart} = actions;

export const AddToCartAction = data => {
  return () => {
    AddCart(data);
  };
};

export const EmptyCartAction = () => {
  return dispatch => {
    dispatch(EmptyCart());
  };
};
