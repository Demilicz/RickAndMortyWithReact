import {configureStore } from '@reduxjs/toolkit';
import favoritesSlice  from '../features/favoriteSlice';

export const store = configureStore({
  reducer: {
    favorite: favoritesSlice
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;