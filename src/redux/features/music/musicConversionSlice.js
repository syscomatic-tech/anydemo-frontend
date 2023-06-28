import { createSlice } from "@reduxjs/toolkit";
import { convertMusic } from "@/src/axios/axios";
import { musicApiSlice } from "./musicApi";

const musicConversionSlice = createSlice({
  name: "musicConversion",
  initialState: {
    convertedMusic: null,
    loading: false,
    error: null,
    artist: null,
    voice: null,
  },
  reducers: {
    setArtist: (state, action) => {
      state.artist = action.payload;
    },
    setVoice: (state, action) => {
      state.voice = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(convertMusic.pending, (state) => {
        state.loading = true;
      })
      .addCase(convertMusic.fulfilled, (state, action) => {
        state.loading = false;
        state.convertedMusic = action.payload;
      })
      .addCase(convertMusic.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    builder.addMatcher(
      musicApiSlice.endpoints.convertMusic.matchFulfilled,
      (state, action) => {
        state.voice = null;
        state.artist = null;
      }
    );
  },
});

export const { setArtist, setVoice, setForm } = musicConversionSlice.actions;
export const selectConvertedMusic = (state) =>
  state.musicConversion.convertedMusic;
export const selectConversionLoading = (state) => state.musicConversion.loading;
export const selectConversionError = (state) => state.musicConversion.error;
export const selectConversionData = (state) => {
  return {
    artist: state.musicConversion.artist,
    voice: state.musicConversion.voice,
  };
};

export default musicConversionSlice.reducer;
