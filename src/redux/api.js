// // createApi generate React hooks for each of the defined query & mutation endpoints
// // fetchBaseQuery aims to simplify HTTP requests
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

// // puppy bowl api
const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-PT-SF-B/";

export const playersApi = createApi({
  reducerPath: "playersApi",
  baseQuery: fetchBaseQuery({API_URL}),
  endpoints: (builder) => ({
    getPlayers: builder.query({
      query: () => `players`,
      providesTags: ['Player']
    }),
    addPlayer: builder.mutation({
      query: (body) => ({
        url: `players`,
        method: 'POST',
        body
      }),
      invalidatesTags: ['Player']
    }),
    deletePlayer: builder.mutation({
      query: (id) => ({
        url: `players/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Player']
    }),
  }),
});

export const {useGetPlayersQuery, useAddPlayerMutation, useDeletePlayerMutation} = playersApi;