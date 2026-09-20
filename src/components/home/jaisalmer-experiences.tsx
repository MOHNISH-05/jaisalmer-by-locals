import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Eyebrow } from '@/components/ui';
import { experiencesList } from '@/lib/experiences';
import styles from '@/app/home.module.css';

export function JaisalmerExperiences() {
  return (
    <section className="section wrap" id="experiences">
      <div className={styles.sectionHeading}>
        <div>
          <Eyebrow>Choose Your Way In</Eyebrow>
          <h2>
            Experience Jaisalmer,<br />
            not just see it.
          </h2>
        </div>
        <div className={styles.headingSide}>
          <p style={{ margin: 0, color: '#4a5750', fontSize: '0.95rem' }}>
            Experience a destination through the people who live there.
          </p>
          <Link className="text-link" href="/experiences" style={{ marginTop: '8px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            Explore all 6 experiences <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <div className={styles.experienceGrid}>
        {experiencesList.map((item, idx) => (
          <Link href={`/experiences/${item.slug}`} key={item.id} className={styles.experienceCard}>
            <div className={styles.experienceImageWrapper}>
              <Image
                src={item.cardImage}
                alt={item.heroImageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.experienceImage}
              />
              <span className={styles.experienceNumber}>0{idx + 1}</span>
            </div>
            <div className={styles.experienceDetails}>
              <span className={styles.experienceCategory}>{item.eyebrow}</span>
              <h3>
                {item.title} <ArrowUpRight size={20} />
              </h3>
              <p>{item.shortDescription}</p>
              <span className={styles.experienceCta}>Explore Experience →</span>
            </div>
          </Link>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '36px' }}>
        <Link href="/experiences" className="button">
          Explore All Signature Experiences <ArrowUpRight size={16} />
        </Link>
      </div>
    </section>
  );
}
