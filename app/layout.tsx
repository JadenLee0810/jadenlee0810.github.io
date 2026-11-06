import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

// Closest freely licensed stand-in for Product Sans. Exposed as a CSS variable
// and slotted into the `font-logo` stack in tailwind.config.ts.
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-logo',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AboutMe — Jaden Lee',
  description:
    'Portfolio of Jaden Lee — Statistics & Applied Mathematics student at UC Berkeley, data engineer at Legali AI, and founder of Lyrn AI.',
};

export const viewport: Viewport = {
  // Drives the browser UI colour per system scheme.
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#202124' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}
