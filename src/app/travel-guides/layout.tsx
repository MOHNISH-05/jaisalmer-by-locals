import { metadata, BreadcrumbSchema } from '@/lib/seo';

export const generateMetadata = () =>
  metadata(
    'Jaisalmer Travel Guides & Planning Insights | FolkMiles',
    'Practical, locally informed travel guides for Jaisalmer and Rajasthan. Best time to visit, trip duration advice, living fort guides, and desert safari planning.',
    '/travel-guides'
  );

export default function TravelGuidesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbSchema
        items={[{ label: 'Travel Guides', path: '/travel-guides' }]}
      />
      {children}
    </>
  );
}
