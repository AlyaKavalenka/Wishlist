import { ReactNode } from 'react';

export interface Wish {
  wishlist_id: number;
  name: string;
  description: string;
  link: string;
  photos: string[];
  id?: number;
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

export interface ModalProps {
  isOpen: boolean;
  toggle: () => void;
  children?: ReactNode;
}
