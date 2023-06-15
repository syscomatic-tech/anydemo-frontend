import { createSlice } from '@reduxjs/toolkit';
import { downloadMusic, downloadedMusicList } from '@/src/axios/axios';

const musicDownloadSlice = createSlice({
  name: 'musicDownload',
  initialState: {
    downloadedMusic: null,
    loading: false,
    error: null,
    downloadedMusic_List: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      //download music
      .addCase(downloadMusic.pending, (state) => {
        state.loading = true;
      })
      .addCase(downloadMusic.fulfilled, (state, action) => {
        state.loading = false;
        state.downloadedMusic = action.payload;
      })
      .addCase(downloadMusic.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      //downloaded music list
      .addCase(downloadedMusicList.pending, (state) => {
        state.loading = true;
      })
      .addCase(downloadedMusicList.fulfilled, (state, action) => {
        state.loading = false;
        state.downloadedMusic_List = action.payload;
      })
      .addCase(downloadedMusicList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectDownloadedMusic = (state) =>
  state.musicDownload.downloadedMusic;
export const selectDownloadLoading = (state) => state.musicDownload.loading;
export const selectDownloadError = (state) => state.musicDownload.error;

export default musicDownloadSlice.reducer;
