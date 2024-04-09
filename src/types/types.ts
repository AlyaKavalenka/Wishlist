import { ReactNode } from 'react';

export interface Wish {
  wishlist_id: number;
  name: string;
  description: string;
  links: string[];
  photos: string[];
  id?: number;
}

export interface Wishlist {
  id: number;
  title: string;
  wishes: Wish[];
}

export interface WishlistResponse {
  event_date: Date | null;
  title: string;
  update_at: Date;
  wishlist_id: string;
  wishlist_img: string | null;
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

export interface ModalProps {
  isOpen: boolean;
  toggle: () => void;
  children?: ReactNode;
}
