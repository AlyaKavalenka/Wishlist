'use client';

import { useGetWishlistsByUserQuery } from '@/lib/api/endpointsWishlist';
import WishlistItem from './WishlistItem';

export default function Wishlists() {
  // TODO: change user_id (3)
  const { data, error, isLoading } = useGetWishlistsByUserQuery(3);

  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : (
        data.map((item: { id: number; user_id: number; title: string }) => (
          <WishlistItem
            key={item.id}
            wishlist={item.title}
            wishlistId={item.id}
          />
        ))
      )}
    </>
  );
}
