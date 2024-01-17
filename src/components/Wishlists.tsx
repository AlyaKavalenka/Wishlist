import mockData from "@/assets/data/wishListData.json";

export default function Wishlists() {
  return (
    <>
      {mockData.users[0].wishlists.map((item) => <span key={item.id}>{item.title}</span>)}
    </>
  )
}