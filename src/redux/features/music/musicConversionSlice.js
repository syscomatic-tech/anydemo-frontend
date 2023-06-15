import { createSlice } from '@reduxjs/toolkit';
import { convertMusic } from '@/src/axios/axios';

const musicConversionSlice = createSlice({
  name: 'musicConversion',
  initialState: {
    convertedMusic: null,
    loading: false,
    error: null,
  },
  reducers: {},
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
  },
});

export const selectConvertedMusic = (state) =>
  state.musicConversion.convertedMusic;
export const selectConversionLoading = (state) => state.musicConversion.loading;
export const selectConversionError = (state) => state.musicConversion.error;

export default musicConversionSlice.reducer;
