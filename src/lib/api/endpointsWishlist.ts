import { api } from './api';

const endpointsWishlist = api.injectEndpoints({
  endpoints: (builder) => ({
    createWishlist: builder.mutation({
      query: (body: { title: string; user_id: number }) => ({
        url: `wishlist`,
        method: 'POST ',
        body,
      }),
    }),
    getWishlistsByUser: builder.query({
      query: (userId) => `wishlist?id=${userId}`,
    }),
  }),
  overrideExisting: false,
});

export const { useCreateWishlistMutation, useGetWishlistsByUserQuery } =
  endpointsWishlist;
