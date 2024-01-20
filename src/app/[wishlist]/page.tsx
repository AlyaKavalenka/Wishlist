'use client';

import { useSearchParams } from 'next/navigation';

export default function WishlistPage({
  params,
}: {
  params: { wishlist: string };
}) {
  const searchParams = useSearchParams();
  const wishlistId = +decodeURIComponent(searchParams.get('id') || '');

  return (
    <div>
      <h1>
        Wishlist: {decodeURIComponent(params.wishlist)} {wishlistId}
      </h1>
    </div>
  );
}
