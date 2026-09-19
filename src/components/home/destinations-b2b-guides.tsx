import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Instagram } from 'lucide-react';
import { Eyebrow } from '@/components/ui';
import { featuredDestination } from '@/lib/destinations';
import { b2bServices, travelGuidesList, socialGallery } from '@/lib/home-data';
import { imageAssets } from '@/lib/images';
import styles from '@/app/home.module.css';

export function DestinationsB2BGuides() {
  const fortAsset = imageAssets.jaisalmer.fort;
  return (
    <>
      {/* Destinations Showcase */}
      <section className={`section wrap ${styles.destinations}`} id="destinations">
        <div className={styles.sectionHeading}>
          <div>
            <Eyebrow>Where will your FolkMiles take you?</Eyebrow>
            <h2>
              One locally understood<br />
              destination at a time.
            </h2>
          </div>
          <div className={styles.headingSide}>
            Discover India slowly, honestly, and with people who know the place as home.
          </div>
        </div>

        <Link href={featuredDestination.href} className={styles.destinationCard}>
          <div className={styles.destinationCardImageWrapper}>
            <Image
              src={fortAsset.src}
              alt={fortAsset.alt}
              fill
              sizes="(max-width: 900px) 100vw, 65vw"
              className={styles.destinationCardImage}
              style={{
                ['--desktop-pos' as string]: fortAsset.desktopPosition,
                ['--mobile-pos' as string]: fortAsset.mobilePosition,
              }}
            />
          </div>
          <div className={styles.destinationCardContent}>
            <span className={styles.destinationStatusBadge}>LIVE · FIRST FOLKMILES DESTINATION</span>
            <h3>
              Jaisalmer <ArrowUpRight size={24} />
            </h3>
            <p className={styles.destinationTagline}>Rajasthan · The Golden Soul of the Thar.</p>
            <p className={styles.destinationSnippet}>
              Explore our living fort, golden havelis, camel treks across pristine dunes, and desert camps under the stars.
            </p>
            <span className={styles.destinationLink}>Explore Jaisalmer Journeys →</span>
          </div>
        </Link>

        {/* Honest Coming Soon Strip */}
        <div className={styles.comingSoon}>
          <span className={styles.comingSoonTag}>NEXT CHAPTERS</span>
          <p>More locally understood destinations are coming.</p>
          <small className={styles.comingSoonBadge}>COMING SOON</small>
        </div>
      </section>

      {/* Travel Guides & Published Stories */}
      <section className={`section wrap ${styles.guidesSection}`} id="travel-guides">
        <div className={styles.sectionHeading}>
          <div>
            <Eyebrow>TRAVEL GUIDES & STORIES</Eyebrow>
            <h2>Travel deeper.</h2>
          </div>
          <div className={styles.headingSide}>
            Practical advice, cultural context, and curated starting itineraries for the discerning traveller.
          </div>
        </div>

        <div className={styles.guidesGrid}>
          {travelGuidesList.map((guide) => (
            <Link key={guide.title} href={guide.href} className={styles.guideCard}>
              <div className={styles.guideImageWrapper}>
                <Image
                  src={guide.image}
                  alt={guide.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={styles.guideImage}
                />
                <span className={styles.guideCategoryBadge}>{guide.category}</span>
              </div>
              <div className={styles.guideContent}>
                <span className={styles.guideDuration}>{guide.duration}</span>
                <h3>
                  {guide.title} <ArrowUpRight size={18} />
                </h3>
                <p>{guide.copy}</p>
                <span className={styles.guideReadMore}>Read Guide →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* B2B Travel Partners */}
      <section className={styles.partnerSection} id="b2b-partners">
        <div className="wrap">
          <div className={styles.partnerGrid}>
            <div className={styles.partnerCopy}>
              <span className={styles.chapter}>B2B COLLABORATION</span>
              <Eyebrow>FOLKMILES FOR TRAVEL PARTNERS</Eyebrow>
              <h2>
                A local ground partner<br />
                for your India journeys.
              </h2>
              <p>
                We collaborate with travel designers, boutique agencies, and independent trip planners seeking
                reliable, vetted, and authentic ground handling in Jaisalmer and Rajasthan.
              </p>
              <div className={styles.partnerServicesGrid}>
                {b2bServices.map((svc) => (
                  <div key={svc.title} className={styles.partnerServiceItem}>
                    <strong>{svc.title}</strong>
                    <span>{svc.copy}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '30px' }}>
                <Link href="/b2b-travel-partners" className="button secondary">
                  Partner With FolkMiles <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curated Social Gallery */}
      <section className={`section wrap ${styles.socialSection}`} id="social">
        <div className={styles.socialHeader}>
          <Eyebrow>CURATED MOMENTS</Eyebrow>
          <h2>Follow the journey.</h2>
          <p>
            Glimpses from the road, living craft, and desert silence shared from our travels across India.
          </p>
          <a
            href="https://instagram.com/folkmilesindia"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.instagramLink}
          >
            <Instagram size={18} /> @folkmilesindia <ArrowRight size={14} />
          </a>
        </div>

        <div className={styles.socialGrid}>
          {socialGallery.map((item, idx) => (
            <div key={idx} className={styles.socialCard}>
              <div className={styles.socialImageWrapper}>
                <Image
                  src={item.image}
                  alt={item.caption}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className={styles.socialImage}
                />
              </div>
              <div className={styles.socialCaption}>
                <span>{item.location}</span>
                <p>{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
