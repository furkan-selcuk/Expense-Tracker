import { configureStore } from '@reduxjs/toolkit';
import transactionReducer from './slices/transactionSlice';
import userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    transaction: transactionReducer,
    user: userReducer,
  },
});
