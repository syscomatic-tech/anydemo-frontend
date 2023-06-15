import { createSlice } from '@reduxjs/toolkit';
import { verifyEmail } from '../../axios/axios';

const emailVerificationSlice = createSlice({
  name: 'emailVerification',
  initialState: {
    verificationStatus: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(verifyEmail.pending, (state) => {
        state.loading = true;
      })
      .addCase(verifyEmail.fulfilled, (state, action) => {
        state.loading = false;
        state.verificationStatus = action.payload;
      })
      .addCase(verifyEmail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectVerificationStatus = (state) =>
  state.emailVerification.verificationStatus;
export const selectVerificationLoading = (state) =>
  state.emailVerification.loading;
export const selectVerificationError = (state) => state.emailVerification.error;

export default emailVerificationSlice.reducer;
