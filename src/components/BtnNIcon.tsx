import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

interface ButtonNIconProps {
  src: string | StaticImport;
  mode:
    | 'edit_wishlist'
    | 'delete_wishlist'
    | 'share'
    | 'return'
    | 'delete_wish'
    | 'edit_wish';
  handleClick: () => void;
}

export default function ButtonNIcon(props: ButtonNIconProps) {
  const { src, mode, handleClick } = props;

  // TODO: by hover on button add tip
  return (
    <button
      className="hover:bg-orange-900/35 p-1 rounded-md"
      onClick={handleClick}
    >
      <Image src={src} alt={mode} />
    </button>
  );
}
