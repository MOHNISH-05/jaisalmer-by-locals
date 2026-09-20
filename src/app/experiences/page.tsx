import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock } from 'lucide-react';
import { experiencesList } from '@/lib/experiences';
import { folkMilesContact } from '@/lib/contact';
import { metadata, BreadcrumbSchema } from '@/lib/seo';
import { Breadcrumbs, Eyebrow, CTA } from '@/components/ui';

export const generateMetadata = () =>
  metadata(
    'Jaisalmer Travel Experiences | FolkMiles',
    'Experience Jaisalmer through the people who call it home. Thar desert safaris, living fort walks, desert walking trails, stargazing, village visits, and local food.',
    '/experiences'
  );

export default function ExperiencesPage() {
  return (
    <>
      <div className="wrap">
        <Breadcrumbs items={[{ label: 'Experiences' }]} />
      </div>

      <section className="page-intro wrap">
        <Eyebrow>Explore by Locals</Eyebrow>
        <h1>Signature Jaisalmer Experiences</h1>
        <p>
          Experience a destination through the people who live there. Our experiences are designed
          around slower travel, authentic culture, and personal connections across the Golden City
          and the Thar Desert.
        </p>
      </section>

      {/* Experience Grid */}
      <section className="wrap section" style={{ paddingTop: '0' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '32px',
          }}
        >
          {experiencesList.map((exp) => {
            const encodedWaMessage = encodeURIComponent(
              `Hi FolkMiles,\nI'm interested in the ${exp.title}.\nCould you share availability and details?`
            );
            const waUrl = `https://wa.me/${folkMilesContact.whatsapp}?text=${encodedWaMessage}`;

            return (
              <article
                key={exp.id}
                style={{
                  background: '#ffffff',
                  border: '1px solid var(--border, #e8e3dc)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
              >
                {/* Visual */}
                <div style={{ position: 'relative', height: '240px', width: '100%' }}>
                  <Image
                    src={exp.cardImage}
                    alt={exp.heroImageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    style={{ objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: 'rgba(31, 91, 69, 0.9)',
                      color: '#ffffff',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      padding: '3px 10px',
                      borderRadius: '16px',
                      backdropFilter: 'blur(4px)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <Clock size={12} /> {exp.duration.split('(')[0].trim()}
                  </div>
                </div>

                {/* Content */}
                <div
                  style={{
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <span className="eyebrow" style={{ color: '#9c4826', marginBottom: '4px', display: 'block' }}>
                      {exp.eyebrow}
                    </span>
                    <h2 style={{ fontSize: '1.3rem', marginTop: '2px', marginBottom: '10px' }}>
                      <Link href={`/experiences/${exp.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                        {exp.title}
                      </Link>
                    </h2>
                    <p style={{ color: '#4a5750', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '20px' }}>
                      {exp.shortDescription}
                    </p>
                  </div>

                  {/* Actions */}
                  <div
                    style={{
                      borderTop: '1px solid var(--border, #f0eae1)',
                      paddingTop: '16px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Link
                      href={`/experiences/${exp.slug}`}
                      className="text-link"
                      style={{ fontWeight: 600, fontSize: '0.9rem' }}
                    >
                      Discover Experience <ArrowRight size={16} />
                    </Link>
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button secondary"
                      style={{ padding: '6px 14px', fontSize: '0.8rem', borderColor: '#25D366', color: '#166534' }}
                      data-event="whatsapp_click"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Connection to Packages */}
      <section className="wrap section" style={{ paddingTop: '0' }}>
        <div
          style={{
            background: '#faf7f2',
            border: '1px solid var(--border, #e5e0d8)',
            borderRadius: '16px',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            alignItems: 'flex-start',
          }}
        >
          <Eyebrow>Seamless Planning</Eyebrow>
          <h2 style={{ margin: 0, fontSize: '1.6rem' }}>All experiences can be woven into your private itinerary</h2>
          <p style={{ maxWidth: '720px', color: '#4a5750', lineHeight: 1.6, margin: 0 }}>
            Whether you are visiting for 2 days, 3 days, or staying a full week, each of these signature experiences
            can be incorporated into your personalized FolkMiles journey with dedicated private transport and hand-picked stays.
          </p>
          <Link href="/jaisalmer-packages" className="button" style={{ marginTop: '8px' }}>
            View Jaisalmer Tour Packages <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <CTA />
      <BreadcrumbSchema items={[{ label: 'Experiences', path: '/experiences' }]} />
    </>
  );
}
