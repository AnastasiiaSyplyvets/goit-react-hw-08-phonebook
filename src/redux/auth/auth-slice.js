import { createSlice } from '@reduxjs/toolkit';
import { register } from '../auth/auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder.addCase(register.fulfilled, (state, action) => {}),
});

export default authSlice.reducer;
