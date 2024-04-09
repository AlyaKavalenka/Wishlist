import { Pacifico } from 'next/font/google';

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
});

export default function Logo() {
  return (
    <section className={pacifico.className}>
      <h1 className="text-2xl tracking-wider">BWish</h1>
    </section>
  );
}
