import { configureStore } from '@reduxjs/toolkit';
import rocketSlice from './rockets/rocketSlice';
import dragonSlice from './dragons/dragonsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketSlice,
    dragons: dragonSlice,

  },
});
export default store;
