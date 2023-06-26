import { apiSlice } from "@/src/redux/api/api.slice";

export const contactApiSlice = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    contact: builder.mutation({
      query: (data) => ({
        url: "/contact/send-contact-message",
        method: "POST",
        body: data,
      }),
    }),
    join: builder.mutation({
      query: (data) => ({
        url: "/contact/join",
        method: "POST",
        body: data,
      }),
    }),
    newsletter: builder.mutation({
      query: (data) => ({
        url: "/newsletter/subscribe",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useContactMutation, useJoinMutation, useNewsletterMutation } =
  contactApiSlice;
