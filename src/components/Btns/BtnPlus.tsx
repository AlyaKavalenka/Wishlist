import Image from 'next/image';
import plusIcon from '../../../public/images/icons/plus-icon.svg';
import useModal from '@/hooks/useModal';
import { useContext, useState } from 'react';
import { ModalContentContext } from '@/contexts/ModalContentContext';
import ModalContentCreateWishlist from '../Modal/ModalContentCreateWishlist';
import ModalContentCreateWish from '../Modal/ModalContentCreateWish';

export default function BtnPlus() {
  const { toggle } = useModal();
  const { setModalContent } = useContext(ModalContentContext);
  const [isActiveClick, setActiveClick] = useState(false);
  const [mode, setMode] = useState(null);

  function handleClick() {
    setActiveClick(!isActiveClick);
    if (!isActiveClick) setMode(null);
  }

  function handleSecondBtnsClick() {
    if (isActiveClick) {
      if (mode === 'wishlist') {
        setModalContent(<ModalContentCreateWishlist />);
      } else if (mode === 'wish') {
        setModalContent(<ModalContentCreateWish />);
      }
      toggle();
    }
  }

  const secondBtnsStyle = `bg-indigo-400/40 rounded-lg shadow-md text-indigo-700 py-2 px-3 tracking-wide opacity-0 transition-opacity ${isActiveClick && 'opacity-100'}`;

  return (
    <section className="fixed pb-1 right-1 bottom-16 flex flex-col gap-3">
      <button
        type="button"
        className={secondBtnsStyle + ' self-end'}
        onClick={handleSecondBtnsClick}
      >
        Wishlist
      </button>
      <section className="flex items-center justify-between gap-3">
        <button
          type="button"
          className={secondBtnsStyle}
          onClick={handleSecondBtnsClick}
        >
          Wish
        </button>
        <button
          className={`bg-indigo-400/40 rounded-full shadow-md p-3 transition-transform ${
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
