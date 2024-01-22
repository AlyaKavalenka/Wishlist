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
}

export default function ButtonNIcon(props: ButtonNIconProps) {
  const { src, mode } = props;

  // TODO: by hover on button add tip
  return (
    <button className="hover:bg-orange-900/35 p-1 rounded-md">
      <Image src={src} alt={mode} />
    </button>
  );
}
