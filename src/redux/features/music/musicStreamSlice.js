import { createSlice } from "@reduxjs/toolkit";
import { streamMusic } from "@/src/axios/axios";
import { musicApiSlice } from "./musicApi";

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
    builder.addMatcher(
      musicApiSlice.endpoints.streamMusic.matchFulfilled,
      (state, action) => {
        state.streamingMusic = action.payload;
        console.log(action.payload);
      }
    );
  },
});

export const selectStreamingMusic = (state) => state.musicStream.streamingMusic;
export const selectStreamLoading = (state) => state.musicStream.loading;
export const selectStreamError = (state) => state.musicStream.error;
export const selectCurrentMusic = (state) => state.musicStream.currentMusic;

export const { closePlayer } = musicStreamSlice.actions;
export default musicStreamSlice.reducer;
