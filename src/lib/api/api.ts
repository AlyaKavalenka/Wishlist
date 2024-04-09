// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const server_url = process.env.NEXT_PUBLIC_SERVER_URL;

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: server_url }),
  tagTypes: ['Wishlists', 'Wishes'],
  endpoints: () => ({}),
});
