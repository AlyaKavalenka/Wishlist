'use client';

import { useSearchParams } from 'next/navigation';
import mockData from '@/assets/data/wishListData.json';
import BlockWrapper from '@/components/BlockWrapper';
import arrowIcon from '../../../public/images/icons/arrow-icon.svg';
import ButtonNIcon from '@/components/ButtonNIcon';
import WishlistControllers from '@/components/WishListControllers';
import WishItem from '@/components/WishItem';

export default function WishlistPage({
  params,
}: {
  params: { wishlist: string };
}) {
  const searchParams = useSearchParams();
  const wishlistId = +decodeURIComponent(searchParams.get('id') || '');
  // TODO: wishes by id with server. Send server wish id and get wishes list
  const wishesById = mockData.users[0].wishlists.find(
    (item) => item.id === wishlistId,
  );

  return (
    <section>
      <BlockWrapper>
        <section className="flex gap-1 items-center justify-between">
          <ButtonNIcon src={arrowIcon} mode="return" />
          <h2 className="text-xl font-medium">
            {decodeURIComponent(params.wishlist)}
          </h2>
          <WishlistControllers />
        </section>
      </BlockWrapper>
      <BlockWrapper>
        {wishesById
          ? wishesById.wishes.map((wish) => (
              <WishItem wish={wish} key={wish.id} />
            ))
          : 'empty'}
      </BlockWrapper>
    </section>
  );
}
