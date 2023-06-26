import { apiSlice } from "@/src/redux/api/api.slice";

export const musicApiSlice = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    convertMusic: builder.mutation({
      query: (music) => ({
        url: "/music/convert",
        method: "POST",
        body: music,
      }),
    }),
    isolateMusic: builder.mutation({
      query: (music) => ({
        url: "/music/isolate",
        method: "POST",
        body: music,
      }),
    }),
    streamMusic: builder.query({
      query: (songFile) => ({
        url: `/music/${songFile}/stream`,
      }),
    }),
    getDownloadedMusic: builder.query({
      query: () => ({
        url: "/music/user/download",
      }),
    }),
    getConvertedMusic: builder.query({
      query: () => ({
        url: "/music/user/",
      }),
    }),
  }),
});

export const {
  useConvertMusicMutation,
  useStreamMusicQuery,
  useGetDownloadedMusicQuery,
  useIsolateMusicMutation,
  useGetConvertedMusicQuery,
} = musicApiSlice;
