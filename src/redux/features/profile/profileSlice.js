import { createSlice } from "@reduxjs/toolkit";
import { getProfile, updateProfile } from "@/src/axios/axios";
import { authApiSlice } from "../auth/authApi";
import { profileaApiSlice } from "./profile.api";

// Profile slice
const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profile: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
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
