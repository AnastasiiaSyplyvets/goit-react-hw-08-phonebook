import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    console.log(credentials);

    const data = await axios.post('/users/signup', credentials);
    console.log(data);
    token.set(data.data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const login = createAsyncThunk('auth/login', async credentials => {
  try {
    const data = await axios.post('/users/login', credentials);
    token.set(data.data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {}
});

export const refreshCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === '') {
      console.log('tokena net');
      return thunkAPI.rejectWithValue(5);
    }
    token.set(persistedToken);
    try {
      const response = await axios.get('/users/current');
      if (response.data === null) {
        return;
      }
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
