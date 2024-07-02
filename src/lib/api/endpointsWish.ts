import { Wish } from '@/types/types';
import { api } from './api';

const endpointsWish = api.injectEndpoints({
  endpoints: (builder) => ({
    getWishesByWishlist: builder.query({
      query: (wishlistId) => `wish/wishlist/${wishlistId}`,
      providesTags: (res) =>
        res
          ? [
              ...res.map(({ id }: { id: number }) => ({
                type: 'Wishes',
                id: id,
              })),
              { type: 'Wishes', id: 'LIST' },
            ]
          : [{ type: 'Wishes', id: 'LIST' }],
    }),
    createWish: builder.mutation({
      query: (body: Wish) => ({
        url: 'wish',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Wishes', id: 'LIST' }],
    }),
  }),
});

export const { useGetWishesByWishlistQuery, useCreateWishMutation } =
  endpointsWish;
