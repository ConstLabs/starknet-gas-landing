import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { OpenpanelProvider } from '@openpanel/nextjs';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Starknet Gas Price',
  description: 'All the information you need for STARKNET'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <OpenpanelProvider
          url="https://api.openpanel.dev"
          clientId="d76d674b-585f-4618-9681-05453fa32c80"
          trackScreenViews={true}
        />
      </body>
    </html>
  );
}
