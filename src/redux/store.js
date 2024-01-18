import {configureStore} from '@reduxjs/toolkit';
import {playersApi} from './api.js';

const store = configureStore({
  reducer: {
    [playersApi.reducerPath]: playersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(playersApi.middleware),
});

export default store;