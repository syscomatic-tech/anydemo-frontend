import { apiSlice } from '../../api/api.slice';

export const profileaApiSlice = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => ({
        url: '/auth/me',
      }),
      providesTags: () => ['Profile'],
    }),
    updateProfile: builder.mutation({
      query: (body) => ({
        url: '/user/profile',
        method: 'PUT',
        body: body,
      }),
      invalidatesTags: () => ['Profile'],
    }),
    updateProfilePicture: builder.mutation({
      query: (body) => ({
        url: '/user/profile-picture',
        method: 'PATCH',
        body: body,
      }),
      invalidatesTags: () => ['Profile'],
    }),
  }),
});

export const {
  useUpdateProfileMutation,
  useUpdateProfilePictureMutation,
  useGetProfileQuery,
} = profileaApiSlice;
