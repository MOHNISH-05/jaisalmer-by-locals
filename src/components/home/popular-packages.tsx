import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, Clock, Check } from 'lucide-react';
import { jaisalmerPackages } from '@/lib/packages';
import { Eyebrow } from '@/components/ui';
import styles from '@/app/home.module.css';

export function PopularPackages() {
  return (
    <section className="section wrap" id="packages">
      <div className={styles.sectionHeading}>
        <div>
          <Eyebrow>Popular Jaisalmer Itineraries</Eyebrow>
          <h2>
            Private journeys,<br />
            shaped around your time.
          </h2>
        </div>
        <div className={styles.headingSide}>
          <p style={{ margin: 0, color: '#4a5750', fontSize: '0.95rem' }}>
            Starting trip formats to adapt around your dates, pace, and interests.
          </p>
          <Link href="/jaisalmer-packages" className="text-link" style={{ marginTop: '8px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            View all Jaisalmer packages <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '28px',
        }}
      >
        {jaisalmerPackages.map((pkg, i) => (
          <article
            key={pkg.id}
            style={{
              background: '#ffffff',
              border: '1px solid var(--border, #e8e3dc)',
              borderRadius: '16px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
              position: 'relative',
            }}
          >
            {/* Image */}
            <div style={{ position: 'relative', height: '220px', width: '100%' }}>
              <Image
                src={pkg.cardImage}
                alt={pkg.heroImageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
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
                <Clock size={12} /> {pkg.duration}
              </div>
              {i === 1 && (
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    background: 'rgba(156, 72, 38, 0.9)',
                    color: '#ffffff',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    padding: '3px 10px',
                    borderRadius: '16px',
                    backdropFilter: 'blur(4px)',
                  }}
                >
                  Most Popular
                </div>
              )}
            </div>

            {/* Body */}
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
                  {pkg.shortTitle}
                </span>
                <h3 style={{ fontSize: '1.3rem', marginTop: '2px', marginBottom: '8px' }}>
                  <Link href={`/destinations/jaisalmer/${pkg.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {pkg.title}
                  </Link>
                </h3>
                <p style={{ color: '#4a5750', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '16px' }}>
                  {pkg.summary}
                </p>

                {/* Highlights */}
                <div style={{ marginBottom: '16px' }}>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {pkg.highlights.slice(0, 3).map((h) => (
                      <li key={h} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.82rem', color: '#2d3832' }}>
                        <Check size={14} style={{ color: '#1f5b45', flexShrink: 0, marginTop: '2px' }} />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Price & CTA */}
              <div
                style={{
                  borderTop: '1px solid var(--border, #f0eae1)',
                  paddingTop: '16px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: '#66726b', display: 'block' }}>
                    Starting Price
                  </span>
                  <strong style={{ fontSize: '1.05rem', color: '#103f32' }}>
                    {pkg.price === null ? 'Price on Request' : `From ₹${pkg.price.toLocaleString('en-IN')} / person`}
                  </strong>
                </div>
                <Link
                  href={`/destinations/jaisalmer/${pkg.slug}`}
                  className="button secondary"
                  style={{ padding: '8px 16px', fontSize: '0.85rem' }}
                >
                  View Itinerary <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '36px' }}>
        <Link href="/jaisalmer-packages" className="button">
          Explore All Jaisalmer Packages <ArrowUpRight size={16} />
        </Link>
      </div>
    </section>
  );
}
