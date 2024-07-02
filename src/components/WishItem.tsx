import { Wish } from '@/types/types';
import Image from 'next/image';

interface WishItemProps {
  wish: Wish;
}

export default function WishItem(props: WishItemProps) {
  const { wish } = props;

  return (
    <section className="flex flex-col gap-2 rounded-xl bg-gradient-to-b from-white to-indigo-200 p-3 shadow-lg shadow-indigo-200">
      <section className="flex gap-2">
        {!!wish.photos.length && (
          <article className="flex h-full max-w-[30%] flex-wrap">
            {wish.photos.map((photo) => (
              <button key={photo} className="flex-[50%]">
                <Image
                  src={photo}
                  alt="wish small photo"
                  width={0}
                  height={0}
                  unoptimized
                  sizes="auto"
                  className="inline-block h-full w-full rounded object-cover align-middle"
                />
              </button>
            ))}
          </article>
        )}
        <article className="flex flex-col gap-1">
          <span>{wish.name}</span>
          <span className="text-sm font-extralight text-stone-700">
            {wish.description}
          </span>
        </article>
      </section>
      {!!wish.links.length && (
        <section className="flex flex-col gap-1">
          {wish.links.map((link) => (
            <a
              href={link}
              target="_blank"
              className="line-clamp-1 break-all text-sm text-blue-500 underline decoration-solid"
              key={link}
            >
              {link}
            </a>
          ))}
        </section>
      )}
    </section>
  );
}
