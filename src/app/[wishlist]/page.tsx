'use client';

import { useSearchParams } from 'next/navigation';
import BlockWrapper from '@/components/BlockWrapper';
import WishItem from '@/components/WishItem';
import BtnPlus from '@/components/Btns/BtnPlus';
import { useGetWishesByWishlistQuery } from '@/lib/api/endpointsWish';
import { Wish } from '@/types/types';
import Modal from '@/components/Modal/Modal';
import useModal from '@/hooks/useModal';
import { useAppSelector } from '@/lib/hooks';
import { useContext } from 'react';
import { ModalContentContext } from '@/contexts/ModalContentContext';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';

export default function WishlistPage({
  params,
}: {
  params: { wishlist: string };
}) {
  const searchParams = useSearchParams();

  const { toggle } = useModal();
  const isOpen = useAppSelector((state) => state.IsOpenModal.value);
  const { modalContent } = useContext(ModalContentContext);

  const wishlistId = decodeURIComponent(searchParams.get('id') || '');

  const { data, error, isLoading } = useGetWishesByWishlistQuery(wishlistId);

  return (
    <section className="relative flex flex-grow flex-col">
      <BlockWrapper>
        <main className="flex grow flex-col gap-2">
          <Breadcrumbs currentPage={decodeURIComponent(params.wishlist)} />

          <section className="flex flex-col gap-2">
            {error ? (
              <>Oh no, there was an error</>
            ) : isLoading ? (
              <>Loading...</>
            ) : !data.length ? (
              'empty'
            ) : (
              <section className="flex flex-col gap-3">
                {data.map((wish: Wish) => (
                  <WishItem wish={wish} key={wish.id} />
                ))}
              </section>
            )}
          </section>
        </main>
      </BlockWrapper>
      <BtnPlus />
      <Modal toggle={toggle} isOpen={isOpen}>
        {modalContent}
      </Modal>
    </section>
  );
}
