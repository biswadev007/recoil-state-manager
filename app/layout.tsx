import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import RootRecoil from '@/components/RootRecoil';
import Container from '@/components/Container';
import Accessiblity from '@/components/Accessiblity';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <RootRecoil>
          <Container>
            {children}
          </Container>
          <Accessiblity />
        </RootRecoil>
      </body>
    </html>
  );
}
