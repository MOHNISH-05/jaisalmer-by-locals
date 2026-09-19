import Link from 'next/link';
import { ArrowUpRight, CheckCircle2, Compass, HandHeart, MessageCircle, Route } from 'lucide-react';
import { Eyebrow } from '@/components/ui';
import {
  howItWorksSteps,
  whyFolkMilesItems,
  travellerTypesList,
  internationalFeatures,
} from '@/lib/home-data';
import styles from '@/app/home.module.css';

const stepIcons = [MessageCircle, Route, HandHeart];

export function PlanningValue() {
  return (
    <>
      {/* How it Works */}
      <section className={`section wrap ${styles.process}`} id="how-it-works">
        <div className={styles.sectionHeading}>
          <div>
            <Eyebrow>Simple, Personal Planning</Eyebrow>
            <h2>
              From an idea<br />
              to a journey.
            </h2>
          </div>
          <div className={styles.headingSide}>
            <Link href="/contact" className="button" data-event="plan_trip_click">
              Start Planning <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className={styles.processGrid}>
          {howItWorksSteps.map((step, i) => {
            const IconComponent = stepIcons[i] || Compass;
            return (
              <article key={step.step} className={styles.processCard}>
                <div className={styles.processCardTop}>
                  <IconComponent size={28} className={styles.processIcon} />
                  <span className={styles.processStepNumber}>{step.step}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Why FolkMiles */}
      <section className={styles.whySection} id="why-choose-us">
        <div className="wrap section">
          <div className={styles.sectionHeading}>
            <div>
              <Eyebrow>The FolkMiles Distinction</Eyebrow>
              <h2>Why travel with FolkMiles?</h2>
            </div>
            <div className={styles.headingSide}>
              We do not mass-package India. We build thoughtful journeys destination by destination,
              with genuine local roots and dedicated human attention.
            </div>
          </div>

          <div className={styles.whyGrid}>
            {whyFolkMilesItems.map((item, idx) => (
              <article key={item.title} className={styles.whyCard}>
                <span className={styles.whyNumber}>0{idx + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Traveller Types */}
      <section className={styles.travellersSection}>
        <div className="wrap section">
          <div className={styles.travellersHeader}>
            <Eyebrow>Personalized to Your Travel Style</Eyebrow>
            <h2>
              However you travel,<br />
              <em>make it yours.</em>
            </h2>
            <p className={styles.travellersSub}>
              Every traveller experiences a place differently. We shape the pace, stays, and activities
              around who is travelling.
            </p>
          </div>

          <div className={styles.travellerPills}>
            {travellerTypesList.map((item) => (
              <div key={item.type} className={styles.travellerPill}>
                <strong>{item.type}</strong>
                <span>{item.note}</span>
              </div>
            ))}
          </div>

          {/* International Travellers Banner */}
          <div className={styles.internationalCard}>
            <div className={styles.internationalCopy}>
              <Eyebrow>FOR VISITORS FROM ABROAD</Eyebrow>
              <h3>India, easier to understand.</h3>
              <p>
                Navigating India can feel overwhelming. FolkMiles provides cultural context, reliable
                private transport, and transparent English communication to make your journey enriching
                and comfortable.
              </p>
            </div>
            <div className={styles.internationalFeatures}>
              {internationalFeatures.map((feat) => (
                <div key={feat.title} className={styles.featureItem}>
                  <CheckCircle2 size={18} className={styles.checkIcon} />
                  <div>
                    <strong>{feat.title}</strong>
                    <p>{feat.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
