'use client';

import BlockWrapper from '@/components/BlockWrapper';
import BtnPlus from '@/components/BtnPlus';
import Modal from '@/components/Modal/Modal';
import Wishlists from '@/components/Wishlists';
import { ModalContentContext } from '@/contexts/ModalContentContext';
import useModal from '@/hooks/useModal';
import { useAppSelector } from '@/lib/hooks';
import { useContext } from 'react';

export default function Home() {
  const isOpen = useAppSelector((state) => state.IsOpenModal.value);
  const { modalContent } = useContext(ModalContentContext);

  const { toggle } = useModal();

  return (
    <main className="flex items-start relative flex-grow">
      <BlockWrapper>
        <Wishlists />
      </BlockWrapper>
      <BtnPlus mode="wishlist" />
      <Modal isOpen={isOpen} toggle={toggle}>
        {modalContent}
      </Modal>
    </main>
  );
}
