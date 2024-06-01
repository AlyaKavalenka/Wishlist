import Image from 'next/image';
import EmptyImg from '../../../public/images/png/empty-image.png';

export default function EmptyWishlists() {
  return (
    <section className="flex flex-col justify-between grow items-center">
      <article className="flex flex-col items-center gap-2">
        <div>
          <Image src={EmptyImg} alt="no wishlist" />
        </div>
        <span className="font-thin">
          You haven&rsquo;t created wish lists yet
        </span>
      </article>
      <span className="text-indigo-500 font-extralight animate-bounce mb-4">
        Create wish or wish list 👉
      </span>
    </section>
  );
}
