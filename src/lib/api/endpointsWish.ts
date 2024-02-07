import { api } from './api';

const endpointsWish = api.injectEndpoints({
  endpoints: (builder) => ({
    getWishesByWishlist: builder.query({
      query: (wishlistId) => `wish?wishlist_id=${wishlistId}`,
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
  }),
});

export const { useGetWishesByWishlistQuery } = endpointsWish;
