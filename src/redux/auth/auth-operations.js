import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    console.log(credentials);
    console.log('Request headers:', {
      'Content-Type': 'application/json',
    });
    const data = await axios.post('/users/signup', credentials);
    console.log({ data });
    return data;
  } catch (error) {
    console.log(error);
  }
});
