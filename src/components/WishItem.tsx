import { Wish } from '@/types/types';
import Image from 'next/image';
import crossIcon from '../../public/images/icons/cross-icon.svg';
import editIcon from '../../public/images/icons/edit-icon.svg';
import BtnNIcon from './BtnNIcon';

interface WishItemProps {
  wish: Wish;
}

export default function WishItem(props: WishItemProps) {
  const { wish } = props;

  const photoSmallSize = 60;

  return (
    <section
      key={wish.id}
      className="flex flex-col gap-2 my-2 last:border-b-0 bg-orange-950/30 rounded-md p-4 group"
    >
      <article className="flex gap-1 justify-between items-center">
        <span className="text-lg">{wish.name}</span>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity delay-300 ease-in-out">
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
      <article
        className="text-sm text-orange-50/80 flex
      flex-col gap-1"
      >
        <span>{wish.description}</span>
        <a
          href={wish.link}
          target="_blank"
          className="text-sm underline decoration-solid"
        >
          {wish.link}
        </a>
        <article className="flex gap-2 py-2">
          {wish.photos.map((photo) => (
            <button key={photo}>
              <Image
                src={photo}
                alt="wish small photo"
                width={photoSmallSize}
                height={photoSmallSize}
                unoptimized
                className="h-full object-cover rounded-md"
              />
            </button>
          ))}
        </article>
      </article>
    </section>
  );
}
