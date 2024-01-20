import Wishlists from '@/components/Wishlists';

export default function Home() {

  return (
    <main className='flex items-center'>
      <section className='flex flex-col m-8 bg-orange-900/40 text-orange-50 shadow-md shadow-orange-900/30 rounded-md p-4 grow'>
        <Wishlists />
      </section>
    </main>
  )
}
