import Image from 'next/image';
import { Eyebrow } from '@/components/ui';
import { rajasthanThemes } from '@/lib/home-data';
import styles from '@/app/home.module.css';

export function RajasthanSection() {
  return (
    <section className={styles.rajasthanWrapper} id="rajasthan">
      {/* Cinematic Transition */}
      <div className={styles.rajasthanTransition}>
        <div className={styles.transitionImage}>
          <Image
            src="/images/rajasthan/hawa-mahal.jpg"
            alt="Intricate terracotta architecture of Hawa Mahal, Jaipur, Rajasthan"
            fill
            sizes="(max-width: 900px) 100vw, 55vw"
            className={styles.transitionPhoto}
          />
          <div className={styles.transitionGradient} />
        </div>
        <div className={styles.transitionCopy}>
          <span className={styles.chapter}>02 / RAJASTHAN</span>
          <Eyebrow>Where our journey begins</Eyebrow>
          <h2>
            Our journey begins<br />
            <em>in Rajasthan.</em>
          </h2>
          <p>
            Palaces tell one story. Streets, kitchens, craftsmen, musicians, and families tell the rest.
          </p>
        </div>
      </div>

      {/* Rajasthan Story & Visual Editorial Mosaic */}
      <div className={`wrap section ${styles.rajasthanStory}`}>
        <div className={styles.sectionHeading}>
          <div>
            <Eyebrow>Regional Depth</Eyebrow>
            <h2>
              Rajasthan,<br />
              through local eyes.
            </h2>
          </div>
          <div className={styles.headingSide}>
            Beyond the royal postcard: a land of vibrant bazaars, enduring craft traditions,
            living fort communities, and the boundless quiet of the Thar.
          </div>
        </div>

        <div className={styles.rajasthanGrid}>
          {rajasthanThemes.map((item) => (
            <article key={item.title} className={styles.rajasthanCard}>
              <div className={styles.rajasthanCardImage}>
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className={styles.rajasthanCardContent}>
                <span className={styles.rajasthanTag}>{item.tagline}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </article>
          ))}
        </div>

        <p className={styles.rajasthanBridgeNote}>
          Rajasthan is the cultural canvas of our beginnings. Our first live, fully developed destination
          opens in Jaisalmer.
        </p>
      </div>
    </section>
  );
}
