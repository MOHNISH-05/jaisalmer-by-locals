import { IndiaHero } from '@/components/home/india-hero';
import { BrandIntroPrinciples } from '@/components/home/brand-intro-principles';
import { IndiaStory } from '@/components/home/india-story';
import { RajasthanSection } from '@/components/home/rajasthan-section';
import { JaisalmerReveal } from '@/components/home/jaisalmer-reveal';
import { JaisalmerStory } from '@/components/home/jaisalmer-story';
import { JaisalmerExperiences } from '@/components/home/jaisalmer-experiences';
import { LocalLens } from '@/components/home/local-lens';
import { PlanningValue } from '@/components/home/planning-value';
import { DestinationsB2BGuides } from '@/components/home/destinations-b2b-guides';
import { FinalCTA } from '@/components/home/final-cta';
import { JsonLd, metadata } from '@/lib/seo';
import { folkMilesContact } from '@/lib/contact';
import { brand } from '@/lib/config';

export const generateMetadata = () =>
  metadata(
    'Explore India by Locals',
    'Explore India with FolkMiles through locally planned journeys, authentic experiences and personalized tours. Our first destination begins in Jaisalmer, Rajasthan.',
    '/'
  );

export default function Home() {
  return (
    <>
      <IndiaHero />
      <BrandIntroPrinciples />
      <IndiaStory />
      <RajasthanSection />
      <JaisalmerReveal />
      <JaisalmerStory />
      <JaisalmerExperiences />
      <LocalLens />
      <PlanningValue />
      <DestinationsB2BGuides />
      <FinalCTA />

      <JsonLd
        value={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Organization',
              name: folkMilesContact.brand,
              description:
                'India-wide tour operator and travel company offering personalized, local-first journeys, beginning in Jaisalmer, Rajasthan.',
              telephone: folkMilesContact.phone,
              email: folkMilesContact.email,
              ...(brand.domain ? { url: brand.domain } : {}),
              ...(brand.address
                ? {
                    address: {
                      '@type': 'PostalAddress',
                      streetAddress: brand.address,
                      addressCountry: 'IN',
                    },
                  }
                : {}),
            },
            {
              '@type': 'WebSite',
              name: 'FolkMiles',
              alternateName: 'FolkMiles India',
              description:
                'Explore India with FolkMiles through locally planned journeys, authentic experiences and personalized tours. Beginning in Jaisalmer, Rajasthan.',
              ...(brand.domain ? { url: brand.domain } : {}),
            },
          ],
        }}
      />
    </>
  );
}
