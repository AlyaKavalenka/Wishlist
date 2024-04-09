import type { Metadata } from 'next';
import { Roboto_Serif } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import StoreProvider from './StoreProvider';
import { ModalContentContextProvider } from '@/contexts/ModalContentContext';
import Footer from '@/components/Footer';

const roboto_serif = Roboto_Serif({ subsets: ['latin', 'cyrillic'] });

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
          <body className={roboto_serif.className}>
            <Header />
            {children}
            <Footer />
          </body>
        </html>
      </ModalContentContextProvider>
    </StoreProvider>
  );
}
