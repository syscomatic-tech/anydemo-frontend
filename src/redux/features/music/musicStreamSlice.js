import { createSlice } from "@reduxjs/toolkit";
import { streamMusic } from "@/src/axios/axios";

const musicStreamSlice = createSlice({
  name: "musicStream",
  initialState: {
    streamingMusic: null,
    currentMusic: {
      title: "",
      author: "",
    },
    loading: false,
    error: null,
  },
  reducers: {
    closePlayer: (state, action) => {
      state.streamingMusic = null;
      state.currentMusic = {
        title: "",
        author: "",
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(streamMusic.pending, (state) => {
        state.loading = true;
      })
      .addCase(streamMusic.fulfilled, (state, action) => {
        const { music, title, author } = action.payload;
        state.loading = false;
        state.streamingMusic = music;
        state.currentMusic = {
          title: title,
          author: author,
        };
      })
      .addCase(streamMusic.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectStreamingMusic = (state) => state.musicStream.streamingMusic;
export const selectStreamLoading = (state) => state.musicStream.loading;
export const selectStreamError = (state) => state.musicStream.error;
export const selectCurrentMusic = (state) => state.musicStream.currentMusic;

export const { closePlayer } = musicStreamSlice.actions;
export default musicStreamSlice.reducer;
