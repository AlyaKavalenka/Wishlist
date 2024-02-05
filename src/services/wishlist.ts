// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const server_url = 'http://localhost:8080';

// Define a service using a base URL and expected endpoints
export const wishlistApi = createApi({
  reducerPath: 'wishlistApi',
  baseQuery: fetchBaseQuery({ baseUrl: server_url + '/api' }),
  endpoints: (builder) => ({
    getWishlistsByUser: builder.query({
      query: (userId) => `wishlist?id=${userId}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetWishlistsByUserQuery } = wishlistApi;
