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

  // if (result?.error?.status === 401) {
  //   console.log('sending refresh token');

  //   const { auth } = api.getState();
  //   // send refresh token to get new access token
  //   const refreshResult = await baseQuery('/auth/refresh/', api, extraOptions);

  //   if (refreshResult?.data) {
  //     const { user } = api.getState().auth;
  //     // store the new token
  //     api.dispatch(setCredentials({ ...refreshResult.data, user }));
  //     // retry the original query with new access token
  //     result = await baseQuery(args, api, extraOptions);
  //   } else {
  //     api.dispatch(logOut());
  //   }
  // }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReAuth,
  tagTypes: ["Profile"],
  refetchOnReconnect: true,
  keepUnusedDataFor: 45,
  endpoints: (builder) => ({}),
});
