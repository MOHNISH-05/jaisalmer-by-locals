import { Eyebrow } from '@/components/ui';
import { brandPrinciples } from '@/lib/home-data';
import styles from '@/app/home.module.css';

export function BrandIntroPrinciples() {
  return (
    <>
      {/* Brand Intro */}
      <section id="our-story" className={`section wrap ${styles.intro}`}>
        <span className={styles.chapter}>01 / INDIA</span>
        <div>
          <Eyebrow>The FolkMiles Philosophy</Eyebrow>
          <h2>
            A country.<br />
            A thousand journeys.
          </h2>
        </div>
        <div className={styles.introCopy}>
          <p>
            India cannot be understood through one monument or itinerary. FolkMiles helps travellers
            discover places through local understanding.
          </p>
          <strong>Travel farther than the map.</strong>
        </div>
      </section>

      {/* Brand Principles */}
      <section className={styles.principles} id="why-folkmiles">
        <div className="wrap section">
          <div className={styles.sectionHeading}>
            <div>
              <Eyebrow>Our Way of Travelling</Eyebrow>
              <h2>Travel differently.</h2>
            </div>
            <div className={styles.headingSide}>
              Less about collecting places.<br />
              More about understanding them.
            </div>
          </div>

          <div className={styles.principleGrid}>
            {brandPrinciples.map((item) => (
              <article key={item.title}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
