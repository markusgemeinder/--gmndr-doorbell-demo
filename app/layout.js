import { Inter } from 'next/font/google';
import './globals.css';

export const metadata = {
  title: '#GMNDR Doorbell Demo',
  description: 'A demo application using Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
