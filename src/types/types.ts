interface Gift {
  id: number;
  name: string;
  description: string;
  link: string;
  photos: string[];
}

interface Wishlist {
  id: number;
  title: string;
  gifts: Gift[];
}

interface Users {
  users: [
    {
      id: number;
      username: string;
      wishlists: Wishlist[];
    },
  ];
}
