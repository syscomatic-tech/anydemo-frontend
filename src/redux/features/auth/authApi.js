import { apiSlice } from '@/src/redux/api/api.slice';

export const authApiSlice = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    OauthSuccess: builder.mutation({
      query: () => ({
        url: '/auth/success',
        method: 'POST',
        body: {},
      }),
    }),

    register: builder.mutation({
      query: (credentials) => ({
        url: '/auth/register',
        method: 'POST',
        body: credentials,
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    changePassword: builder.mutation({
      query: (body) => ({
        url: '/auth/change-password',
        method: 'PATCH',
        body: body,
      }),
    }),
    verifyEmailAddress: builder.mutation({
      query: (body) => ({
        url: '/auth/verify-email',
        method: 'POST',
        body: body,
      }),
    }),
    resetPassword: builder.mutation({
      query: (body) => ({
        url: '/auth/reset-password',
        method: 'POST',
        body: body,
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useChangePasswordMutation,
  useVerifyEmailAddressMutation,
  useResetPasswordMutation,
  useOauthSuccessMutation,
} = authApiSlice;
