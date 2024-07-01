import { Wish } from '@/types/types';
import Image from 'next/image';
import crossIcon from '../../public/images/icons/cross-icon.svg';
import editIcon from '../../public/images/icons/edit-icon.svg';
import BtnNIcon from './Btns/BtnNIcon';

interface WishItemProps {
  wish: Wish;
}

export default function WishItem(props: WishItemProps) {
  const { wish } = props;

  const photoSmallSize = 60;

  return (
    <section
      key={wish.id}
      className="group my-2 flex flex-col gap-2 rounded-md bg-orange-950/30 p-4 last:border-b-0"
    >
      <article className="flex items-center justify-between gap-1">
        <span className="text-lg">{wish.name}</span>
        <div className="opacity-0 transition-opacity delay-300 ease-in-out group-hover:opacity-100">
          <BtnNIcon
            src={editIcon}
            mode="edit_wish"
            handleClick={() => {}}
            disabled
          />
          <BtnNIcon
            src={crossIcon}
            mode="delete_wish"
            handleClick={() => {}}
            disabled
          />
        </div>
      </article>
      <article className="flex flex-col gap-1 text-sm text-orange-50/80">
        <span>{wish.description}</span>
        <section className="flex flex-col gap-0.5">
          {wish.links.map((link) => (
            <a
              href={link}
              target="_blank"
              className="text-sm underline decoration-solid"
              key={link}
            >
              {link}
            </a>
          ))}
        </section>
        <article className="flex gap-2 py-2">
          {wish.photos.map((photo) => (
            <button key={photo}>
              <Image
                src={photo}
                alt="wish small photo"
                width={photoSmallSize}
                height={photoSmallSize}
                unoptimized
                className="h-full rounded-md object-cover"
              />
            </button>
          ))}
        </article>
      </article>
    </section>
  );
}
