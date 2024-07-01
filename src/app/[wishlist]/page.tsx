'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import BlockWrapper from '@/components/BlockWrapper';
import arrowIcon from '../../../public/images/icons/arrow-icon.svg';
import ButtonNIcon from '@/components/Btns/BtnNIcon';
import WishlistControllers from '@/components/WishListControllers';
import WishItem from '@/components/WishItem';
import BtnPlus from '@/components/Btns/BtnPlus';
import { useGetWishesByWishlistQuery } from '@/lib/api/endpointsWish';
import { Wish } from '@/types/types';
import Modal from '@/components/Modal/Modal';
import useModal from '@/hooks/useModal';
import { useAppSelector } from '@/lib/hooks';
import { useContext } from 'react';
import { ModalContentContext } from '@/contexts/ModalContentContext';

export default function WishlistPage({
  params,
}: {
  params: { wishlist: string };
}) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const { toggle } = useModal();
  const isOpen = useAppSelector((state) => state.IsOpenModal.value);
  const { modalContent } = useContext(ModalContentContext);

  const wishlistId = decodeURIComponent(searchParams.get('id') || '');

  const { data, error, isLoading } = useGetWishesByWishlistQuery(wishlistId);

  return (
    <section className="relative flex flex-grow flex-col">
      <BlockWrapper>
        <section className="flex items-center justify-between gap-1">
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
      <BtnPlus />
      <Modal toggle={toggle} isOpen={isOpen}>
        {modalContent}
      </Modal>
    </section>
  );
}
