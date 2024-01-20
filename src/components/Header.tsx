import Logo from './Logo';

export default function Header() {
  return (
    <header className="sticky top-0 flex bg-orange-900/85 shadow-md shadow-orange-900/65 min-h-14 h-14">
      <Logo />
    </header>
  );
}
