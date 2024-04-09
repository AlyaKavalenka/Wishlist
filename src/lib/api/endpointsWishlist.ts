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
      providesTags: (res) =>
        res
          ? [
              ...res.map(({ id }: { id: number }) => ({
                type: 'Wishlists',
                id: id,
              })),
              { type: 'Wishlists', id: 'LIST' },
            ]
          : [{ type: 'Wishlists', id: 'LIST' }],
    }),
    getWishlists: builder.query({
      query: () => 'wishlist',
      providesTags: (res) =>
        res
          ? [
              ...res.map(({ id }: { id: number }) => ({
                type: 'Wishlists',
                id: id,
              })),
              { type: 'Wishlists', id: 'LIST' },
            ]
          : [{ type: 'Wishlists', id: 'LIST' }],
    }),
    deleteWishlist: builder.mutation({
      query: (id) => ({
        url: `wishlist/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (_res, _err, id) => [{ type: 'Wishlists', id: id }],
    }),
  }),
  overrideExisting: false,
});

export const {
  useCreateWishlistMutation,
  useGetWishlistsByUserQuery,
  useDeleteWishlistMutation,
  useGetWishlistsQuery,
} = endpointsWishlist;
