import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  login,
  logOut,
  refreshCurrentUser,
} from '../auth/auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.data.user;
        state.token = action.payload.data.token;
        state.isLoggedIn = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.data.user;
        state.token = action.payload.data.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = '';
        state.token = '';
        state.isLoggedIn = false;
      })
      .addCase(refreshCurrentUser.fulfilled, (state, action) => {
        state.auth.user = action.payload;
        state.isLoggedIn = true;
      }),
});

export default authSlice.reducer;
