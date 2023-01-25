import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const countApi = createApi({
  reducerPath: 'countApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  tagTypes:['Count'],
  endpoints: (builder) => ({
    getCount:builder.query({
      query: () => 'api/count',
      providesTags:['Count']
    }),
    setCount:builder.mutation({
      query: (value)=>{
        return {
          url:'api/count',
          method:'PATCH',
          body:{value}
        }
      },
      invalidatesTags:['Count']
    })
  })
});
export const {useGetCountQuery, useSetCountMutation} = countApi;