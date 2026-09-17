import type { Metadata } from 'next';
import './globals.css';

/* eslint-disable @next/next/no-page-custom-font -- App Router has no _document; hoisted <link> is the documented approach */

export const metadata: Metadata = {
  title: 'Nvite — Create unforgettable events with AI',
  description: 'Design breathtaking digital invitations and manage RSVPs effortlessly with AI.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
        rel="stylesheet"
      />
      <body className="min-h-screen bg-surface font-body-md text-on-surface antialiased">
        {children}
      </body>
    </html>
  );
}
