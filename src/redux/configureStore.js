import { configureStore } from '@reduxjs/toolkit';
import dragonSlice from './dragons/dragonsSlice';

const store = configureStore({
  reducer: {
    dragons: dragonSlice,
  },
});

export default store;
