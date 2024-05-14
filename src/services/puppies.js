import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const puppyBowlApi = createApi({
    reducerPath: 'puppyBowlApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players' }),
    endpoints: (builder) => ({
      getAllPuppies: builder.query({
        query: () => `/`,
      }),
    }),
  })

  export const { useGetAllPuppiesQuery } = puppyBowlApi