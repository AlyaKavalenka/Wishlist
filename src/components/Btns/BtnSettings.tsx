import Image from 'next/image';
import settingsIcon from '../../../public/images/icons/settings-icon.svg';

export default function BtnSettings() {
  return (
    <button className="flex h-full w-full py-1">
      <Image src={settingsIcon} alt="settings" className="h-full w-full" />
    </button>
  );
}
