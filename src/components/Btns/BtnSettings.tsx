import Image from 'next/image';
import settingsIcon from '../../../public/images/icons/settings-icon.svg';

export default function BtnSettings() {
  return (
    <button className="flex w-full h-full py-1">
      <Image src={settingsIcon} alt="settings" className="w-full h-full" />
    </button>
  );
}
