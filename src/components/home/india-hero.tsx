import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { Eyebrow } from '@/components/ui';
import { imageAssets } from '@/lib/images';
import styles from '@/app/home.module.css';

export function IndiaHero() {
  const heroAsset = imageAssets.india.hero;
  return (
    <section className={styles.hero}>
      {/* Background cinematic India composition */}
      <div className={styles.heroArt} aria-hidden="true">
        <div className={styles.heroCanvas}>
          <Image
            src={heroAsset.src}
            alt={heroAsset.alt}
            fill
            priority
            quality={88}
            className={styles.heroBgImage}
            sizes="100vw"
            style={{
              objectPosition: heroAsset.desktopPosition,
              ['--desktop-pos' as string]: heroAsset.desktopPosition,
              ['--mobile-pos' as string]: heroAsset.mobilePosition,
            }}
          />
        </div>
        <div className={styles.heroOverlay} />
      </div>

      <div className={`wrap ${styles.heroInner}`}>
        <div className={styles.heroCopy}>
          <div className={styles.journeyIndicator}>
            <span className={styles.indicatorActive}>INDIA</span>
            <i />
            <span>RAJASTHAN</span>
            <i />
            <span>JAISALMER</span>
          </div>

          <Eyebrow>LOCAL JOURNEYS · REAL INDIA</Eyebrow>
          <h1>
            Explore India<br />
            <em>by Locals.</em>
          </h1>
          <p>Journeys shaped by people who know the place beyond the map.</p>

          <div className="button-row">
            <Link href="/destinations/jaisalmer" className="button">
              Explore Jaisalmer <ArrowUpRight size={16} />
            </Link>
            <Link href="/contact" className="button secondary" data-event="plan_trip_click">
              Plan My Journey <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      <a className={styles.scrollCue} href="#our-story">
        <ArrowDown size={16} /> Follow the journey
      </a>
    </section>
  );
}
