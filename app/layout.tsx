import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import SkipNav from '@/components/layout/SkipNav';
import JsonLd from '@/components/seo/JsonLd';

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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured data for the website
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Dave M. Jones - Portfolio',
    url: 'https://davemjones.github.io',
    description:
      'Portfolio showcasing development expertise, projects, and curated resources from the developer community.',
    author: {
      '@type': 'Person',
      name: 'Dave M. Jones',
      jobTitle: 'Software Developer',
      url: 'https://davemjones.github.io',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://davemjones.github.io',
    },
  };

  return (
    <html lang="en">
      <head>
        <JsonLd data={websiteSchema} />
      </head>
      <body className="min-h-screen flex flex-col">
        <SkipNav />
        <Header />
        <Navigation />
        <main
          id="main-content"
          className="flex-1 container mx-auto px-4 py-8"
          tabIndex={-1}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
