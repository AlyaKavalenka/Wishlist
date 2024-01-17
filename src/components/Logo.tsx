import Image from 'next/image';
import logo from '../../public/images/logo.svg';

export default function Logo() {
  return (
    <section>
      <Image src={logo} alt='logo' className='h-full object-contain' />
    </section>
  )
}