export interface Wish {
  id: number;
  name: string;
  description: string;
  link: string;
  photos: string[];
}

export interface Wishlist {
  id: number;
  title: string;
  wishes: Wish[];
}

export interface Users {
  users: [
    {
      id: number;
      username: string;
      wishlists: Wishlist[];
    },
  ];
}
