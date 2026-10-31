import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { zakon } from './fonts';

export const metadata: Metadata = {
  metadataBase: new URL('https://textbook-html-css.vercel.app'),
  title: {
    default: 'WebBook — онлайн навчальник веброзробки',
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
      <body className={zakon.variable}>
        <Header />

        <main className="container">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
