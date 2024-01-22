import BtnNIcon from './BtnNIcon';
import editIcon from '../../public/images/icons/edit-icon.svg';
import crossIcon from '../../public/images/icons/cross-icon.svg';
import shareIcon from '../../public/images/icons/share-icon.svg';

export default function WishlistControllers() {
  return (
    <div className="flex items-center">
      <BtnNIcon src={editIcon} mode="edit_wishlist" />
      <BtnNIcon src={crossIcon} mode="delete_wishlist" />
      <BtnNIcon src={shareIcon} mode="share" />
    </div>
  );
}
