import BtnNIcon from './BtnNIcon';
import editIcon from '../../public/images/icons/edit-icon.svg';
import crossIcon from '../../public/images/icons/cross-icon.svg';
import shareIcon from '../../public/images/icons/share-icon.svg';
import { useDeleteWishlistMutation } from '@/lib/api/endpointsWishlist';

interface WishlistControllersProps {
  wishlistId: number;
}

export default function WishlistControllers(props: WishlistControllersProps) {
  const { wishlistId } = props;

  const [deleteWishlist] = useDeleteWishlistMutation();

  function handleClickDelete() {
    deleteWishlist(wishlistId);
  }

  return (
    <div className="flex items-center">
      <BtnNIcon
        src={editIcon}
        mode="edit_wishlist"
        disabled={false}
        handleClick={() => {}}
      />
      <BtnNIcon
        src={crossIcon}
        mode="delete_wishlist"
        handleClick={handleClickDelete}
        disabled={false}
      />
      <BtnNIcon src={shareIcon} mode="share" disabled handleClick={() => {}} />
    </div>
  );
}
