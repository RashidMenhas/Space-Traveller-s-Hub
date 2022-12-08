import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import fetchdata from '../../rocket-api/rocket-api';

export const GET_ROCKETS = createAction('GET_ROCKETS');

export const rocketReducer = (state = [], action) => {
  if (action.type === GET_ROCKETS.type) {
    return action.payload;
  }
  return state;
};

export const getRockets = createAsyncThunk(
  'rockets/getRockets',
  async (_, thunkApi) => {
    const rockets = await fetchdata();
    thunkApi.dispatch(GET_ROCKETS(rockets));
  },
);
