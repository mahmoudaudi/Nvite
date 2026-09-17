import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Event Invitation Platform — Setup',
  description:
    'AI-Powered Event Invitation Website Platform. Technical foundation only; product features land in later phases.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900 antialiased">{children}</body>
    </html>
  );
}
