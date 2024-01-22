import ButtonNIcon from './ButtonNIcon';
import editIcon from '../../public/images/icons/edit-icon.svg';
import crossIcon from '../../public/images/icons/cross-icon.svg';
import shareIcon from '../../public/images/icons/share-icon.svg';

export default function WishlistControllers() {
  return (
    <div className="flex items-center">
      <ButtonNIcon src={editIcon} mode="edit_wishlist" />
      <ButtonNIcon src={crossIcon} mode="delete_wishlist" />
      <ButtonNIcon src={shareIcon} mode="share" />
    </div>
  );
}
