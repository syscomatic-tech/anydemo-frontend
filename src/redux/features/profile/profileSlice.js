import { createSlice } from '@reduxjs/toolkit';
import { getProfile, updateProfile } from '@/src/axios/axios';
import { authApiSlice } from '../auth/authApi';
import { profileaApiSlice } from './profile.api';

// Profile slice
const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    profile: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    //Update Profile
    builder.addCase(updateProfile.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(updateProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.profile = action.payload.user;
    });

    builder.addCase(updateProfile.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addMatcher(
      authApiSlice.endpoints.login.matchFulfilled,
      (state, action) => {
        const { user } = action.payload;

        state.profile = user;
      }
    );
    builder.addMatcher(
      profileaApiSlice.endpoints.getProfile.matchFulfilled,
      (state, action) => {
        state.profile = action.payload;
      }
    );
  },
});

export default profileSlice.reducer;

export const selectProfile = (state) => state.profile.profile;
