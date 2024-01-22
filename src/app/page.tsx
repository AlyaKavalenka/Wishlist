import BlockWrapper from '@/components/BlockWrapper';
import Wishlists from '@/components/Wishlists';

export default function Home() {
  return (
    <main className="flex items-center">
      <BlockWrapper>
        <Wishlists />
      </BlockWrapper>
    </main>
  );
}
