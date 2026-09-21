import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Analytics } from '@/components/analytics';
import { FloatingWhatsApp } from '@/components/floating-whatsapp';
import { brand } from '@/lib/config';
import { folkMilesContact } from '@/lib/contact';
import { JsonLd } from '@/lib/seo';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'FolkMiles | Explore India by Locals', template: '%s | FolkMiles' },
  description:
    'Explore India through locally planned journeys, authentic experiences and personalized tours, beginning in Jaisalmer, Rajasthan.',
  ...(brand.domain ? { metadataBase: new URL(brand.domain) } : {}),
  icons: { icon: '/logo.svg' },
  robots: {
    index: process.env.NEXT_PUBLIC_NO_INDEX === 'true' ? false : true,
    follow: true,
    googleBot: {
      index: process.env.NEXT_PUBLIC_NO_INDEX === 'true' ? false : true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
    other: {
      ...(process.env.BING_SITE_VERIFICATION
        ? { 'msvalidate.01': process.env.BING_SITE_VERIFICATION }
        : {}),
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <Analytics />
        <JsonLd
          value={{
            '@context': 'https://schema.org',
            '@type': ['TravelAgency', 'Organization'],
            name: folkMilesContact.brand,
            slogan: 'Explore by Locals',
            telephone: folkMilesContact.phone,
            email: folkMilesContact.email,
            sameAs: [
              folkMilesContact.instagramUrl,
            ],
            ...(brand.domain
              ? { url: brand.domain, logo: `${brand.domain}/logo.svg` }
              : {}),
            areaServed: [
              { '@type': 'Country', name: 'India' },
              { '@type': 'City', name: 'Jaisalmer' },
            ],
          }}
        />
      </body>
    </html>
  );
}

