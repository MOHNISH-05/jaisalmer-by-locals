import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowUpRight,
  Check,
  X as XIcon,
  ShieldCheck,
  Sparkles,
  HelpCircle,
} from 'lucide-react';
import { jaisalmerPackages, getPackageBySlug } from '@/lib/packages';
import { folkMilesContact } from '@/lib/contact';
import { metadata, BreadcrumbSchema, JsonLd } from '@/lib/seo';
import { brand } from '@/lib/config';
import { Breadcrumbs, Eyebrow, CTA } from '@/components/ui';

export function generateStaticParams() {
  return jaisalmerPackages.map((pkg) => ({ tour: pkg.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ tour: string }> }) {
  const { tour } = await params;
  const pkg = getPackageBySlug(tour);
  return pkg
    ? metadata(
        pkg.seoTitle,
        pkg.seoDescription,
        `/destinations/jaisalmer/${pkg.slug}`
      )
    : { title: 'Not found' };
}

export default async function TourPage({ params }: { params: Promise<{ tour: string }> }) {
  const { tour } = await params;
  const pkg = getPackageBySlug(tour);
  if (!pkg) notFound();

  const pkgPriceText = pkg.price ? `starting from ₹${pkg.price.toLocaleString('en-IN')}/person` : '';
  const encodedWaMessage = encodeURIComponent(
    `Hi FolkMiles,\n\nI’m interested in the ${pkg.duration} Jaisalmer Journey ${pkgPriceText}.\n\nTravel date:\nNumber of travellers:\n\nCould you help me customize the trip?`
  );
  const waUrl = `https://wa.me/${folkMilesContact.whatsapp}?text=${encodedWaMessage}`;

  return (
    <>
      <div className="wrap">
        <Breadcrumbs
          items={[
            { label: 'Destinations', href: '/#destinations' },
            { label: 'Jaisalmer', href: '/destinations/jaisalmer' },
            { label: 'Packages', href: '/jaisalmer-packages' },
            { label: pkg.duration },
          ]}
        />
      </div>

      {/* 1. HERO */}
      <section className="page-intro wrap">
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px' }}>
          <span className="eyebrow" style={{ color: '#9c4826' }}>
            Jaisalmer Private Journey · {pkg.duration}
          </span>
          <span
            style={{
              background: '#f2eee8',
              color: '#4a5750',
              fontSize: '0.75rem',
              fontWeight: 600,
              padding: '2px 8px',
              borderRadius: '12px',
            }}
          >
            {pkg.shortTitle}
          </span>
        </div>
        <h1>{pkg.title}</h1>
        <p style={{ maxWidth: '780px', fontSize: '1.15rem', color: '#4a5750', lineHeight: 1.6 }}>
          {pkg.subtitle}
        </p>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '24px', alignItems: 'center' }}>
          <Link
            href={`/contact?package=${encodeURIComponent(pkg.slug)}`}
            className="button"
            data-event="package_enquiry_click"
          >
            Plan This Journey <ArrowUpRight size={18} />
          </Link>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button secondary"
            data-event="whatsapp_click"
            style={{ borderColor: '#25D366', color: '#166534' }}
          >
            WhatsApp Us
          </a>
        </div>
      </section>

      {/* Hero Image */}
      <div className="wrap wide-photo" style={{ marginBottom: '40px', position: 'relative', height: '480px', borderRadius: '16px', overflow: 'hidden' }}>
        <Image
          src={pkg.heroImage}
          alt={pkg.heroImageAlt}
          fill
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* 2. QUICK TRIP SUMMARY */}
      <section className="wrap" style={{ marginBottom: '48px' }}>
        <div
          style={{
            background: '#faf7f2',
            border: '1px solid var(--border, #e5e0d8)',
            borderRadius: '16px',
            padding: '32px',
          }}
        >
          <h2 style={{ fontSize: '1.25rem', marginBottom: '20px', color: '#1c2621' }}>
            Quick Trip Summary
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '20px',
            }}
          >
            <div>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#66726b', display: 'block' }}>
                Starting Price
              </span>
              <strong style={{ fontSize: '0.95rem', color: '#103f32' }}>
                {pkg.price ? `From ₹${pkg.price.toLocaleString('en-IN')} / person` : 'Price on Request'}
              </strong>
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#66726b', display: 'block' }}>
                Duration
              </span>
              <strong style={{ fontSize: '0.95rem', color: '#1c2621' }}>{pkg.quickSummary.duration}</strong>
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#66726b', display: 'block' }}>
                Destination
              </span>
              <strong style={{ fontSize: '0.95rem', color: '#1c2621' }}>{pkg.quickSummary.destination}</strong>
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#66726b', display: 'block' }}>
                Travel Style
              </span>
              <strong style={{ fontSize: '0.95rem', color: '#1c2621' }}>{pkg.quickSummary.travelStyle}</strong>
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#66726b', display: 'block' }}>
                Best For
              </span>
              <strong style={{ fontSize: '0.95rem', color: '#1c2621' }}>{pkg.quickSummary.bestFor}</strong>
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#66726b', display: 'block' }}>
                Customization
              </span>
              <strong style={{ fontSize: '0.95rem', color: '#1c2621' }}>{pkg.quickSummary.customization}</strong>
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#66726b', display: 'block' }}>
                Transport
              </span>
              <strong style={{ fontSize: '0.95rem', color: '#1c2621' }}>{pkg.quickSummary.transport}</strong>
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#66726b', display: 'block' }}>
                Local Guide
              </span>
              <strong style={{ fontSize: '0.95rem', color: '#1c2621' }}>{pkg.quickSummary.guide}</strong>
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#66726b', display: 'block' }}>
                Desert Experience
              </span>
              <strong style={{ fontSize: '0.95rem', color: '#1c2621' }}>{pkg.quickSummary.desertStatus}</strong>
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#66726b', display: 'block' }}>
                Accommodation
              </span>
              <strong style={{ fontSize: '0.95rem', color: '#1c2621' }}>{pkg.quickSummary.accommodationStatus}</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content + Sidebar Layout */}
      <section className="section wrap editorial-layout" style={{ paddingTop: '0' }}>
        <div className="prose">
          {/* 3. SHORT INTRODUCTION */}
          <section>
            <h2>A flexible journey, shaped around you</h2>
            <p>{pkg.description}</p>
            <p>
              Arrival times, seasonal weather, group dynamics, and personal walking comfort all shape the best
              expression of this route. We begin with this thoughtful starting structure, then tailor every detail
              before confirming a written itinerary.
            </p>
          </section>

          {/* 4. TRIP HIGHLIGHTS */}
          <section style={{ margin: '32px 0' }}>
            <Eyebrow>What makes this journey special</Eyebrow>
            <h2 style={{ marginTop: '4px', marginBottom: '16px' }}>Trip Highlights</h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '12px',
                background: '#ffffff',
                border: '1px solid var(--border, #e8e3dc)',
                borderRadius: '12px',
                padding: '24px',
              }}
            >
              {pkg.highlights.map((highlight) => (
                <div key={highlight} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <Check size={18} style={{ color: '#1f5b45', flexShrink: 0, marginTop: '3px' }} />
                  <span style={{ fontSize: '0.95rem', color: '#2d3832' }}>{highlight}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 5. DAY-BY-DAY ITINERARY */}
          <section style={{ margin: '40px 0' }}>
            <Eyebrow>The daily flow</Eyebrow>
            <h2 style={{ marginTop: '4px', marginBottom: '24px' }}>Day-by-Day Itinerary</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {pkg.itinerary.map((day) => (
                <article
                  key={day.day}
                  style={{
                    border: '1px solid var(--border, #e8e3dc)',
                    borderRadius: '16px',
                    padding: '28px',
                    background: '#ffffff',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <span
                      style={{
                        background: '#1f5b45',
                        color: '#ffffff',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        padding: '4px 12px',
                        borderRadius: '20px',
                      }}
                    >
                      DAY {day.day}
                    </span>
                    <h3 style={{ margin: 0, fontSize: '1.3rem', color: '#1c2621' }}>{day.title}</h3>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>
                    <div>
                      <strong style={{ fontSize: '0.85rem', color: '#9c4826', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>
                        Morning
                      </strong>
                      <p style={{ margin: 0, fontSize: '0.95rem', color: '#4a5750', lineHeight: 1.6 }}>{day.morning}</p>
                    </div>
                    <div>
                      <strong style={{ fontSize: '0.85rem', color: '#9c4826', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>
                        Afternoon
                      </strong>
                      <p style={{ margin: 0, fontSize: '0.95rem', color: '#4a5750', lineHeight: 1.6 }}>{day.afternoon}</p>
                    </div>
                    {day.evening && (
                      <div>
                        <strong style={{ fontSize: '0.85rem', color: '#9c4826', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>
                          Evening
                        </strong>
                        <p style={{ margin: 0, fontSize: '0.95rem', color: '#4a5750', lineHeight: 1.6 }}>{day.evening}</p>
                      </div>
                    )}
                  </div>

                  {/* Context & Practical Notes */}
                  <div
                    style={{
                      background: '#f7f4ef',
                      borderRadius: '10px',
                      padding: '16px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                      fontSize: '0.88rem',
                    }}
                  >
                    <div>
                      <strong style={{ color: '#1c2621' }}>Local Context: </strong>
                      <span style={{ color: '#4a5750' }}>{day.context}</span>
                    </div>
                    <div>
                      <strong style={{ color: '#1c2621' }}>Practical Note: </strong>
                      <span style={{ color: '#4a5750' }}>{day.practicalNotes}</span>
                    </div>
                    {day.alternatives && (
                      <div>
                        <strong style={{ color: '#1c2621' }}>Optional Alternative: </strong>
                        <span style={{ color: '#4a5750' }}>{day.alternatives}</span>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* 6 & 7. INCLUSIONS & EXCLUSIONS */}
          <section style={{ margin: '40px 0' }}>
            <Eyebrow>Clear & transparent</Eyebrow>
            <h2 style={{ marginTop: '4px', marginBottom: '20px' }}>What’s Included & Excluded</h2>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '24px',
              }}
            >
              {/* Possible Inclusions */}
              <div
                style={{
                  background: '#f4f8f6',
                  border: '1px solid #d1e4dc',
                  borderRadius: '12px',
                  padding: '24px',
                }}
              >
                <h3 style={{ fontSize: '1.1rem', color: '#1f5b45', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={20} /> Possible Inclusions
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {pkg.possibleInclusions.map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.88rem', color: '#2d3832' }}>
                      <Check size={16} style={{ color: '#1f5b45', flexShrink: 0, marginTop: '2px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Possible Exclusions */}
              <div
                style={{
                  background: '#fdf7f6',
                  border: '1px solid #f2d8d5',
                  borderRadius: '12px',
                  padding: '24px',
                }}
              >
                <h3 style={{ fontSize: '1.1rem', color: '#9c4826', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <XIcon size={20} /> Not Included / Depends on Package
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {pkg.possibleExclusions.map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.88rem', color: '#2d3832' }}>
                      <XIcon size={16} style={{ color: '#9c4826', flexShrink: 0, marginTop: '2px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p style={{ fontSize: '0.85rem', color: '#66726b', marginTop: '12px' }}>
              * Exact inclusions, stay categories, vehicle model, and meal plans are explicitly itemized in your written quotation before booking.
            </p>
          </section>

          {/* 8. ACCOMMODATION OPTIONS */}
          <section style={{ margin: '40px 0' }}>
            <Eyebrow>Hand-picked stays</Eyebrow>
            <h2 style={{ marginTop: '4px', marginBottom: '16px' }}>Accommodation Categories</h2>
            <p style={{ color: '#4a5750', marginBottom: '20px' }}>
              We collaborate with verified independent properties that reflect authentic Rajasthani hospitality. You can select your preferred tier during planning:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {pkg.accommodationOptions.map((opt) => (
                <div
                  key={opt.tier}
                  style={{
                    border: '1px solid var(--border, #e8e3dc)',
                    borderRadius: '12px',
                    padding: '20px',
                    background: '#ffffff',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <h4 style={{ margin: 0, fontSize: '1.05rem', color: '#1c2621' }}>{opt.label}</h4>
                    <span style={{ fontSize: '0.75rem', background: '#f2eee8', padding: '2px 8px', borderRadius: '10px', color: '#66726b' }}>
                      {opt.tier}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: '#4a5750', margin: '4px 0 8px 0', lineHeight: 1.5 }}>
                    {opt.description}
                  </p>
                  {opt.recommendation && (
                    <span style={{ fontSize: '0.8rem', color: '#1f5b45', fontWeight: 500 }}>
                      Recommended for: {opt.recommendation}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* 9 & 10. TRANSPORT & CUSTOMIZE YOUR JOURNEY */}
          <section style={{ margin: '40px 0' }}>
            <Eyebrow>Your trip, your way</Eyebrow>
            <h2 style={{ marginTop: '4px', marginBottom: '16px' }}>Customize This Journey</h2>
            <p style={{ color: '#4a5750', marginBottom: '20px' }}>
              FolkMiles itineraries are starting points designed to be shaped around you. Every element can be adjusted:
            </p>

            <div
              style={{
                background: '#f7f4ef',
                borderRadius: '12px',
                padding: '24px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '16px',
                marginBottom: '24px',
              }}
            >
              {pkg.customizationOptions.map((opt) => (
                <div key={opt} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <Sparkles size={16} style={{ color: '#9c4826', flexShrink: 0, marginTop: '3px' }} />
                  <span style={{ fontSize: '0.9rem', color: '#2d3832' }}>{opt}</span>
                </div>
              ))}
            </div>

            <Link
              href={`/contact?package=${encodeURIComponent(pkg.slug)}&action=customize`}
              className="button"
              data-event="package_customize_click"
            >
              Customize This Trip <ArrowUpRight size={18} />
            </Link>
          </section>

          {/* 11. PRICING & QUOTE BLOCK */}
          <section
            style={{
              margin: '40px 0',
              background: '#ffffff',
              border: '2px solid var(--primary, #1f5b45)',
              borderRadius: '16px',
              padding: '32px',
            }}
          >
            <Eyebrow>Transparent trip quotation</Eyebrow>
            <h2 style={{ marginTop: '4px', marginBottom: '8px', color: '#103f32' }}>
              {pkg.price === null ? 'Price on Request' : `From ₹${pkg.price.toLocaleString('en-IN')} / person`}
            </h2>
            <p style={{ color: '#4a5750', lineHeight: 1.6, marginBottom: '8px' }}>
              Starting prices are per person. Final trip cost may vary depending on travel dates, number of travellers, accommodation category, transport requirements and selected experiences.
            </p>
            <p style={{ color: '#66726b', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '24px' }}>
              We do not use fake discount countdowns or inflated crossed-out rates. Every guest receives an itemized, clear written quotation tailored to their travel dates.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link
                href={`/contact?package=${encodeURIComponent(pkg.slug)}`}
                className="button"
                data-event="package_quote_click"
              >
                Get My Custom Quote <ArrowUpRight size={18} />
              </Link>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button secondary"
                data-event="whatsapp_click"
                style={{ borderColor: '#25D366', color: '#166534' }}
              >
                WhatsApp FolkMiles
              </a>
            </div>
          </section>

          {/* 12. PACKAGE-SPECIFIC FAQS */}
          <section style={{ margin: '40px 0' }}>
            <Eyebrow>Frequently asked questions</Eyebrow>
            <h2 style={{ marginTop: '4px', marginBottom: '20px' }}>Questions About This Journey</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {pkg.faq.map((item) => (
                <details
                  key={item.question}
                  style={{
                    border: '1px solid var(--border, #e8e3dc)',
                    borderRadius: '10px',
                    padding: '16px 20px',
                    background: '#ffffff',
                  }}
                >
                  <summary style={{ fontWeight: 600, color: '#1c2621', cursor: 'pointer' }}>
                    {item.question}
                  </summary>
                  <p style={{ margin: '12px 0 0 0', color: '#4a5750', lineHeight: 1.6, fontSize: '0.92rem' }}>
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
        </div>

        {/* Sticky Sidebar */}
        <aside className="sidebar">
          <div
            style={{
              background: '#ffffff',
              border: '1px solid var(--border, #e8e3dc)',
              borderRadius: '16px',
              padding: '24px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
            }}
          >
            <Eyebrow>Ready when you are</Eyebrow>
            <h3 style={{ fontSize: '1.25rem', marginTop: '4px', marginBottom: '8px' }}>
              Plan Your {pkg.duration} Journey
            </h3>
            {pkg.price && (
              <div style={{ marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid var(--border, #f0eae1)' }}>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#66726b', display: 'block' }}>
                  Starting Price
                </span>
                <strong style={{ fontSize: '1.3rem', color: '#103f32' }}>
                  From ₹{pkg.price.toLocaleString('en-IN')} / person
                </strong>
                <span style={{ display: 'block', fontSize: '0.75rem', color: '#66726b', marginTop: '4px', lineHeight: 1.4 }}>
                  Starting prices are per person. Final quote depends on dates and stay category.
                </span>
              </div>
            )}
            <p style={{ fontSize: '0.88rem', color: '#4a5750', lineHeight: 1.5, marginBottom: '20px' }}>
              Share your dates and group size. We’ll prepare a personalized itinerary and written quotation.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
              <Link
                href={`/contact?package=${encodeURIComponent(pkg.slug)}`}
                className="button"
                style={{ width: '100%', justifyContent: 'center' }}
                data-event="sidebar_plan_click"
              >
                Plan This Journey <ArrowUpRight size={18} />
              </Link>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button secondary"
                style={{ width: '100%', justifyContent: 'center', borderColor: '#25D366', color: '#166534' }}
                data-event="sidebar_whatsapp_click"
              >
                WhatsApp FolkMiles
              </a>
            </div>

            <div
              style={{
                borderTop: '1px solid var(--border, #f0eae1)',
                paddingTop: '16px',
                fontSize: '0.82rem',
                color: '#66726b',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={16} style={{ color: '#1f5b45' }} />
                <span>100% Private Chauffeured Tour</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Sparkles size={16} style={{ color: '#9c4826' }} />
                <span>Fully Customizable Schedule</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <HelpCircle size={16} style={{ color: '#1f5b45' }} />
                <span>Human Support Before & On Trip</span>
              </div>
            </div>
          </div>
        </aside>
      </section>

      {/* 13. FINAL CTA */}
      <CTA />

      {/* Structured Data */}
      <BreadcrumbSchema
        items={[
          { label: 'Destinations', path: '/#destinations' },
          { label: 'Jaisalmer', path: '/destinations/jaisalmer' },
          { label: 'Packages', path: '/jaisalmer-packages' },
          { label: pkg.duration, path: `/destinations/jaisalmer/${pkg.slug}` },
        ]}
      />
      <JsonLd
        value={{
          '@context': 'https://schema.org',
          '@type': 'TouristTrip',
          name: pkg.title,
          description: pkg.description,
          touristType: pkg.bestFor,
          itinerary: {
            '@type': 'ItemList',
            itemListElement: pkg.itinerary.map((d, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: d.title,
              description: `${d.morning} ${d.afternoon} ${d.evening || ''}`,
            })),
          },
          ...(brand.domain ? { url: `${brand.domain}/destinations/jaisalmer/${pkg.slug}` } : {}),
        }}
      />
    </>
  );
}
