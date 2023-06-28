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
    addVoice: builder.mutation({
      query: (music) => ({
        url: "/voice",
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
    deleteDownloadedMusic: builder.mutation({
      query: (musicId) => ({
        url: `/music/download/${musicId}`,
        method: "DELETE",
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
  useAddVoiceMutation,
  useGetDownloadedMusicQuery,
  useIsolateMusicMutation,
  useDeleteDownloadedMusicMutation,
  useGetConvertedMusicQuery,
} = musicApiSlice;
