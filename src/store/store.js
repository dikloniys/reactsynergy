import { configureStore } from '@reduxjs/toolkit';
import userReducer from './hoocks/useSlice';

const store = configureStore({
  reducer: {
    userReducer
  }
});

export default store;