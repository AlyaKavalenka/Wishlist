import BlockWrapper from '@/components/BlockWrapper';
import BtnPlus from '@/components/BtnPlus';
import Wishlists from '@/components/Wishlists';

export default function Home() {
  return (
    <main className="flex items-center">
      <BlockWrapper>
        <Wishlists />
      </BlockWrapper>
      <BtnPlus mode="wishlist" />
    </main>
  );
}
