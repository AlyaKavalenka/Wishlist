'use client';

import bunniesImg from '../../public/images/img/bunnies-img.png';
import magnifyingGlassIcon from '../../public/images/icons/magnifying-glass-icon.svg';
import giftIcon from '../../public/images/icons/gift-icon.svg';
import FooterLink from './FooterLink';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer className="sticky bottom-0 z-10 flex h-14 min-h-14 justify-between bg-white/90">
      <FooterLink
        imgSrc={bunniesImg}
        alt="friends bunnies"
        linkHref="/friends"
        isActive={pathname === '/friends'}
      />
      <FooterLink
        imgSrc={giftIcon}
        alt="gift"
        linkHref="/"
        isActive={pathname === '/'}
      />
      <FooterLink
        imgSrc={magnifyingGlassIcon}
        alt="magnifying glass"
        linkHref="/search"
        isActive={pathname === '/search'}
      />
    </footer>
  );
}
