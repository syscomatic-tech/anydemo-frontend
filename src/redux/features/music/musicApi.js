import { apiSlice } from '@/src/redux/api/api.slice';

export const musicApiSlice = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    convertMusic: builder.mutation({
      query: (music) => ({
        url: '/music/convert',
        method: 'POST',
        body: music,
      }),
    }),
    streamMusic: builder.query({
      query: (musicId) => ({
        url: `/music/${musicId}/stream`,
      }),
    }),
  }),
});

export const { useConvertMusicMutation, useStreamMusicQuery } = musicApiSlice;
