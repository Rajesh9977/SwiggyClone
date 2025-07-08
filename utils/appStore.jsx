import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; // Update the path accordingly

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
