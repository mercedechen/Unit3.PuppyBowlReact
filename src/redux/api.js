import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-PT-SF-B/";

console.log(API_URL);

export const playersApi = createApi({
  reducerPath: "playersApi",
  baseQuery: fetchBaseQuery({API_URL}),
  endpoints: (builder) => ({
    getPlayers: builder.query({
      query: () => `players`,
    }),
  }),
});

export const {useGetPlayersQuery} = playersApi;