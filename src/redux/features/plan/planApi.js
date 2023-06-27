import { apiSlice } from "@/src/redux/api/api.slice";

export const planApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getAllPlan: builder.query({
      query: (data) => ({
        url: "/plan",
      }),
    }),
  }),
});

export const { useGetAllPlanQuery } = planApi;
