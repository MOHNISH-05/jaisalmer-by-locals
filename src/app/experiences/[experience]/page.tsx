import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowUpRight,
  Check,
  X as XIcon,
  Sparkles,
  AlertCircle,
  Package,
  HelpCircle,
  ShieldCheck,
} from 'lucide-react';
import { experiencesList, getExperienceBySlug } from '@/lib/experiences';
import { getPackageBySlug } from '@/lib/packages';
import { folkMilesContact } from '@/lib/contact';
import { metadata, BreadcrumbSchema, JsonLd } from '@/lib/seo';
import { brand } from '@/lib/config';
import { Breadcrumbs, Eyebrow, CTA } from '@/components/ui';

export function generateStaticParams() {
  return experiencesList.map((exp) => ({ experience: exp.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ experience: string }> }) {
  const { experience } = await params;
  const exp = getExperienceBySlug(experience);
  return exp
    ? metadata(
        exp.seoTitle,
        exp.seoDescription,
        `/experiences/${exp.slug}`
      )
    : { title: 'Not found' };
}

export default async function ExperiencePage({ params }: { params: Promise<{ experience: string }> }) {
  const { experience } = await params;
  const exp = getExperienceBySlug(experience);
  if (!exp) notFound();

  const isTharExperience = exp.slug === 'jaisalmer-desert-safari';

  const encodedWaMessage = isTharExperience
    ? encodeURIComponent(
        `Hi FolkMiles,\n\nI’m interested in the Thar Desert Sunset & Cultural Experience starting from ₹2,100/person.\n\nTravel date:\nNumber of travellers:\n\nCould you help me plan it?`
      )
    : encodeURIComponent(
        `Hi FolkMiles,\n\nI’m interested in the ${exp.title} in Jaisalmer.\n\nTravel date:\nNumber of travellers:\n\nCould you share availability and details?`
      );

  const waUrl = `https://wa.me/${folkMilesContact.whatsapp}?text=${encodedWaMessage}`;

  // Find related packages
  const relatedPackagesData = exp.relatedPackages
    .map((slug) => getPackageBySlug(slug))
    .filter(Boolean);

  // Find related experiences
  const otherExperiences = experiencesList
    .filter((e) => e.slug !== exp.slug)
    .slice(0, 3);

  return (
    <>
      <div className="wrap">
        <Breadcrumbs
          items={[
            { label: 'Experiences', href: '/experiences' },
            { label: exp.title },
          ]}
        />
      </div>

      {/* 1. HERO */}
      <section className="page-intro wrap">
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px' }}>
          <span className="eyebrow" style={{ color: '#9c4826' }}>
            {exp.eyebrow}
          </span>
          {exp.price && (
            <span
              style={{
                background: '#f2eee8',
                color: '#1f5b45',
                fontSize: '0.8rem',
                fontWeight: 600,
                padding: '2px 10px',
                borderRadius: '12px',
              }}
            >
              From ₹{exp.price.toLocaleString('en-IN')} / person
            </span>
          )}
        </div>
        <h1>{exp.title}</h1>
        <p style={{ maxWidth: '780px', fontSize: '1.15rem', color: '#4a5750', lineHeight: 1.6 }}>
          {isTharExperience
            ? 'A complete evening in the Thar with camel ride, sunset, Rajasthani culture, campfire and dinner — with transfers from Jaisalmer.'
            : exp.shortDescription}
        </p>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '24px', alignItems: 'center' }}>
          <Link
            href={`/contact?experience=${encodeURIComponent(exp.slug)}`}
            className="button"
            data-event="experience_enquiry_click"
          >
            Plan This Experience <ArrowUpRight size={18} />
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

      {/* Hero Image */}
      <div className="wrap wide-photo" style={{ marginBottom: '40px', position: 'relative', height: '460px', borderRadius: '16px', overflow: 'hidden' }}>
        <Image
          src={exp.heroImage}
          alt={exp.heroImageAlt}
          fill
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* 2. AT-A-GLANCE SUMMARY */}
      <section className="wrap" style={{ marginBottom: '40px' }}>
        <div
          style={{
            background: '#faf7f2',
            border: '1px solid var(--border, #e5e0d8)',
            borderRadius: '16px',
            padding: '28px',
          }}
        >
          <h2 style={{ fontSize: '1.2rem', marginBottom: '20px', color: '#1c2621' }}>
            At a Glance
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px',
            }}
          >
            {exp.atAGlance ? (
              exp.atAGlance.map((item) => (
                <div key={item.label}>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#66726b', display: 'block' }}>
                    {item.label}
                  </span>
                  <strong style={{ fontSize: '0.95rem', color: '#1c2621' }}>{item.value}</strong>
                </div>
              ))
            ) : (
              <>
                <div>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#66726b', display: 'block' }}>
                    Duration
                  </span>
                  <strong style={{ fontSize: '0.95rem', color: '#1c2621' }}>{exp.duration}</strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#66726b', display: 'block' }}>
                    Best Season
                  </span>
                  <strong style={{ fontSize: '0.95rem', color: '#1c2621' }}>{exp.bestTime}</strong>
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#66726b', display: 'block' }}>
                    Suited For
                  </span>
                  <strong style={{ fontSize: '0.95rem', color: '#1c2621' }}>{exp.whoItSuits.join(' · ')}</strong>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Main Content + Sidebar */}
      <section className="section wrap editorial-layout" style={{ paddingTop: '0' }}>
        <div className="prose">
          {/* 3. SHORT INTRODUCTION */}
          <section>
            <h2>Overview</h2>
            <p style={{ lineHeight: 1.7, fontSize: '1.05rem', color: '#2d3832' }}>{exp.overview}</p>
          </section>

          {/* 4. AEO QUICK ANSWER */}
          {exp.quickAnswer && (
            <section
              style={{
                margin: '32px 0',
                background: '#f4f8f6',
                border: '1px solid #d1e4dc',
                borderRadius: '12px',
                padding: '24px',
              }}
            >
              <Eyebrow>Quick Answer</Eyebrow>
              <h3 style={{ fontSize: '1.15rem', color: '#1f5b45', margin: '4px 0 10px 0' }}>
                {exp.quickAnswer.question}
              </h3>
              <p style={{ color: '#2d3832', lineHeight: 1.6, margin: 0, fontSize: '0.95rem' }}>
                {exp.quickAnswer.answer}
              </p>
            </section>
          )}

          {/* 5. EXPERIENCE TIMELINE */}
          {exp.timeline && (
            <section style={{ margin: '36px 0' }}>
              <Eyebrow>The evening flow</Eyebrow>
              <h2 style={{ marginTop: '4px', marginBottom: '20px' }}>Experience Timeline</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {exp.timeline.map((step) => (
                  <div
                    key={step.step}
                    style={{
                      display: 'flex',
                      gap: '16px',
                      background: '#ffffff',
                      border: '1px solid var(--border, #e8e3dc)',
                      borderRadius: '12px',
                      padding: '18px 20px',
                      alignItems: 'flex-start',
                    }}
                  >
                    <span
                      style={{
                        background: '#1f5b45',
                        color: '#ffffff',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      {step.step}
                    </span>
                    <div>
                      <h3 style={{ margin: 0, fontSize: '1.05rem', color: '#1c2621' }}>{step.title}</h3>
                      <p style={{ margin: '4px 0 0 0', fontSize: '0.9rem', color: '#4a5750', lineHeight: 1.5 }}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 6 & 7. INCLUSIONS & EXCLUSIONS */}
          {exp.inclusions && (
            <section style={{ margin: '36px 0' }}>
              <Eyebrow>Clear & transparent</Eyebrow>
              <h2 style={{ marginTop: '4px', marginBottom: '20px' }}>What’s Included & Optional</h2>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '24px',
                }}
              >
                {/* Inclusions */}
                <div
                  style={{
                    background: '#f4f8f6',
                    border: '1px solid #d1e4dc',
                    borderRadius: '12px',
                    padding: '24px',
                  }}
                >
                  <h3 style={{ fontSize: '1.1rem', color: '#1f5b45', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Check size={20} /> What’s Included
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {exp.inclusions.map((item) => (
                      <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.88rem', color: '#2d3832' }}>
                        <Check size={16} style={{ color: '#1f5b45', flexShrink: 0, marginTop: '2px' }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Exclusions */}
                {exp.exclusions && (
                  <div
                    style={{
                      background: '#fdf7f6',
                      border: '1px solid #f2d8d5',
                      borderRadius: '12px',
                      padding: '24px',
                    }}
                  >
                    <h3 style={{ fontSize: '1.1rem', color: '#9c4826', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <XIcon size={20} /> Not Included / Optional Add-ons
                    </h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {exp.exclusions.map((item) => (
                        <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.88rem', color: '#2d3832' }}>
                          <XIcon size={16} style={{ color: '#9c4826', flexShrink: 0, marginTop: '2px' }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Price Disclaimer */}
              <p style={{ fontSize: '0.85rem', color: '#66726b', marginTop: '16px', lineHeight: 1.5 }}>
                Starting prices are per person. Final trip cost may vary depending on travel dates, number of travellers, accommodation category, transport requirements and selected experiences.
              </p>
            </section>
          )}

          {/* Why Different */}
          <section style={{ margin: '36px 0' }}>
            <Eyebrow>The FolkMiles approach</Eyebrow>
            <h2 style={{ marginTop: '4px', marginBottom: '16px' }}>Why This Experience is Different</h2>
            <div
              style={{
                background: '#ffffff',
                border: '1px solid var(--border, #e8e3dc)',
                borderRadius: '12px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              {exp.whyDifferent.map((point) => (
                <div key={point} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <Sparkles size={18} style={{ color: '#1f5b45', flexShrink: 0, marginTop: '3px' }} />
                  <span style={{ fontSize: '0.95rem', color: '#2d3832' }}>{point}</span>
                </div>
              ))}
            </div>
          </section>

          {/* What Guests Experience */}
          <section style={{ margin: '36px 0' }}>
            <Eyebrow>What to expect</Eyebrow>
            <h2 style={{ marginTop: '4px', marginBottom: '16px' }}>What You Will Experience</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {exp.whatGuestsExperience.map((item) => (
                <li
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    fontSize: '0.95rem',
                    color: '#2d3832',
                    padding: '8px 0',
                    borderBottom: '1px solid #f2eee8',
                  }}
                >
                  <Check size={18} style={{ color: '#9c4826', flexShrink: 0, marginTop: '2px' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Local Context */}
          <section
            style={{
              margin: '36px 0',
              background: '#f7f4ef',
              borderRadius: '12px',
              padding: '24px',
            }}
          >
            <Eyebrow>Local context</Eyebrow>
            <h3 style={{ marginTop: '4px', marginBottom: '10px', fontSize: '1.2rem', color: '#1c2621' }}>
              Stories Behind the Sand
            </h3>
            <p style={{ color: '#4a5750', lineHeight: 1.6, margin: 0, fontSize: '0.95rem' }}>
              {exp.localContext}
            </p>
          </section>

          {/* Important Notes & What to Bring */}
          <section style={{ margin: '36px 0' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '24px',
              }}
            >
              {/* Important Notes */}
              <div
                style={{
                  background: '#fdfbf7',
                  border: '1px solid #ebd9c8',
                  borderRadius: '12px',
                  padding: '20px',
                }}
              >
                <h4 style={{ fontSize: '1.05rem', color: '#9c4826', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <AlertCircle size={18} /> Important Notes
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {exp.importantNotes.map((note) => (
                    <li key={note} style={{ fontSize: '0.88rem', color: '#4a5750', lineHeight: 1.5 }}>
                      • {note}
                    </li>
                  ))}
                </ul>
              </div>

              {/* What to Bring */}
              <div
                style={{
                  background: '#f4f8f6',
                  border: '1px solid #d1e4dc',
                  borderRadius: '12px',
                  padding: '20px',
                }}
              >
                <h4 style={{ fontSize: '1.05rem', color: '#1f5b45', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Check size={18} /> What to Bring
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {exp.whatToBring.map((item) => (
                    <li key={item} style={{ fontSize: '0.88rem', color: '#4a5750', lineHeight: 1.5 }}>
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Customization */}
          <section style={{ margin: '36px 0' }}>
            <Eyebrow>Flexible planning</Eyebrow>
            <h2 style={{ marginTop: '4px', marginBottom: '12px' }}>How We Can Customize This</h2>
            <p style={{ color: '#4a5750', marginBottom: '16px' }}>
              We adapt timings, group sizes, and complementary stops around your travel itinerary:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {exp.customization.map((item) => (
                <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.92rem', color: '#2d3832' }}>
                  <Check size={16} style={{ color: '#1f5b45', flexShrink: 0, marginTop: '3px' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* FAQs */}
          <section style={{ margin: '36px 0' }}>
            <Eyebrow>Frequently asked questions</Eyebrow>
            <h2 style={{ marginTop: '4px', marginBottom: '16px' }}>Common Questions</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {exp.faq.map((item) => (
                <details
                  key={item.question}
                  style={{
                    border: '1px solid var(--border, #e8e3dc)',
                    borderRadius: '10px',
                    padding: '14px 18px',
                    background: '#ffffff',
                  }}
                >
                  <summary style={{ fontWeight: 600, color: '#1c2621', cursor: 'pointer' }}>
                    {item.question}
                  </summary>
                  <p style={{ margin: '10px 0 0 0', color: '#4a5750', lineHeight: 1.6, fontSize: '0.9rem' }}>
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* Related Experiences */}
          {otherExperiences.length > 0 && (
            <section style={{ margin: '40px 0' }}>
              <Eyebrow>More to explore</Eyebrow>
              <h2 style={{ marginTop: '4px', marginBottom: '20px' }}>Other Signature Experiences</h2>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                  gap: '16px',
                }}
              >
                {otherExperiences.map((oe) => (
                  <Link
                    key={oe.id}
                    href={`/experiences/${oe.slug}`}
                    style={{
                      textDecoration: 'none',
                      color: 'inherit',
                      border: '1px solid var(--border, #e8e3dc)',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      background: '#ffffff',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <div style={{ position: 'relative', height: '140px', width: '100%' }}>
                      <Image src={oe.cardImage} alt={oe.heroImageAlt} fill sizes="240px" style={{ objectFit: 'cover' }} />
                    </div>
                    <div style={{ padding: '16px' }}>
                      <span className="eyebrow" style={{ color: '#9c4826', fontSize: '0.75rem', marginBottom: '2px', display: 'block' }}>
                        {oe.eyebrow}
                      </span>
                      <strong style={{ fontSize: '1rem', display: 'block', marginBottom: '4px' }}>
                        {oe.cardTitle || oe.title}
                      </strong>
                      <span style={{ fontSize: '0.8rem', color: '#66726b' }}>
                        View details →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <aside className="sidebar">
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
            <Eyebrow>Experience enquiry</Eyebrow>
            <h3 style={{ fontSize: '1.25rem', marginTop: '4px', marginBottom: '8px' }}>
              Plan This Experience
            </h3>
            {exp.price && (
              <div style={{ marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid var(--border, #f0eae1)' }}>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#66726b', display: 'block' }}>
                  Starting Price
                </span>
                <strong style={{ fontSize: '1.3rem', color: '#103f32' }}>
                  From ₹{exp.price.toLocaleString('en-IN')} / person
                </strong>
                <span style={{ display: 'block', fontSize: '0.75rem', color: '#66726b', marginTop: '4px', lineHeight: 1.4 }}>
                  Starting prices are per person. Final quote depends on dates and party size.
                </span>
              </div>
            )}
            <p style={{ fontSize: '0.88rem', color: '#4a5750', lineHeight: 1.5, marginBottom: '20px' }}>
              Tell us your preferred date and party size. We’ll confirm availability and integrate it into your itinerary.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Link
                href={`/contact?experience=${encodeURIComponent(exp.slug)}`}
                className="button"
                style={{ width: '100%', justifyContent: 'center' }}
                data-event="sidebar_experience_enquiry"
              >
                Plan This Experience <ArrowUpRight size={18} />
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
                marginTop: '20px',
                fontSize: '0.82rem',
                color: '#66726b',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={16} style={{ color: '#1f5b45' }} />
                <span>Verified Local Partner Arrangements</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Sparkles size={16} style={{ color: '#9c4826' }} />
                <span>Customizable Timings & Stops</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <HelpCircle size={16} style={{ color: '#1f5b45' }} />
                <span>Transparent Written Quotations</span>
              </div>
            </div>
          </div>

          {/* Related Packages */}
          {relatedPackagesData.length > 0 && (
            <div
              style={{
                background: '#faf7f2',
                border: '1px solid var(--border, #e5e0d8)',
                borderRadius: '16px',
                padding: '24px',
              }}
            >
              <h4 style={{ fontSize: '1.05rem', marginBottom: '14px', color: '#1c2621', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Package size={18} /> Included in These Packages
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {relatedPackagesData.map((pkg) => (
                  <Link
                    key={pkg!.slug}
                    href={`/destinations/jaisalmer/${pkg!.slug}`}
                    style={{
                      textDecoration: 'none',
                      display: 'block',
                      background: '#ffffff',
                      padding: '12px',
                      borderRadius: '8px',
                      border: '1px solid #e8e3dc',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                      <span style={{ fontSize: '0.75rem', color: '#9c4826', fontWeight: 600 }}>
                        {pkg!.duration}
                      </span>
                      {pkg!.price && (
                        <span style={{ fontSize: '0.75rem', color: '#1f5b45', fontWeight: 600 }}>
                          From ₹{pkg!.price.toLocaleString('en-IN')}
                        </span>
                      )}
                    </div>
                    <strong style={{ fontSize: '0.9rem', color: '#1c2621', display: 'block', marginTop: '2px' }}>
                      {pkg!.title}
                    </strong>
                    <span style={{ fontSize: '0.8rem', color: '#66726b', marginTop: '2px', display: 'block' }}>
                      View full itinerary →
                    </span>
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
          { label: 'Experiences', path: '/experiences' },
          { label: exp.title, path: `/experiences/${exp.slug}` },
        ]}
      />
      <JsonLd
        value={{
          '@context': 'https://schema.org',
          '@type': 'TouristTrip',
          name: exp.title,
          description: exp.overview,
          touristType: exp.whoItSuits,
          ...(brand.domain ? { url: `${brand.domain}/experiences/${exp.slug}` } : {}),
        }}
      />
    </>
  );
}
