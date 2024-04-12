'use client';

import { useGetWishlistsQuery } from '@/lib/api/endpointsWishlist';
import WishlistItem from './WishlistItem';
import { WishlistResponse } from '@/types/types';

export default function Wishlists() {
  const { data, error, isLoading } = useGetWishlistsQuery(null);

  return (
    <main className="flex flex-col gap-2 grow">
      <div className="flex justify-center items-center tracking-wide">
        <h2>My wish lists</h2>
      </div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : (
        <section className="grid grid-cols-2 items-start gap-y-3 gap-x-3">
          {data
            .slice()
            .sort((a: WishlistResponse, b: WishlistResponse) => {
              return (
                new Date(b.update_at).getTime() -
                new Date(a.update_at).getTime()
              );
            })
            .map((item: WishlistResponse) => (
              <WishlistItem key={item.wishlist_id} wishlist={item} />
            ))}
        </section>
      )}
    </main>
  );
}
