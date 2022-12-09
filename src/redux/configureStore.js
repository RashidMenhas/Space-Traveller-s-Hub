import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missions/mission';

const store = configureStore({
  reducer: {
    missions: missionReducer,
  },
});

export default store;
