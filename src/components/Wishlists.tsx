'use client';

import { useGetWishlistsQuery } from '@/lib/api/endpointsWishlist';
import WishlistItem from './WishlistItem';
import { WishlistResponse } from '@/types/types';
import EmptyWishlists from './EmptyWishlists/EmptyWishlists';

export default function Wishlists() {
  const { data, error, isLoading } = useGetWishlistsQuery(null);

  return (
    <main className="flex grow flex-col gap-2">
      <div className="flex items-center justify-center tracking-wide">
        <h2>My wish lists</h2>
      </div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data?.length ? (
        <section className="grid grid-cols-2 items-start gap-x-3 gap-y-3">
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
      ) : (
        <EmptyWishlists />
      )}
    </main>
  );
}
