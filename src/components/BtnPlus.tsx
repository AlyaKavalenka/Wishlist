import Image from 'next/image';
import plusIcon from '../../public/images/icons/plus-icon.svg';

interface BtnPlusProps {
  mode: 'wishlist' | 'wish';
}

export default function BtnPlus(props: BtnPlusProps) {
  const { mode } = props;
  return (
    <button className="fixed right-5 bottom-5 bg-orange-600/70 hover:bg-orange-600 text-orange-50 text-center p-5 rounded-full transition-hover">
      <Image src={plusIcon} alt={`add new ${mode}`} />
    </button>
  );
}
