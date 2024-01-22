import Link from 'next/link';
import WishlistControllers from './WishListControllers';

interface WishlistItemProps {
  wishlist: string;
  wishlistId: number;
}

export default function WishlistItem(props: WishlistItemProps) {
  const { wishlist, wishlistId } = props;

  return (
    <section className="flex justify-between gap-1 items-center">
      <Link
        href={{
          pathname: `/${wishlist}`,
          query: { id: `${wishlistId}` },
        }}
        className="grow text-start hover:bg-orange-900/35 py-3 pl-3 rounded-md"
      >
        {wishlist}
      </Link>
      <WishlistControllers />
    </section>
  );
}
