import { apiSlice } from "@/src/redux/api/api.slice";

export const voiceApiSlice = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getAllVoice: builder.query({
      query: () => ({
        url: "/voice",
      }),
    }),
    getAllDemo: builder.query({
      query: () => ({
        url: "/music/latest",
      }),
    }),
  }),
});

export const { useGetAllVoiceQuery, useGetAllDemoQuery } = voiceApiSlice;
