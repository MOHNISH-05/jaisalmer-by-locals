import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Plane,
  Train,
  Bed,
  Utensils,
} from 'lucide-react';
import {
  Breadcrumbs,
  Button,
  CTA,
  Eyebrow,
  Photo,
  QuoteNote,
  SectionTitle,
} from '@/components/ui';
import { jaisalmerPackages } from '@/lib/packages';
import { experiencesList } from '@/lib/experiences';
import { metadata, JsonLd, BreadcrumbSchema } from '@/lib/seo';
import { brand } from '@/lib/config';

export const generateMetadata = () =>
  metadata(
    'Jaisalmer Travel Guide & Tours | FolkMiles',
    'Plan a private Jaisalmer journey with local knowledge. Explore the living fort, merchant havelis, Bada Bagh, Kuldhara, and Thar desert camps with flexible itineraries.',
    '/destinations/jaisalmer'
  );

const topPlaces = [
  {
    name: 'Jaisalmer Fort (Sonar Qila)',
    tagline: 'A Living 12th-Century Sandstone Citadel',
    description: 'One of the few inhabited forts in the world. Thousands of residents live within yellow sandstone ramparts housing ancient Jain temples and the Maharaja Mahal.',
    image: '/images/jaisalmer/fort-palace.jpg',
    alt: 'Maharaja Mahal palace facade and carved sandstone balconies inside Jaisalmer Fort',
  },
  {
    name: 'Patwon Ki Haveli',
    tagline: 'Silk Route Merchant Splendour',
    description: 'A cluster of five palatial havelis built by a wealthy 19th-century brocade merchant, featuring over 60 stone-carved jharokha balconies.',
    image: '/heritage.jpg',
    alt: 'Intricate sandstone jali carvings and wooden window shutters on Patwon Ki Haveli',
  },
  {
    name: 'Nathmal Ki Haveli',
    tagline: 'Carved by Hereditary Sculptor Brothers',
    description: 'An architectural marvel carved simultaneously by two brothers from opposite sides, guarded by life-sized yellow sandstone elephants.',
    image: '/images/jaisalmer/nathmal-haveli.jpg',
    alt: 'Nathmal Ki Haveli facade with carved stone elephants and sandstone jharokhas',
  },
  {
    name: 'Gadisar Lake',
    tagline: 'Historic Rainwater Sanctuary & Ghats',
    description: 'A 14th-century artificial oasis encircled by carved stone chhatris, shrines, and the iconic Tilon Ki Pol gateway. Ideal for tranquil morning visits.',
    image: '/images/jaisalmer/amar-sagar.jpg',
    alt: 'Tranquil water oasis with carved stone pavilions at Gadisar Lake',
  },
  {
    name: 'Bada Bagh',
    tagline: 'Royal Memorial Chhatris on a Desert Ridge',
    description: 'Sandstone cenotaphs commemorating the Maharawals of Jaisalmer, glowing with deep amber hues during late afternoon.',
    image: '/images/jaisalmer/bada-bagh.jpg',
    alt: 'Royal cenotaph chhatri of the Maharawals at Bada Bagh framed through a stone arch',
  },
  {
    name: 'Kuldhara Abandoned Village',
    tagline: 'The Mysterious 19th-Century Ghost Village',
    description: 'An affluent settlement of 84 villages abandoned overnight in 1825 by Paliwal Brahmins, preserving poignant ruins of desert stone homes.',
    image: '/images/jaisalmer/living-lanes.jpg',
    alt: 'Ruins and stone walls of Kuldhara abandoned village in the desert',
  },
  {
    name: 'Sam Sand Dunes',
    tagline: 'Classic Thar Desert Dunes & Camps',
    description: 'Sweeping wind-rippled sand dunes offering sunset camel safaris, quiet evening walks, fireside folk music, and starlit luxury tent camps.',
    image: '/desert.jpg',
    alt: 'Sweeping wind-rippled sand dunes in the Thar Desert near Jaisalmer',
  },
];

export default function JaisalmerDestinationPage() {
  return (
    <>
      {/* Hero */}
      <section className="destination-hero">
        <Photo name="fort" alt="Jaisalmer Fort glowing at sunset above the Golden City" priority />
        <div className="hero-shade" />
        <div className="wrap hero-content">
          <Eyebrow>Jaisalmer, Rajasthan · The Golden City</Eyebrow>
          <h1>
            The Golden City,<br />
            <em>your way.</em>
          </h1>
          <p>
            Private Jaisalmer journeys shaped around your time, pace, and curiosity—from the living fort
            and merchant havelis to quiet dunes in the Thar Desert.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '20px' }}>
            <Button href="/contact" event="plan_trip_click">Plan My Jaisalmer Trip</Button>
            <Link href="/jaisalmer-packages" className="button secondary">
              View Tour Packages <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <div className="wrap">
        <Breadcrumbs items={[{ label: 'Destinations', href: '/#destinations' }, { label: 'Jaisalmer' }]} />
      </div>

      {/* Overview & Why Visit */}
      <section className="section wrap">
        <SectionTitle eyebrow="A city in the sand" title="Jaisalmer rewards the curious." />
        <div className="editorial-layout">
          <div className="prose">
            <section>
              <h2>More than a fort on the horizon</h2>
              <p>
                Jaisalmer unfolds in distinct layers: cobblestone alleys inside a lived-in 12th-century fort,
                stone-carved merchant havelis, bustling bazaars, and the quiet open road leading into the Thar Desert.
                A well-paced visit leaves room for both its celebrated architectural landmarks and its quiet, unhurried moments.
              </p>
              <p>
                FolkMiles plans private, customized journeys rather than rigid packages. Tell us your arrival time,
                who is travelling, and what you enjoy; we shape a route around your real schedule and comfort.
              </p>
            </section>

            <section>
              <h2>Why visit Jaisalmer</h2>
              <p>
                Visit for the living-fort experience—a rarity in world heritage where four thousand people still dwell within medieval battlements.
                Linger for the filigreed sandstone havelis that look like carved lace, the quiet dusk at Gadisar Lake,
                and the silent, starlit expanse of the Thar Desert. Every experience is arranged with verified local hosts who understand their home deeply.
              </p>
            </section>

            <section>
              <h2>Best time to visit</h2>
              <p>
                The cooler months from <strong>October through March</strong> offer the most comfortable weather for outdoor exploring.
                Days are sunny and mild (20°C to 28°C), while desert nights turn refreshingly cool (8°C to 15°C).
                Early mornings and late afternoons are the best hours for walking the old city and riding the dunes.
              </p>
            </section>

            <section>
              <h2>How many days should you stay?</h2>
              <p>
                <strong>2 Days:</strong> Covers the essential introduction—Jaisalmer Fort, old-city havelis, Gadisar Lake, and a sunset desert excursion.
              </p>
              <p>
                <strong>3 Days (Recommended):</strong> Our most popular balance—ample time to explore the fort and havelis without rushing, plus an overnight stay in a luxury Swiss desert camp under the stars.
              </p>
              <p>
                <strong>4 Days:</strong> Allows a deeper, contemplative journey with excursions to Bada Bagh cenotaphs, Kuldhara ghost village, Desert National Park, and rural artisan communities.
              </p>
            </section>
          </div>

          <aside className="sidebar">
            <div
              style={{
                background: '#faf7f2',
                border: '1px solid var(--border, #e5e0d8)',
                borderRadius: '16px',
                padding: '24px',
              }}
            >
              <Eyebrow>Local Trip Designer</Eyebrow>
              <h3 style={{ fontSize: '1.25rem', marginTop: '4px', marginBottom: '8px' }}>
                Plan With a Local
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#4a5750', lineHeight: 1.5, marginBottom: '20px' }}>
                We use your dates, group size, stay preferences, and interests to prepare an itemized written quotation.
              </p>
              <Button href="/contact" event="plan_trip_click">Plan My Trip</Button>
            </div>
          </aside>
        </div>
      </section>

      {/* Top Places in Jaisalmer */}
      <section className="section wrap" style={{ paddingTop: '0' }}>
        <SectionTitle eyebrow="The landmarks & secrets" title="Top Places to Explore in Jaisalmer" />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
          }}
        >
          {topPlaces.map((place) => (
            <div
              key={place.name}
              style={{
                background: '#ffffff',
                border: '1px solid var(--border, #e8e3dc)',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
              }}
            >
              <div style={{ position: 'relative', height: '220px', width: '100%' }}>
                <Image
                  src={place.image}
                  alt={place.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '24px' }}>
                <span className="eyebrow" style={{ color: '#9c4826', marginBottom: '4px', display: 'block' }}>
                  {place.tagline}
                </span>
                <h3 style={{ fontSize: '1.25rem', marginTop: '2px', marginBottom: '8px', color: '#1c2621' }}>
                  {place.name}
                </h3>
                <p style={{ color: '#4a5750', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                  {place.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tour Packages Section */}
      <section className="section wrap" style={{ paddingTop: '0' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '28px',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div>
            <Eyebrow>Curated Starting Itineraries</Eyebrow>
            <h2 style={{ fontSize: '1.8rem', margin: '4px 0 0 0' }}>Jaisalmer Tour Packages</h2>
          </div>
          <Link href="/jaisalmer-packages" className="text-link" style={{ fontWeight: 600 }}>
            View all packages & custom quotes →
          </Link>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
          }}
        >
          {jaisalmerPackages.map((pkg) => (
            <div
              key={pkg.id}
              style={{
                border: '1px solid var(--border, #e8e3dc)',
                borderRadius: '14px',
                padding: '24px',
                background: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <span className="eyebrow" style={{ color: '#9c4826', marginBottom: '4px', display: 'block' }}>
                  {pkg.duration}
                </span>
                <h3 style={{ fontSize: '1.2rem', marginTop: '2px', marginBottom: '8px' }}>
                  <Link href={`/destinations/jaisalmer/${pkg.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {pkg.title}
                  </Link>
                </h3>
                <p style={{ color: '#4a5750', fontSize: '0.88rem', lineHeight: 1.5, marginBottom: '16px' }}>
                  {pkg.summary}
                </p>
              </div>
              <div
                style={{
                  borderTop: '1px solid #f0eae1',
                  paddingTop: '14px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <strong style={{ fontSize: '0.95rem', color: '#103f32' }}>
                  {pkg.price ? `From ₹${pkg.price.toLocaleString('en-IN')}/person` : 'Price on Request'}
                </strong>
                <Link href={`/destinations/jaisalmer/${pkg.slug}`} className="button secondary" style={{ padding: '6px 14px', fontSize: '0.82rem' }}>
                  Itinerary <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Signature Experiences */}
      <section className="section wrap" style={{ paddingTop: '0' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '28px',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div>
            <Eyebrow>Go Beyond the Tourist Checklist</Eyebrow>
            <h2 style={{ fontSize: '1.8rem', margin: '4px 0 0 0' }}>Signature Experiences</h2>
          </div>
          <Link href="/experiences" className="text-link" style={{ fontWeight: 600 }}>
            Explore all 6 experiences →
          </Link>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
          }}
        >
          {experiencesList.slice(0, 4).map((exp) => (
            <Link
              key={exp.id}
              href={`/experiences/${exp.slug}`}
              style={{
                textDecoration: 'none',
                color: 'inherit',
                border: '1px solid var(--border, #e8e3dc)',
                borderRadius: '12px',
                overflow: 'hidden',
                background: '#ffffff',
              }}
            >
              <div style={{ position: 'relative', height: '180px', width: '100%' }}>
                <Image src={exp.cardImage} alt={exp.heroImageAlt} fill sizes="300px" style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span className="eyebrow" style={{ color: '#9c4826', fontSize: '0.75rem', marginBottom: '2px', display: 'block' }}>
                    {exp.eyebrow}
                  </span>
                  {exp.price && (
                    <span style={{ fontSize: '0.8rem', color: '#103f32', fontWeight: 600 }}>
                      From ₹{exp.price.toLocaleString('en-IN')}
                    </span>
                  )}
                </div>
                <strong style={{ fontSize: '1.05rem', display: 'block', marginBottom: '4px' }}>
                  {exp.cardTitle || exp.title}
                </strong>
                <span style={{ fontSize: '0.82rem', color: '#66726b' }}>
                  {exp.duration.split('(')[0].trim()} · View details →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Practical Travel Logistics */}
      <section className="section wrap" style={{ paddingTop: '0' }}>
        <SectionTitle eyebrow="Practical details" title="Getting to Jaisalmer & Staying Well" />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            background: '#faf7f2',
            border: '1px solid var(--border, #e5e0d8)',
            borderRadius: '16px',
            padding: '36px',
          }}
        >
          <div>
            <Plane size={28} style={{ color: '#1f5b45', marginBottom: '12px' }} />
            <h3 style={{ fontSize: '1.15rem', marginBottom: '8px' }}>By Air</h3>
            <p style={{ fontSize: '0.9rem', color: '#4a5750', lineHeight: 1.6, margin: 0 }}>
              Jaisalmer Airport (JSA) operates seasonal commercial flights (typically October to March) connecting directly to Delhi, Mumbai, and Jaipur. Jodhpur Airport (JDH) is 4.5 hours away by road with year-round flights.
            </p>
          </div>
          <div>
            <Train size={28} style={{ color: '#9c4826', marginBottom: '12px' }} />
            <h3 style={{ fontSize: '1.15rem', marginBottom: '8px' }}>By Rail</h3>
            <p style={{ fontSize: '0.9rem', color: '#4a5750', lineHeight: 1.6, margin: 0 }}>
              Jaisalmer Railway Station (JSM) connects directly to Delhi (via the Runicha Express & Shalimar Express), Jaipur, Jodhpur, and Mumbai. Pre-arranged private station pickup ensures effortless arrival.
            </p>
          </div>
          <div>
            <Bed size={28} style={{ color: '#1f5b45', marginBottom: '12px' }} />
            <h3 style={{ fontSize: '1.15rem', marginBottom: '8px' }}>Where to Stay</h3>
            <p style={{ fontSize: '0.9rem', color: '#4a5750', lineHeight: 1.6, margin: 0 }}>
              We recommend splitting your stay: 1–2 nights in a restored sandstone haveli in the city (for early morning fort walks and dining) and 1 night in a luxury Swiss tent camp in the quieter desert dunes.
            </p>
          </div>
          <div>
            <Utensils size={28} style={{ color: '#9c4826', marginBottom: '12px' }} />
            <h3 style={{ fontSize: '1.15rem', marginBottom: '8px' }}>Desert Dining</h3>
            <p style={{ fontSize: '0.9rem', color: '#4a5750', lineHeight: 1.6, margin: 0 }}>
              Don’t miss authentic Dal Baati Churma, Ker Sangri, and hot Bajra rotis with freshly churned butter. We guide you to authentic family-run kitchens away from commercial tourist traps.
            </p>
          </div>
        </div>
      </section>

      {/* Travel Guides Link */}
      <section className="wrap section" style={{ paddingTop: '0' }}>
        <div
          style={{
            background: '#ffffff',
            border: '1px solid var(--border, #e8e3dc)',
            borderRadius: '16px',
            padding: '32px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          <div>
            <Eyebrow>Travel Planning Knowledge</Eyebrow>
            <h3 style={{ margin: '4px 0 6px 0', fontSize: '1.3rem' }}>Read Our In-Depth Jaisalmer Guides</h3>
            <p style={{ margin: 0, color: '#4a5750', fontSize: '0.92rem' }}>
              Practical tips on how many days to spend, the best season, desert camp standards, and local customs.
            </p>
          </div>
          <Link href="/travel-guides" className="button">
            Read Travel Guides <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Quote Note & Final CTA */}
      <div className="wrap" style={{ marginBottom: '24px' }}>
        <QuoteNote />
      </div>

      <CTA />

      <BreadcrumbSchema
        items={[
          { label: 'Destinations', path: '/#destinations' },
          { label: 'Jaisalmer', path: '/destinations/jaisalmer' },
        ]}
      />
      <JsonLd
        value={{
          '@context': 'https://schema.org',
          '@type': 'TouristDestination',
          name: 'Jaisalmer',
          description:
            'Private Jaisalmer tours and travel planning with FolkMiles. Discover Sonar Qila, carved havelis, Bada Bagh, and Thar Desert camps.',
          touristType: ['Cultural travellers', 'Couples', 'Families', 'Slow travellers'],
          ...(brand.domain ? { url: `${brand.domain}/destinations/jaisalmer` } : {}),
        }}
      />
    </>
  );
}
