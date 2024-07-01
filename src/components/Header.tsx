import BtnProfile from './Btns/BtnProfile';
import BtnSettings from './Btns/BtnSettings';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="sticky top-0 z-10 flex h-16 min-h-16 justify-between bg-white/80 p-4 pb-2.5">
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
