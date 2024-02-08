import Image from 'next/image';
import plusIcon from '../../../public/images/icons/plus-icon.svg';
import useModal from '@/hooks/useModal';
import { useContext } from 'react';
import { ModalContentContext } from '@/contexts/ModalContentContext';
import ModalContentCreateWishlist from '../Modal/ModalContentCreateWishlist';
import ModalContentCreateWish from '../Modal/ModalContentCreateWish';

interface BtnPlusProps {
  mode: 'wishlist' | 'wish';
  wishlist_id?: number;
}

export default function BtnPlus(props: BtnPlusProps) {
  const { mode, wishlist_id } = props;
  const { toggle } = useModal();
  const { setModalContent } = useContext(ModalContentContext);

  function handleClick() {
    if (mode === 'wishlist') {
      setModalContent(<ModalContentCreateWishlist />);
    } else {
      setModalContent(<ModalContentCreateWish wishlist_id={wishlist_id} />);
    }
    toggle();
  }

  return (
    <button
      className="fixed right-5 bottom-5 bg-orange-600/70 hover:bg-orange-600 text-orange-50 text-center p-5 rounded-full transition-hover"
      onClick={handleClick}
    >
      <Image src={plusIcon} alt={`add new ${mode}`} />
    </button>
  );
}
