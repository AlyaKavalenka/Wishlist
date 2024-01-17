import Wishlists from '@/components/Wishlists';

export default function Home() {

  return (
    <main className='flex items-center'>
      <section className='flex flex-col m-8 bg-orange-50/40 rounded-md p-4'>
        <Wishlists />
      </section>
    </main>
  )
}
