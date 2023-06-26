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
});

export default profileSlice.reducer;

export const selectProfile = (state) => state.profile.profile;
