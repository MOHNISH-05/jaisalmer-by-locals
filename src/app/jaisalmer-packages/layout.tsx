import { metadata, BreadcrumbSchema } from '@/lib/seo';

export const generateMetadata = () =>
  metadata(
    'Jaisalmer Tour Packages | Private & Custom Trips | FolkMiles',
    'Explore private, locally guided Jaisalmer tour packages ranging from 2 to 4 days. Includes desert safaris, fort heritage walks, and transparent planning with FolkMiles.',
    '/jaisalmer-packages'
  );

export default function JaisalmerPackagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { label: 'Destinations', path: '/destinations/jaisalmer' },
          { label: 'Jaisalmer Packages', path: '/jaisalmer-packages' },
        ]}
      />
      {children}
    </>
  );
}
