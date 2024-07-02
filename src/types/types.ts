import { ReactNode } from 'react';

export interface Wish {
  name: string;
  description: string;
  links: string[];
  photos: string[];
  wishlists_id: string[];
  id?: string;
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
