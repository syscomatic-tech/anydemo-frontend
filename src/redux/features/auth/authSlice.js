'use client';

import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  loginUser,
  forgetPassword,
  authenticateWithGoogle,
  resetPassword,
} from '@/src/axios/axios';
import { authApiSlice } from './authApi';
import { getFromLocalStorage } from '@/src/utils/helpers';

// Auth slice

const authInitialState = {
  user: getFromLocalStorage('user')
    ? JSON.parse(getFromLocalStorage('user'))
    : null,
  token: getFromLocalStorage('user') ?? null,
  loading: false,
  error: null,
  resetPasswordStatus: null,
  forgetPasswordStatus: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    logout: (state, action) => {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('user');
      state.user = null;
      state.token = null;
    },
  },
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
      state.token = null;
      localStorage.removeItem('user');
      localStorage.removeItem('accessToken');
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
    builder.addMatcher(
      authApiSlice.endpoints.register.matchFulfilled,
      (state, action) => {
        const { user } = action.payload;
        localStorage.setItem('email', user.email);
      }
    );
    builder.addMatcher(
      authApiSlice.endpoints.login.matchFulfilled,
      (state, action) => {
        const { user, accessToken } = action.payload;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('user', JSON.stringify(user));
        state.user = user;
        state.token = accessToken;
      }
    );
  },
});
export const { actions } = authSlice;
export const { logout } = actions;
export default authSlice.reducer;
