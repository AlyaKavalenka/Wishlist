import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import Link from 'next/link';

interface FooterLinkProps {
  imgSrc: string | StaticImport;
  alt: string;
  linkHref: string;
  isActive: boolean;
}

export default function FooterLink(props: FooterLinkProps) {
  const { imgSrc, alt, linkHref, isActive } = props;

  return (
    <div className="flex h-full flex-grow justify-center">
      <Link
        href={linkHref}
        className={`flex grow items-center justify-center ${isActive && 'rounded-b-xl bg-gradient-to-b from-white to-indigo-200'}`}
      >
        <Image src={imgSrc} alt={alt} />
      </Link>
    </div>
  );
}
