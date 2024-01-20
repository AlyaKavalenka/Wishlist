import mockData from "@/assets/data/wishListData.json";
import WishlistItem from './WishlistItem';

export default function Wishlists() {
  return (
    <>
      {mockData.users[0].wishlists.map((item) => <WishlistItem key={item.id} title={item.title} />)}
    </>
  )
}