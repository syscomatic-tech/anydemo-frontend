import { createSlice } from "@reduxjs/toolkit";
import { fetchUserMusic } from "@/src/axios/axios";

const userMusicSlice = createSlice({
  name: "userMusic",
  initialState: {
    music: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserMusic.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserMusic.fulfilled, (state, action) => {
        state.loading = false;
        state.music = action.payload;
      })
      .addCase(fetchUserMusic.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectUserMusic = (state) => state.userMusic.music;
export const selectUserMusicLoading = (state) => state.userMusic.loading;
export const selectUserMusicError = (state) => state.userMusic.error;

export default userMusicSlice.reducer;
