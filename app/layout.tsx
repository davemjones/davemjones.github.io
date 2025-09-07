import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Dave M. Jones - Portfolio',
  description:
    'Portfolio showcasing development expertise, projects, and curated resources from the developer community.',
  keywords: ['developer', 'portfolio', 'React', 'Next.js', 'TypeScript'],
  authors: [{ name: 'Dave M. Jones' }],
  creator: 'Dave M. Jones',
  openGraph: {
    title: 'Dave M. Jones - Portfolio',
    description:
      'Portfolio showcasing development expertise, projects, and curated resources from the developer community.',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <Navigation />
        <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
