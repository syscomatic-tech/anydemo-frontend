import { createSlice } from "@reduxjs/toolkit";
import { customModel } from "@/src/axios/axios";
import { musicApiSlice } from "./musicApi";

const customMusicSlice = createSlice({
  name: "musicConversion",
  initialState: {
    customMusic: null,
    loading: false,
    error: null,
    form: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(customModel.pending, (state) => {
        state.loading = true;
      })
      .addCase(customModel.fulfilled, (state, action) => {
        state.loading = false;
        state.customMusic = action.payload;
      })
      .addCase(customModel.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    builder.addMatcher(
      musicApiSlice.endpoints.convertMusic.matchFulfilled,
      (state, action) => {
        state.customMusic = action.payload;
      }
    );
  },
});

export const selectConvertedMusic = (state) =>
  state.musicConversion.convertedMusic;
export const selectConversionLoading = (state) => state.musicConversion.loading;
export const selectConversionError = (state) => state.musicConversion.error;
export const selectConversionData = (state) =>
  state.musicConversion.customMusic;

export default customMusicSlice.reducer;
