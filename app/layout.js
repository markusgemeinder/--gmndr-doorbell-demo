// /app/layout.js

import '@/app/globals.css'; // Stile einbinden

// Importiere Google Fonts
import { Indie_Flower } from 'next/font/google';

const indieFlower = Indie_Flower({
  weight: '400',
  subsets: ['latin'],
});

export const metadata = {
  title: '#GMNDR Doorbell Demo',
  description: 'A demo application using Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={indieFlower.className}>{children}</body>
    </html>
  );
}
