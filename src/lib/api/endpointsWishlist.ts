import { WishlistResponse } from '@/types/types';
import { api } from './api';

export interface createWishlistBodyReq {
  title: string;
  event_date?: Date;
  wishlist_img?: string;
}

const endpointsWishlist = api.injectEndpoints({
  endpoints: (builder) => ({
    createWishlist: builder.mutation({
      query: (body: createWishlistBodyReq) => ({
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
    getWishlists: builder.query<WishlistResponse[], null>({
      query: () => 'wishlist',
      providesTags: (result) => {
        if (result) {
          return [
            ...result.map(({ wishlist_id }: WishlistResponse) => ({
              type: 'Wishlists' as const,
              id: wishlist_id,
            })),
            { type: 'Wishlists', id: 'LIST' },
          ];
        } else {
          return [{ type: 'Wishlists', id: 'LIST' }];
        }
      },
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
