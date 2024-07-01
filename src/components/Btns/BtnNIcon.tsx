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
      className="cursor-pointer rounded-md p-1 opacity-40 hover:bg-orange-900/35 hover:opacity-100 disabled:cursor-not-allowed disabled:opacity-10 disabled:hover:bg-transparent"
      onClick={handleClick}
      disabled={disabled}
    >
      <Image src={src} alt={mode} />
    </button>
  );
}
