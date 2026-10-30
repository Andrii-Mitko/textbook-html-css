import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://textbook-html-css.vercel.app'),
  title: {
    default: 'WebBook — онлайн навчальник веброзробки',
    // Шаблон додається до title кожної вкладеної сторінки
    template: '%s | WebBook',
  },
  description: 'Практичні уроки Git, HTML, CSS та сучасної веброзробки українською мовою.',
  openGraph: {
    type: 'website',
    locale: 'uk_UA',
    siteName: 'WebBook',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" data-scroll-behavior="smooth">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />

        <main className="container">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
