import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  prepareHeaders: (headers, { getState, endpoint }) => {
    const { token } = getState().auth;

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    headers.set("ngrok-skip-browser-warning", true);
    return headers;
  },
  credentials: "include", // This allows server to set cookies
});

const baseQueryWithReAuth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  const { endpoint } = api;

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReAuth,
  tagTypes: ["Profile"],
  refetchOnReconnect: true,
  keepUnusedDataFor: 45,
  endpoints: (builder) => ({}),
});
