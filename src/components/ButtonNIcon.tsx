import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

interface ButtonNIconProps {
  src: string | StaticImport;
  mode: 'edit' | 'delete' | 'share';
}

export default function ButtonNIcon(props: ButtonNIconProps) {
  const { src, mode } = props;

  return (
    <button className="hover:bg-orange-900/35 p-1 rounded-md">
      <Image src={src} alt={mode} />
    </button>
  );
}
