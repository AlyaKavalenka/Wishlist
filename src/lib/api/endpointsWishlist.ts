import { api } from './api';

const endpointsWishlist = api.injectEndpoints({
  endpoints: (builder) => ({
    createWishlist: builder.mutation({
      query: (body: { title: string; user_id: number }) => ({
        url: `wishlist`,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Wishlists', id: 'LIST' }],
    }),
    getWishlistsByUser: builder.query({
      query: (userId) => `wishlist?id=${userId}`,
      providesTags: [{ type: 'Wishlists', id: 'LIST' }],
    }),
  }),
  overrideExisting: false,
});

export const { useCreateWishlistMutation, useGetWishlistsByUserQuery } =
  endpointsWishlist;
