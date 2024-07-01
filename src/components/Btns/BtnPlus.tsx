import Image from 'next/image';
import plusIcon from '../../../public/images/icons/plus-icon.svg';
import useModal from '@/hooks/useModal';
import { useContext, useState } from 'react';
import { ModalContentContext } from '@/contexts/ModalContentContext';
import ModalContentCreateWishlist from '../Modal/ModalContentCreateWishlist';
import ModalContentCreateWish from '../Modal/ModalContentCreateWish';
import { useAppSelector } from '@/lib/hooks';

export default function BtnPlus() {
  const { toggle } = useModal();
  const { setModalContent } = useContext(ModalContentContext);
  const [isActiveClick, setActiveClick] = useState(false);
  const isOpen = useAppSelector((state) => state.IsOpenModal.value);

  function handleClick() {
    setActiveClick(!isActiveClick);
  }

  const secondBtnsStyle = `bg-indigo-400/40 rounded-lg shadow-md text-indigo-700 py-2 px-3 tracking-wide opacity-0 transition-opacity ${isActiveClick && 'opacity-100'}`;

  return (
    <section
      className={`fixed bottom-16 right-1 flex flex-col gap-3 pb-1 ${isOpen && 'blur-sm'}`}
    >
      <button
        type="button"
        className={secondBtnsStyle + ' self-end'}
        onClick={() => {
          setModalContent(<ModalContentCreateWishlist />);
          setActiveClick(false);
          toggle();
        }}
      >
        Wishlist
      </button>
      <section className="flex items-center justify-between gap-3">
        <button
          type="button"
          className={secondBtnsStyle}
          onClick={() => {
            setModalContent(<ModalContentCreateWish />);
            setActiveClick(false);
            toggle();
          }}
        >
          Wish
        </button>
        <button
          className={`rounded-full bg-indigo-400/40 p-3 shadow-md transition-transform ${
            isActiveClick && '-rotate-45'
          }`}
          onClick={handleClick}
        >
          <Image src={plusIcon} alt={`add`} className="w-7" />
        </button>
      </section>
    </section>
  );
}
