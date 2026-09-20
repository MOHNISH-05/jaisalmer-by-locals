import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react';
import styles from '@/app/home.module.css';

export function IndiaHero() {
  return (
    <section className={styles.hero} aria-label="Introduction to FolkMiles">
      {/* Background cinematic Jaisalmer composition */}
      <div className={styles.heroArt} aria-hidden="true">
        <div className={styles.heroCanvas}>
          <Image
            src="/images/jaisalmer/hero-folkmiles.png"
            alt="FolkMiles — Historic Golden Fort of Jaisalmer at sunrise"
            fill
            priority
            fetchPriority="high"
            quality={90}
            className={styles.heroBgImage}
            sizes="100vw"
            style={{
              objectFit: 'cover',
              objectPosition: 'right center',
            }}
          />
        </div>
        <div className={styles.heroOverlay} />
      </div>

      <div className={`wrap ${styles.heroInner}`}>
        <div className={styles.heroCopy}>
          <div className={styles.heroEyebrowRow}>
            <span className={styles.heroEyebrowLine} aria-hidden="true" />
            <span className={styles.heroEyebrow}>INDIA, SEEN THROUGH LOCAL EYES</span>
          </div>

          <h1 className={styles.heroHeading}>
            Explore India<br />
            <span className={styles.heroLocals}>by Locals.</span>
          </h1>

          <p className={styles.heroSupporting}>
            Thoughtful journeys shaped by people who know the place beyond the map.
          </p>

          <div className={styles.destinationStatus}>
            <MapPin size={14} className={styles.destinationPin} aria-hidden="true" />
            <span>Now exploring — Jaisalmer, Rajasthan</span>
          </div>

          <div className={styles.heroActions}>
            <Link href="/destinations/jaisalmer" className={styles.primaryCta}>
              Explore Jaisalmer <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className={styles.secondaryCta}
              data-event="plan_trip_click"
            >
              Plan My Journey →
            </Link>
          </div>

          <div className={styles.trustLine}>
            <span>Local knowledge</span>
            <span className={styles.trustDot}>·</span>
            <span>Private journeys</span>
            <span className={styles.trustDot}>·</span>
            <span>Thoughtful experiences</span>
          </div>
        </div>
      </div>

      <a className={styles.scrollCue} href="#our-story">
        <ArrowDown size={16} /> Follow the journey
      </a>
    </section>
  );
}

