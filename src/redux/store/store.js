import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../rootReducer/rootReducer';
import { apiSlice } from '../api/api.slice';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});
