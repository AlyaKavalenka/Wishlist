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

  const date = (event_date: Date) => {
    const newDate = new Date(event_date);
    let options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      day: 'numeric',
      month: 'short',
      timeZone: 'UTC',
    };

    if (newDate.getUTCHours() !== 0 && newDate.getUTCMinutes() !== 0) {
      options.hour = 'numeric';
      options.minute = '2-digit';
    }

    return newDate.toLocaleDateString('en', options);
  };

  const query: { id: string; img?: string } = {
    id: `${wishlist_id}`,
  };

  if (wishlist_img) query.img = wishlist_img;

  return (
    <section className="flex h-full max-h-44 w-full flex-col gap-1 rounded-md border border-black/15 shadow-md">
      <Link
        href={{
          pathname: `/${title}`,
          query,
        }}
        className="flex flex-col gap-1 rounded-t-md"
      >
        <div className="rounded-t-md shadow-sm">
          <Image
            src={wishlist_img || defaultWishlistPhoto}
            alt="wishlist"
            className="rounded-t-md object-contain"
            priority={false}
            placeholder="blur"
          />
        </div>
        <div className="flex grow flex-col items-center pb-1">
          <div className="grow">
            <span>{title}</span>
          </div>
          <div className="flex items-end justify-end">
            <span className="text-xs italic opacity-60">
              {event_date ? date(event_date) : ''}
            </span>
          </div>
        </div>
      </Link>
    </section>
  );
}
