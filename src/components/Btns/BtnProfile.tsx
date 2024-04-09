import Image from 'next/image';
import defaultProfileImg from '../../../public/images/img/default-profile-img.png';

export default function BtnProfile() {
  return (
    <button type="button" className="flex w-full h-full py-1">
      <Image
        src={defaultProfileImg}
        alt="profile"
        className="w-full h-full object-contain"
      />
    </button>
  );
}
