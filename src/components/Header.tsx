import Logo from './Logo';

export default function Header() {
  return (
    <header className='sticky top-0 grid bg-orange-100/85 shadow-md shadow-orange-100/65 min-h-14'>
      <Logo />
    </header>
  )
}