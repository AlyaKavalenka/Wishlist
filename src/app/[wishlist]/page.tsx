'use client';

import { usePathname, useSearchParams } from 'next/navigation';
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
import leftArrow from '../../../public/images/icons/left-arrow.svg';
import pen from '../../../public/images/icons/pen.svg';
import defaultWishlistPhoto from '../../../public/images/img/default-wishlist-img.png';
import Image from 'next/image';
import Link from 'next/link';

export default function WishlistPage() {
  const searchParams = useSearchParams();

  const { toggle } = useModal();
  const isOpen = useAppSelector((state) => state.IsOpenModal.value);
  const { modalContent } = useContext(ModalContentContext);
  const pathname = usePathname();

  const wishlistId = decodeURIComponent(searchParams.get('id') || '');
  const wishlistImage = searchParams.get('img');
  const wishlistName = decodeURIComponent(pathname.replace('/', ''));

  const { data, error, isLoading } = useGetWishesByWishlistQuery(wishlistId);

  return (
    <section className="relative flex flex-grow flex-col">
      <header className="relative overflow-clip">
        <section className="flex h-full items-center gap-2 p-3 py-4 backdrop-blur">
          <Link href={'/'} className="rounded-full bg-white/70 p-2">
            <Image
              src={leftArrow}
              alt="back to wishlists"
              width={22}
              height={22}
            />
          </Link>
          <h2 className="grow text-center font-medium tracking-wider text-stone-700">
            {wishlistName}
          </h2>
          <button className="rounded-full bg-white/70 p-2" type="button">
            <Image src={pen} alt="edit wishlists" width={22} height={22} />
          </button>
        </section>
        <Image
          src={!!wishlistImage ? wishlistImage : defaultWishlistPhoto}
          alt="wishlist background"
          className="absolute -bottom-2/4 -top-2/4 -z-10 w-full"
        />
      </header>
      <BlockWrapper>
        <main className="flex grow flex-col gap-2">
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
