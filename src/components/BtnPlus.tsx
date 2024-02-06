import Image from 'next/image';
import plusIcon from '../../public/images/icons/plus-icon.svg';
import useModal from '@/hooks/useModal';
import { useContext } from 'react';
import { ModalContentContext } from '@/contexts/ModalContentContext';
import ModalContentCreate from './Modal/ModalContentCreate';

interface BtnPlusProps {
  mode: 'wishlist' | 'wish';
}

export default function BtnPlus(props: BtnPlusProps) {
  const { mode } = props;
  const { toggle } = useModal();
  const { setModalContent } = useContext(ModalContentContext);

  function handleClick() {
    toggle();
    setModalContent(<ModalContentCreate />);
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
