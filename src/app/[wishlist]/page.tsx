'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import BlockWrapper from '@/components/BlockWrapper';
import arrowIcon from '../../../public/images/icons/arrow-icon.svg';
import ButtonNIcon from '@/components/BtnNIcon';
import WishlistControllers from '@/components/WishListControllers';
import WishItem from '@/components/WishItem';
import BtnPlus from '@/components/BtnPlus';
import { useGetWishesByWishlistQuery } from '@/lib/api/endpointsWish';
import { Wish } from '@/types/types';

export default function WishlistPage({
  params,
}: {
  params: { wishlist: string };
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const wishlistId = +decodeURIComponent(searchParams.get('id') || '');

  const { data, error, isLoading } = useGetWishesByWishlistQuery(wishlistId);

  return (
    <section className="relative">
      <BlockWrapper>
        <section className="flex gap-1 items-center justify-between">
          <ButtonNIcon
            src={arrowIcon}
            mode="return"
            handleClick={() => router.back()}
            disabled={false}
          />
          <h2 className="text-xl font-medium">
            {decodeURIComponent(params.wishlist)}
          </h2>
          <WishlistControllers wishlistId={wishlistId} />
        </section>
      </BlockWrapper>
      <BlockWrapper>
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : !data.length ? (
          'empty'
        ) : (
          data.map((wish: Wish) => <WishItem wish={wish} key={wish.id} />)
        )}
      </BlockWrapper>
      <BtnPlus mode="wish" />
    </section>
  );
}
