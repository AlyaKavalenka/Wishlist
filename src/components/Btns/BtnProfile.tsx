import Image from 'next/image';
import defaultProfileImg from '../../../public/images/img/default-profile-img.png';

export default function BtnProfile() {
  return (
    <button type="button" className="flex h-full w-full py-1">
      <Image
        src={defaultProfileImg}
        alt="profile"
        className="h-full w-full object-contain"
      />
    </button>
  );
}
