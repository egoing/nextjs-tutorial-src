import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const countApi = createApi({
  reducerPath: 'countApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    getCount:builder.query({
      query: () => 'api/count'
    })
  })
});
export const {useGetCountQuery} = countApi;