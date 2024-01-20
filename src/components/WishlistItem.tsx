import Image from 'next/image';
import editIcon from '../../public/images/icons/edit-icon.svg';
import crossIcon from '../../public/images/icons/cross-icon.svg';
import shareIcon from '../../public/images/icons/share-icon.svg';
import ButtonNIcon from './ButtonNIcon';

interface WishlistItemProps {
  title: string;
}

export default function WishlistItem(props: WishlistItemProps) {
  const {title} = props;

  return (
    <section className='flex justify-between gap-1 items-center'>
      <button className='grow text-start hover:bg-orange-900/35 py-3 pl-3 rounded-md'>{title}</button>
      <div className='flex items-center'>
        <ButtonNIcon src={editIcon} mode='edit'/>
        <ButtonNIcon src={crossIcon} mode='delete'/>
        <ButtonNIcon src={shareIcon} mode='share'/>
      </div>
    </section>
  )
}