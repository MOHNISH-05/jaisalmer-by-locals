import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { Eyebrow } from '@/components/ui';
import { folkMilesContact } from '@/lib/contact';
import styles from '@/app/home.module.css';

export function FinalCTA() {
  return (
    <section className={styles.finalCta} id="plan-trip">
      <div className={styles.finalImageWrapper}>
        <Image
          src="/images/jaisalmer/thar-night.jpg"
          alt="The Milky Way and starry sky over the Thar Desert at night"
          fill
          sizes="100vw"
          className={styles.finalPhoto}
        />
      </div>
      <div className={styles.finalShade} />

      <div className={`wrap ${styles.finalInner}`}>
        <div className={styles.finalCopy}>
          <Eyebrow>YOUR NEXT STORY STARTS HERE</Eyebrow>
          <h2>
            Your journey starts<br />
            <em>with a story.</em>
          </h2>
          <p>
            Tell us where you want to go, how you like to travel, and how much time you have.
            We’ll help shape the rest.
          </p>

          <div className="button-row">
            <Link href="/contact" className="button" data-event="plan_trip_click">
              Plan My Trip <ArrowUpRight size={16} />
            </Link>
            <a
              href={folkMilesContact.whatsappUrl}
              className="button secondary"
              target="_blank"
              rel="noopener noreferrer"
              data-event="whatsapp_click"
            >
              Talk to FolkMiles <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className={styles.brandLockup}>
          <Sparkles size={28} />
          <span>FolkMiles</span>
          <p>Explore India by Locals.</p>
        </div>
      </div>
    </section>
  );
}
