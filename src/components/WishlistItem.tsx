import Link from 'next/link';
import { WishlistResponse } from '@/types/types';
import defaultWishlistPhoto from '../../public/images/img/default-wishlist-img.png';
import Image from 'next/image';

interface WishlistItemProps {
  wishlist: WishlistResponse;
}

export default function WishlistItem(props: WishlistItemProps) {
  const { wishlist } = props;

  const { event_date, title, wishlist_id, wishlist_img } = wishlist;

  return (
    <section className="rounded-md flex flex-col gap-1 border border-black/15 shadow-md h-full max-h-44 w-full">
      <Link
        href={{
          pathname: `/${title}`,
          query: { id: `${wishlist_id}` },
        }}
        className="flex flex-col gap-1 rounded-t-md"
      >
        <div className="rounded-t-md shadow-sm">
          <Image
            src={wishlist_img || defaultWishlistPhoto}
            alt="wishlist"
            className="object-contain rounded-t-md"
          />
        </div>
        <div className="flex flex-col items-center grow pb-1">
          <div className="grow">
            <span>{title}</span>
          </div>
          <div className="flex justify-end items-end">
            <span className="italic text-xs opacity-60">
              {event_date
                ? new Date(event_date).toLocaleDateString('en-EN', {
                    year: 'numeric',
                    day: 'numeric',
                    month: 'short',
                    hour: 'numeric',
                    minute: '2-digit',
                  })
                : ''}
            </span>
          </div>
        </div>
      </Link>
    </section>
  );
}
