import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  alertMessageContent: '',
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setAlertMessageContent: (state, action) => {
      state.alertMessageContent = action.payload;
    },

    addToCart: (state, action) => {
      const existing = state.products.find(
        (product) => product._id === action.payload._id
      );

      if (existing) {
        existing.quantity = existing.quantity + 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload._id
      );
    },
  },
});

export const { addToCart, removeFromCart, setAlertMessageContent } = cartSlice.actions;

export default cartSlice.reducer;
