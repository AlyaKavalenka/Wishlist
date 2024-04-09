import BtnProfile from './Btns/BtnProfile';
import BtnSettings from './Btns/BtnSettings';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="sticky top-0 flex min-h-16 h-16 p-4 pb-2.5 justify-between bg-white/80 z-10">
      <div className="flex h-full">
        <BtnSettings />
      </div>
      <div className="flex h-full">
        <Logo />
      </div>
      <div className="flex h-full">
        <BtnProfile />
      </div>
    </header>
  );
}
