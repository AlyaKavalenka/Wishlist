import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import StoreProvider from './StoreProvider';
import { ModalContentContextProvider } from '@/contexts/ModalContentContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Wishlist',
  description: 'Create wishlists and share with friends',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <ModalContentContextProvider>
        <html lang="en">
          <body className={inter.className}>
            <Header />
            {children}
          </body>
        </html>
      </ModalContentContextProvider>
    </StoreProvider>
  );
}
