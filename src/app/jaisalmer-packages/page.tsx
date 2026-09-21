'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ArrowRight, Check, Sparkles, Clock, MapPin, Compass } from 'lucide-react';
import { jaisalmerPackages } from '@/lib/packages';
import { folkMilesContact } from '@/lib/contact';
import { Breadcrumbs, Eyebrow, CTA } from '@/components/ui';

export default function JaisalmerPackagesPage() {
  const [selectedDuration, setSelectedDuration] = useState<string>('all');
  const [selectedStyle, setSelectedStyle] = useState<string>('all');

  const filteredPackages = useMemo(() => {
    return jaisalmerPackages.filter((pkg) => {
      const matchesDuration =
        selectedDuration === 'all' ||
        (selectedDuration === '2d' && pkg.daysCount === 2) ||
        (selectedDuration === '3d' && pkg.daysCount === 3) ||
        (selectedDuration === '4d' && pkg.daysCount === 4);

      const matchesStyle =
        selectedStyle === 'all' || (pkg.categories as readonly string[]).includes(selectedStyle);

      return matchesDuration && matchesStyle;
    });
  }, [selectedDuration, selectedStyle]);

  return (
    <>
      <div className="wrap">
        <Breadcrumbs
          items={[
            { label: 'Destinations', href: '/#destinations' },
            { label: 'Jaisalmer', href: '/destinations/jaisalmer' },
            { label: 'Tour Packages' },
          ]}
        />
      </div>

      <section className="page-intro wrap">
        <Eyebrow>Private & Customizable Itineraries</Eyebrow>
        <h1>Jaisalmer Tour Packages</h1>
        <p>
          Private, customizable journeys designed with local knowledge. Explore the living fort,
          ancient havelis, and the Thar Desert at your own pace.
        </p>
      </section>

      {/* Filter Tabs */}
      <section className="wrap" style={{ marginBottom: '32px' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid var(--border, #e5e0d8)',
            paddingBottom: '20px',
          }}
        >
          {/* Duration Filter */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--muted, #66726b)', marginRight: '4px' }}>
              Duration:
            </span>
            {[
              { id: 'all', label: 'All Durations' },
              { id: '2d', label: '2 Days / 1 Night' },
              { id: '3d', label: '3 Days / 2 Nights' },
              { id: '4d', label: '4 Days / 3 Nights' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedDuration(tab.id)}
                className={`tab-button ${selectedDuration === tab.id ? 'active' : ''}`}
                style={{
                  padding: '8px 16px',
                  borderRadius: '24px',
                  border: '1px solid',
                  borderColor: selectedDuration === tab.id ? 'var(--primary, #1f5b45)' : 'var(--border, #d6cfc4)',
                  background: selectedDuration === tab.id ? 'var(--primary, #1f5b45)' : 'transparent',
                  color: selectedDuration === tab.id ? '#ffffff' : 'var(--text, #1c2621)',
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  fontWeight: selectedDuration === tab.id ? 600 : 500,
                  transition: 'all 0.2s ease',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Style Filter */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--muted, #66726b)', marginRight: '4px' }}>
              Style:
            </span>
            {[
              { id: 'all', label: 'All Styles' },
              { id: 'first-time', label: 'First-time' },
              { id: 'couple', label: 'Couples' },
              { id: 'family', label: 'Families' },
              { id: 'desert', label: 'Desert' },
              { id: 'slow-travel', label: 'Slow Travel' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedStyle(tab.id)}
                className={`tab-button ${selectedStyle === tab.id ? 'active' : ''}`}
                style={{
                  padding: '8px 16px',
                  borderRadius: '24px',
                  border: '1px solid',
                  borderColor: selectedStyle === tab.id ? 'var(--primary, #1f5b45)' : 'var(--border, #d6cfc4)',
                  background: selectedStyle === tab.id ? 'var(--primary, #1f5b45)' : 'transparent',
                  color: selectedStyle === tab.id ? '#ffffff' : 'var(--text, #1c2621)',
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  fontWeight: selectedStyle === tab.id ? 600 : 500,
                  transition: 'all 0.2s ease',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Global Price Disclaimer */}
      <section className="wrap" style={{ marginBottom: '24px' }}>
        <div
          style={{
            background: '#faf7f2',
            border: '1px solid var(--border, #e5e0d8)',
            borderRadius: '12px',
            padding: '16px 20px',
            fontSize: '0.88rem',
            color: '#4a5750',
            lineHeight: 1.5,
          }}
        >
          <strong>Transparent Pricing Note: </strong>
          Starting prices are per person. Final trip cost may vary depending on travel dates, number of travellers, accommodation category, transport requirements and selected experiences.
        </div>
      </section>

      {/* Package Cards List */}
      <section className="wrap section" style={{ paddingTop: '0' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {filteredPackages.map((pkg) => {
            const priceText = pkg.price ? `starting from ₹${pkg.price.toLocaleString('en-IN')}/person` : '';
            const encodedWaMessage = encodeURIComponent(
              `Hi FolkMiles,\n\nI’m interested in the ${pkg.duration} Jaisalmer Journey ${priceText}.\n\nTravel date:\nNumber of travellers:\n\nCould you help me customize the trip?`
            );
            const waUrl = `https://wa.me/${folkMilesContact.whatsapp}?text=${encodedWaMessage}`;

            return (
              <article
                key={pkg.id}
                className="package-card"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'minmax(300px, 420px) 1fr',
                  gap: '32px',
                  background: '#ffffff',
                  border: '1px solid var(--border, #e8e3dc)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                }}
              >
                {/* Visual */}
                <div style={{ position: 'relative', minHeight: '320px' }}>
                  <Image
                    src={pkg.cardImage}
                    alt={pkg.heroImageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    style={{ objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      display: 'flex',
                      gap: '8px',
                      flexWrap: 'wrap',
                    }}
                  >
                    <span
                      style={{
                        background: 'rgba(31, 91, 69, 0.9)',
                        color: '#ffffff',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        padding: '4px 10px',
                        borderRadius: '20px',
                        backdropFilter: 'blur(4px)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      <Clock size={12} /> {pkg.duration}
                    </span>
                    <span
                      style={{
                        background: 'rgba(156, 72, 38, 0.9)',
                        color: '#ffffff',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        padding: '4px 10px',
                        borderRadius: '20px',
                        backdropFilter: 'blur(4px)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      <Sparkles size={12} /> 100% Customizable
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div
                  style={{
                    padding: '32px 32px 32px 0',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
                      <span className="eyebrow" style={{ color: '#9c4826', marginBottom: '4px' }}>
                        {pkg.shortTitle}
                      </span>
                      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                        {pkg.travelStyle.map((style) => (
                          <span
                            key={style}
                            style={{
                              fontSize: '0.75rem',
                              background: '#f2eee8',
                              color: '#4a5750',
                              padding: '2px 8px',
                              borderRadius: '12px',
                            }}
                          >
                            {style}
                          </span>
                        ))}
                      </div>
                    </div>

                    <h2 style={{ fontSize: '1.6rem', marginTop: '4px', marginBottom: '12px' }}>
                      <Link href={`/destinations/jaisalmer/${pkg.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                        {pkg.title}
                      </Link>
                    </h2>

                    <p style={{ color: '#4a5750', lineHeight: 1.6, marginBottom: '20px', fontSize: '0.95rem' }}>
                      {pkg.summary}
                    </p>

                    {/* Highlights */}
                    <div style={{ marginBottom: '24px' }}>
                      <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#66726b', fontWeight: 600, display: 'block', marginBottom: '8px' }}>
                        Trip Highlights
                      </span>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '8px' }}>
                        {pkg.highlights.slice(0, 4).map((highlight) => (
                          <li key={highlight} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.85rem', color: '#2d3832' }}>
                            <Check size={16} style={{ color: '#1f5b45', flexShrink: 0, marginTop: '2px' }} />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Pricing and CTAs */}
                  <div
                    style={{
                      borderTop: '1px solid var(--border, #f0eae1)',
                      paddingTop: '20px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      gap: '16px',
                    }}
                  >
                    <div>
                      <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#66726b', display: 'block' }}>
                        Starting Price
                      </span>
                      <strong style={{ fontSize: '1.25rem', color: '#103f32' }}>
                        {pkg.price === null ? 'Price on Request' : `From ₹${pkg.price.toLocaleString('en-IN')} / person`}
                      </strong>
                      <span style={{ display: 'block', fontSize: '0.75rem', color: '#66726b', marginTop: '2px' }}>
                        Starting prices are per person. Final quote depends on dates & stay tier.
                      </span>
                    </div>

                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                      <Link
                        href={`/destinations/jaisalmer/${pkg.slug}`}
                        className="button secondary"
                        style={{ padding: '10px 20px', fontSize: '0.88rem' }}
                      >
                        View Itinerary <ArrowRight size={16} />
                      </Link>
                      <Link
                        href={`/contact?package=${encodeURIComponent(pkg.slug)}`}
                        className="button"
                        style={{ padding: '10px 20px', fontSize: '0.88rem' }}
                        data-event="package_enquiry_click"
                      >
                        Get Custom Quote <ArrowUpRight size={16} />
                      </Link>
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button"
                        style={{
                          padding: '10px 16px',
                          fontSize: '0.88rem',
                          background: '#25D366',
                          borderColor: '#25D366',
                          color: '#ffffff',
                        }}
                        data-event="whatsapp_click"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* FolkMiles Customization Promise */}
      <section className="wrap section" style={{ paddingTop: '0' }}>
        <div
          style={{
            background: '#f7f4ef',
            borderRadius: '16px',
            padding: '40px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
          }}
        >
          <div>
            <Compass size={32} style={{ color: '#1f5b45', marginBottom: '12px' }} />
            <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Private & Flexible</h3>
            <p style={{ fontSize: '0.9rem', color: '#4a5750', lineHeight: 1.6 }}>
              Every itinerary is completely private for you and your travelling companions. No crowded tour buses, no rigid schedules.
            </p>
          </div>
          <div>
            <MapPin size={32} style={{ color: '#9c4826', marginBottom: '12px' }} />
            <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Shaped by Locals</h3>
            <p style={{ fontSize: '0.9rem', color: '#4a5750', lineHeight: 1.6 }}>
              Routes planned around comfortable walking times, authentic family havelis, and secluded desert dunes away from the crowd.
            </p>
          </div>
          <div>
            <Sparkles size={32} style={{ color: '#1f5b45', marginBottom: '12px' }} />
            <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Transparent Written Quotes</h3>
            <p style={{ fontSize: '0.9rem', color: '#4a5750', lineHeight: 1.6 }}>
              Clear breakdown of vehicle category, driver allowances, stay options, and inclusions. No surprise extra charges on the road.
            </p>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
