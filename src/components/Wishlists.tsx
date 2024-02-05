'use client';

import { useGetWishlistsByUserQuery } from '@/services/wishlist';
import WishlistItem from './WishlistItem';

export default function Wishlists() {
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
