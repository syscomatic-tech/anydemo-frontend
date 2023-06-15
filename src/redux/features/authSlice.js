import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  loginUser,
  forgetPassword,
  authenticateWithGoogle,
  resetPassword,
} from '@/src/axios/axios';

// Auth slice
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null,
    resetPasswordStatus: null,
    forgetPasswordStatus: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Handling the registration request
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
    });

    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Handling the login request
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      console.log('action.payload', action.payload);
    });

    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Handling the logout request
    builder.addCase('auth/logout', (state) => {
      state.user = null;
    });

    // Handling the forget password request
    builder.addCase(forgetPassword.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(forgetPassword.fulfilled, (state, action) => {
      state.loading = false;
      state.forgetPasswordStatus = action.payload;
    });

    builder.addCase(forgetPassword.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Handling the reset password request
    builder.addCase(resetPassword.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(resetPassword.fulfilled, (state, action) => {
      state.loading = false;
      state.resetPasswordStatus = action.payload;
    });

    builder.addCase(resetPassword.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Handling the google authentication request
    builder.addCase(authenticateWithGoogle.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(authenticateWithGoogle.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
    });

    builder.addCase(authenticateWithGoogle.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { actions } = authSlice;
export default authSlice.reducer;
