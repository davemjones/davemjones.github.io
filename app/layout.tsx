import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import SkipNav from '@/components/layout/SkipNav';
import JsonLd from '@/components/seo/JsonLd';
import { NavigationProvider } from '@/contexts/NavigationContext';
import { profile } from '@/lib/profile';

export const metadata: Metadata = {
  title: `${profile.name} - Portfolio`,
  description: profile.bio,
  keywords: ['developer', 'portfolio', 'React', 'Next.js', 'TypeScript'],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    title: `${profile.name} - Portfolio`,
    description: profile.bio,
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
    name: `${profile.name} - Portfolio`,
    url: profile.website,
    description: profile.bio,
    author: {
      '@type': 'Person',
      name: profile.name,
      jobTitle: profile.title,
      url: profile.website,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': profile.website,
    },
  };

  return (
    <html lang="en">
      <head>
        <JsonLd data={websiteSchema} />
      </head>
      <body className="min-h-screen flex flex-col">
        <NavigationProvider>
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
        </NavigationProvider>
      </body>
    </html>
  );
}
