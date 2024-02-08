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
  disabled: boolean;
}

export default function ButtonNIcon(props: ButtonNIconProps) {
  const { src, mode, handleClick, disabled } = props;

  // TODO: by hover on button add tip
  return (
    <button
      className="opacity-40 hover:bg-orange-900/35 hover:opacity-100 p-1 rounded-md cursor-pointer 
      disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:opacity-10"
      onClick={handleClick}
      disabled={disabled}
    >
      <Image src={src} alt={mode} />
    </button>
  );
}
