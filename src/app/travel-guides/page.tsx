'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Clock } from 'lucide-react';
import { travelGuidesData } from '@/lib/guides';
import { Breadcrumbs, Eyebrow, CTA } from '@/components/ui';

export default function TravelGuidesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredGuides = useMemo(() => {
    return travelGuidesData.filter((g) => {
      return selectedCategory === 'all' || g.category.toLowerCase() === selectedCategory.toLowerCase();
    });
  }, [selectedCategory]);

  return (
    <>
      <div className="wrap">
        <Breadcrumbs items={[{ label: 'Travel Guides' }]} />
      </div>

      <section className="page-intro wrap">
        <Eyebrow>Local Knowledge & Practical Insights</Eyebrow>
        <h1>FolkMiles Travel Guides</h1>
        <p>
          Thoughtfully written guides to help you plan your journey through Jaisalmer and Rajasthan.
          Learn about the best seasons, realistic trip durations, living fort heritage, desert camp standards, and local flavours.
        </p>
      </section>

      {/* Category Tabs */}
      <section className="wrap" style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
          {[
            { id: 'all', label: 'All Guides' },
            { id: 'planning', label: 'Trip Planning' },
            { id: 'heritage', label: 'Fort & Heritage' },
            { id: 'desert', label: 'Thar Desert' },
            { id: 'food', label: 'Food & Cuisine' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`tab-button ${selectedCategory === tab.id ? 'active' : ''}`}
              style={{
                padding: '8px 16px',
                borderRadius: '24px',
                border: '1px solid',
                borderColor: selectedCategory === tab.id ? 'var(--primary, #1f5b45)' : 'var(--border, #d6cfc4)',
                background: selectedCategory === tab.id ? 'var(--primary, #1f5b45)' : 'transparent',
                color: selectedCategory === tab.id ? '#ffffff' : 'var(--text, #1c2621)',
                fontSize: '0.85rem',
                cursor: 'pointer',
                fontWeight: selectedCategory === tab.id ? 600 : 500,
                transition: 'all 0.2s ease',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Guides Grid */}
      <section className="wrap section" style={{ paddingTop: '0' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '32px',
          }}
        >
          {filteredGuides.map((guide) => (
            <article
              key={guide.id}
              style={{
                background: '#ffffff',
                border: '1px solid var(--border, #e8e3dc)',
                borderRadius: '16px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
              }}
            >
              <div style={{ position: 'relative', height: '220px', width: '100%' }}>
                <Image
                  src={guide.heroImage}
                  alt={guide.heroImageAlt}
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
                  }}
                >
                  {guide.category}
                </div>
              </div>

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
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#66726b', marginBottom: '6px' }}>
                    <Clock size={14} />
                    <span>{guide.readTime}</span>
                    <span>·</span>
                    <span>{guide.duration}</span>
                  </div>

                  <h2 style={{ fontSize: '1.25rem', marginTop: '2px', marginBottom: '10px', lineHeight: 1.4 }}>
                    <Link href={`/travel-guides/${guide.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {guide.title}
                    </Link>
                  </h2>

                  <p style={{ color: '#4a5750', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '20px' }}>
                    {guide.summary}
                  </p>
                </div>

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
                    href={`/travel-guides/${guide.slug}`}
                    className="text-link"
                    style={{ fontWeight: 600, fontSize: '0.9rem' }}
                  >
                    Read Guide <ArrowRight size={16} />
                  </Link>
                  <span style={{ fontSize: '0.75rem', color: '#66726b' }}>
                    By {guide.author}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Connection to Itineraries */}
      <section className="wrap section" style={{ paddingTop: '0' }}>
        <div
          style={{
            background: '#faf7f2',
            border: '1px solid var(--border, #e5e0d8)',
            borderRadius: '16px',
            padding: '36px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          <div>
            <Eyebrow>Ready to Turn Reading into a Journey?</Eyebrow>
            <h3 style={{ margin: '4px 0 6px 0', fontSize: '1.4rem' }}>
              Explore Our Private Jaisalmer Tour Packages
            </h3>
            <p style={{ margin: 0, color: '#4a5750', fontSize: '0.95rem' }}>
              Every itinerary can be shaped around your personal curiosity, preferred stays, and travel dates.
            </p>
          </div>
          <Link href="/jaisalmer-packages" className="button">
            View Tour Packages <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <CTA />
    </>
  );
}
