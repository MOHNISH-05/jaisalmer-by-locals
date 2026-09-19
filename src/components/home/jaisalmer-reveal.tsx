import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Eyebrow } from '@/components/ui';
import { featuredDestination } from '@/lib/destinations';
import styles from '@/app/home.module.css';

export function JaisalmerReveal() {
  return (
    <>
      {/* Full-width Cinematic Arrival Moment */}
      <section className={styles.jaisalmerReveal} id="jaisalmer">
        <div className={styles.revealImageWrapper}>
          <Image
            src="/fort.jpg"
            alt="Panoramic sunset over Jaisalmer Fort rising above the Golden City"
            fill
            priority
            quality={88}
            sizes="100vw"
            className={styles.revealImage}
          />
        </div>
        <div className={styles.revealShade} />
        <div className={styles.revealCopy}>
          <p className={styles.revealIntro}>And our first story begins here.</p>
          <h2 className={styles.revealTitle}>JAISALMER</h2>
          <span className={styles.revealTagline}>The Golden Soul of the Thar.</span>
        </div>
      </section>

      {/* Jaisalmer Intro */}
      <section className={`section wrap ${styles.destinationIntro}`}>
        <div>
          <span className={styles.chapter}>03 / JAISALMER</span>
          <Eyebrow>THE FIRST FOLKMILES DESTINATION</Eyebrow>
          <h2>
            A living fort.<br />
            Golden streets.<br />
            <em>Desert horizons.</em>
          </h2>
        </div>
        <div className={styles.destinationCopy}>
          <p>{featuredDestination.longDescription}</p>
          <div className="button-row">
            <Link href={featuredDestination.href} className="button">
              Explore Jaisalmer <ArrowUpRight size={16} />
            </Link>
            <Link href="/contact" className="button secondary" data-event="plan_trip_click">
              Plan a Jaisalmer Trip <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
