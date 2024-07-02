import Image from 'next/image';
import arrowRight from '../../../public/images/icons/arrow-right.svg';
import Link from 'next/link';

interface BreadcrumbsProps {
  currentPage: string;
}

export default function Breadcrumbs(props: BreadcrumbsProps) {
  const { currentPage } = props;

  return (
    <nav className="flex items-center gap-2">
      <Link
        href="/"
        className="text-sm font-medium tracking-wide text-stone-700 transition-colors hover:text-indigo-500"
      >
        Wish lists
      </Link>
      <Image src={arrowRight} alt="breadcrumb arrow" />
      <span className="text-sm font-medium tracking-wide text-stone-500">
        {currentPage}
      </span>
    </nav>
  );
}
