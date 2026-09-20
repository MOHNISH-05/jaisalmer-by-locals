import type { MetadataRoute } from 'next';
import { brand } from '@/lib/config';
import { jaisalmerPackages } from '@/lib/packages';
import { experiencesList } from '@/lib/experiences';
import { travelGuidesData } from '@/lib/guides';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = brand.domain || 'https://folkmiles.com';

  const staticRoutes = [
    { url: `${baseUrl}/`, changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${baseUrl}/destinations/jaisalmer`, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/jaisalmer-packages`, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/experiences`, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/travel-guides`, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/about`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/contact`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/b2b-travel-partners`, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/local-partners`, changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/privacy-policy`, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${baseUrl}/terms-and-conditions`, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${baseUrl}/cancellation-policy`, changeFrequency: 'yearly' as const, priority: 0.3 },
  ];

  const packageRoutes = jaisalmerPackages.map((pkg) => ({
    url: `${baseUrl}/destinations/jaisalmer/${pkg.slug}`,
    lastModified: new Date('2026-09-20'),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  const experienceRoutes = experiencesList.map((exp) => ({
    url: `${baseUrl}/experiences/${exp.slug}`,
    lastModified: new Date('2026-09-20'),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  const guideRoutes = travelGuidesData.map((g) => ({
    url: `${baseUrl}/travel-guides/${g.slug}`,
    lastModified: new Date(g.publishDate),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  return [...staticRoutes, ...packageRoutes, ...experienceRoutes, ...guideRoutes];
}
