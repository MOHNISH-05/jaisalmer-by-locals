import Image from 'next/image';
import { Eyebrow } from '@/components/ui';
import { indiaThemes } from '@/lib/destinations';
import styles from '@/app/home.module.css';

export function IndiaStory() {
  return (
    <section className={`section wrap ${styles.indiaStory}`}>
      <div className={styles.sectionHeading}>
        <div>
          <Eyebrow>An India-Wide Vision</Eyebrow>
          <h2>
            India, beyond<br />
            the obvious.
          </h2>
        </div>
        <div className={styles.headingSide}>
          From mountain paths to coastal mornings, old cities to everyday rituals—these are the many
          stories our journey is growing towards.
        </div>
      </div>

      <div className={styles.themeGrid}>
        {indiaThemes.map((theme, i) => (
          <article key={theme.title} className={styles[`theme${i + 1}`]}>
            {theme.image && (
              <div className={styles.themeBg}>
                <Image
                  src={theme.image}
                  alt={theme.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={styles.themeBgImg}
                />
              </div>
            )}
            <div className={styles.themeContent}>
              <span>{theme.number}</span>
              <h3>{theme.title}</h3>
              <p>{theme.copy}</p>
            </div>
          </article>
        ))}
      </div>

      <p className={styles.honesty}>
        Our India story is growing destination by destination. Jaisalmer is currently our first and
        only bookable destination.
      </p>
    </section>
  );
}
