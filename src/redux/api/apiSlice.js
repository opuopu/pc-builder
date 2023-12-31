import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pc-builder-final.vercel.app/api",
  }),
  tagTypes: ["post"],
  endpoints: (builder) => ({}),
});
