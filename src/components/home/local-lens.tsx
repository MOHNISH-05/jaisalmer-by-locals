import { Eyebrow } from '@/components/ui';
import { localLensData } from '@/lib/home-data';
import styles from '@/app/home.module.css';

export function LocalLens() {
  return (
    <section className={styles.localLens} id="local-lens">
      <div className={`wrap section ${styles.lensLayout}`}>
        <div className={styles.lensIntro}>
          <span className={styles.chapter}>LOCAL CONTEXT</span>
          <Eyebrow>Things Worth Knowing Before You Arrive</Eyebrow>
          <h2>The Local Lens.</h2>
          <p>
            Practical context for a better-paced Jaisalmer journey. Because seasonal conditions and local
            timings shift, we confirm current details while tailoring your plan.
          </p>
        </div>

        <div className={styles.lensGrid}>
          {localLensData.map((item) => (
            <article key={item.label} className={styles.lensCard}>
              <span className={styles.lensLabel}>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.value}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
