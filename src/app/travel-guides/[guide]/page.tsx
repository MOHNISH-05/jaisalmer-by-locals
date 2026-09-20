import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowUpRight,
  Clock,
  Calendar,
  User,
  Check,
  Package,
  Sparkles,
} from 'lucide-react';
import { travelGuidesData, getGuideBySlug } from '@/lib/guides';
import { getPackageBySlug } from '@/lib/packages';
import { getExperienceBySlug } from '@/lib/experiences';
import { metadata, BreadcrumbSchema, JsonLd } from '@/lib/seo';
import { brand } from '@/lib/config';
import { Breadcrumbs, Eyebrow, CTA } from '@/components/ui';

export function generateStaticParams() {
  return travelGuidesData.map((g) => ({ guide: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ guide: string }> }) {
  const { guide } = await params;
  const g = getGuideBySlug(guide);
  return g
    ? metadata(
        g.seoTitle,
        g.seoDescription,
        `/travel-guides/${g.slug}`
      )
    : { title: 'Not found' };
}

export default async function TravelGuideArticlePage({ params }: { params: Promise<{ guide: string }> }) {
  const { guide } = await params;
  const g = getGuideBySlug(guide);
  if (!g) notFound();

  const relatedPackagesData = g.relatedPackages
    .map((slug) => getPackageBySlug(slug))
    .filter(Boolean);

  const relatedExperiencesData = g.relatedExperiences
    .map((slug) => getExperienceBySlug(slug))
    .filter(Boolean);

  return (
    <>
      <div className="wrap">
        <Breadcrumbs
          items={[
            { label: 'Travel Guides', href: '/travel-guides' },
            { label: g.title },
          ]}
        />
      </div>

      {/* Header / Intro */}
      <section className="page-intro wrap">
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px', flexWrap: 'wrap' }}>
          <span className="eyebrow" style={{ color: '#9c4826' }}>
            {g.category} Guide
          </span>
          <span style={{ color: '#66726b' }}>·</span>
          <span style={{ fontSize: '0.8rem', color: '#66726b', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Clock size={14} /> {g.readTime}
          </span>
          <span style={{ color: '#66726b' }}>·</span>
          <span style={{ fontSize: '0.8rem', color: '#66726b', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Calendar size={14} /> {g.publishDate}
          </span>
        </div>

        <h1>{g.title}</h1>
        <p style={{ maxWidth: '800px', fontSize: '1.15rem', color: '#4a5750', lineHeight: 1.6 }}>
          {g.summary}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '16px', fontSize: '0.88rem', color: '#2d3832' }}>
          <User size={16} style={{ color: '#1f5b45' }} />
          <span>By <strong>{g.author}</strong> ({g.authorRole})</span>
        </div>
      </section>

      {/* Hero Image */}
      <div className="wrap wide-photo" style={{ marginBottom: '40px', position: 'relative', height: '460px', borderRadius: '16px', overflow: 'hidden' }}>
        <Image
          src={g.heroImage}
          alt={g.heroImageAlt}
          fill
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* Main Content + Sidebar */}
      <section className="section wrap editorial-layout" style={{ paddingTop: '0' }}>
        <div className="prose">
          {g.sections.map((section) => (
            <article key={section.title} style={{ marginBottom: '36px' }}>
              <h2 style={{ fontSize: '1.45rem', marginBottom: '14px', color: '#1c2621' }}>
                {section.title}
              </h2>
              <p style={{ fontSize: '1.02rem', lineHeight: 1.7, color: '#333f38', marginBottom: '16px' }}>
                {section.body}
              </p>

              {section.tips && section.tips.length > 0 && (
                <div
                  style={{
                    background: '#faf7f2',
                    borderLeft: '3px solid #1f5b45',
                    padding: '16px 20px',
                    borderRadius: '0 8px 8px 0',
                    margin: '16px 0',
                  }}
                >
                  <strong style={{ display: 'block', fontSize: '0.85rem', textTransform: 'uppercase', color: '#1f5b45', marginBottom: '8px' }}>
                    Practical Advice
                  </strong>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {section.tips.map((tip) => (
                      <li key={tip} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.9rem', color: '#2d3832' }}>
                        <Check size={16} style={{ color: '#1f5b45', flexShrink: 0, marginTop: '2px' }} />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          ))}

          {/* Action Callout */}
          <div
            style={{
              background: '#f4f8f6',
              border: '1px solid #d1e4dc',
              borderRadius: '12px',
              padding: '28px',
              marginTop: '40px',
            }}
          >
            <Eyebrow>Plan It with FolkMiles</Eyebrow>
            <h3 style={{ marginTop: '4px', marginBottom: '8px', fontSize: '1.3rem', color: '#1f5b45' }}>
              Turn This Guide Into a Real Journey
            </h3>
            <p style={{ color: '#4a5750', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '16px' }}>
              All FolkMiles itineraries are private and customizable. We handle your stays, chauffeured transfers,
              and authentic local experiences with written transparent quotations.
            </p>
            <Link href="/contact" className="button" data-event="guide_plan_click">
              Plan My Jaisalmer Trip <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* Sidebar with Related Packages & Experiences */}
        <aside className="sidebar">
          {relatedPackagesData.length > 0 && (
            <div
              style={{
                background: '#ffffff',
                border: '1px solid var(--border, #e8e3dc)',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                marginBottom: '24px',
              }}
            >
              <h4 style={{ fontSize: '1.05rem', marginBottom: '14px', color: '#1c2621', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Package size={18} /> Recommended Itineraries
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {relatedPackagesData.map((pkg) => (
                  <Link
                    key={pkg!.slug}
                    href={`/destinations/jaisalmer/${pkg!.slug}`}
                    style={{
                      textDecoration: 'none',
                      display: 'block',
                      background: '#faf7f2',
                      padding: '14px',
                      borderRadius: '8px',
                      border: '1px solid #e8e3dc',
                    }}
                  >
                    <span style={{ fontSize: '0.75rem', color: '#9c4826', fontWeight: 600, display: 'block' }}>
                      {pkg!.duration}
                    </span>
                    <strong style={{ fontSize: '0.92rem', color: '#1c2621', display: 'block', margin: '2px 0' }}>
                      {pkg!.title}
                    </strong>
                    <span style={{ fontSize: '0.8rem', color: '#66726b', display: 'block' }}>
                      Price on Request · View route →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {relatedExperiencesData.length > 0 && (
            <div
              style={{
                background: '#faf7f2',
                border: '1px solid var(--border, #e5e0d8)',
                borderRadius: '16px',
                padding: '24px',
              }}
            >
              <h4 style={{ fontSize: '1.05rem', marginBottom: '14px', color: '#1c2621', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Sparkles size={18} /> Related Experiences
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {relatedExperiencesData.map((exp) => (
                  <Link
                    key={exp!.slug}
                    href={`/experiences/${exp!.slug}`}
                    style={{
                      textDecoration: 'none',
                      display: 'block',
                      color: 'inherit',
                      fontSize: '0.88rem',
                      padding: '8px 0',
                      borderBottom: '1px solid #e8e3dc',
                    }}
                  >
                    <strong style={{ display: 'block', color: '#1c2621' }}>{exp!.title}</strong>
                    <span style={{ fontSize: '0.78rem', color: '#66726b' }}>{exp!.duration.split('(')[0].trim()}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </aside>
      </section>

      <CTA />

      {/* Structured Data */}
      <BreadcrumbSchema
        items={[
          { label: 'Travel Guides', path: '/travel-guides' },
          { label: g.title, path: `/travel-guides/${g.slug}` },
        ]}
      />
      <JsonLd
        value={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: g.title,
          description: g.summary,
          datePublished: g.publishDate,
          author: {
            '@type': 'Organization',
            name: g.author,
          },
          publisher: {
            '@type': 'Organization',
            name: 'FolkMiles',
            logo: {
              '@type': 'ImageObject',
              url: `${brand.domain}/logo.svg`,
            },
          },
          ...(brand.domain ? { url: `${brand.domain}/travel-guides/${g.slug}` } : {}),
        }}
      />
    </>
  );
}
