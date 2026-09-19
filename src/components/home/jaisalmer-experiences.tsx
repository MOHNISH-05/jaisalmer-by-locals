import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Eyebrow } from '@/components/ui';
import styles from '@/app/home.module.css';

const experiences = [
  {
    number: '01',
    title: 'Fort & Living Heritage',
    category: 'Heritage Walking Tour',
    copy: 'Walk through 800-year-old living lanes, visit ornate private havelis, and hear stories of kings and merchants.',
    href: '/experiences/jaisalmer-fort-heritage',
    image: '/images/jaisalmer/nathmal-haveli.jpg',
    cta: 'Explore Fort Journey',
  },
  {
    number: '02',
    title: 'Thar Desert Safari & Camps',
    category: 'Desert Experience',
    copy: 'Sunset camel treks, thrilling 4x4 dune drives, traditional fireside music, and overnight luxury Swiss tent stays.',
    href: '/experiences/jaisalmer-desert-safari',
    image: '/images/jaisalmer/camp-twilight.jpg',
    cta: 'Explore Desert Safari',
  },
  {
    number: '03',
    title: 'Private Curated Itineraries',
    category: '2, 3 & 4-Day Journeys',
    copy: 'Thoughtfully paced routes designed around your arrival, comfort, and curiosity—from 2-day highlights to 4-day slow travel.',
    href: '/destinations/jaisalmer',
    image: '/images/jaisalmer/living-lanes.jpg',
    cta: 'View Itineraries',
  },
  {
    number: '04',
    title: 'Transfers, Taxis & Day Trips',
    category: 'Local Coordination',
    copy: 'Chauffeured airport/railway transfers, day excursions to Bada Bagh, Amar Sagar, and Kuldhara, with trusted local drivers.',
    href: '/contact',
    image: '/images/jaisalmer/amar-sagar.jpg',
    cta: 'Enquire for Transport',
  },
];

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
          <Link className="text-link" href="/destinations/jaisalmer">
            All Jaisalmer journeys <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      <div className={styles.experienceGrid}>
        {experiences.map((item) => (
          <Link href={item.href} key={item.title} className={styles.experienceCard}>
            <div className={styles.experienceImageWrapper}>
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.experienceImage}
              />
              <span className={styles.experienceNumber}>{item.number}</span>
            </div>
            <div className={styles.experienceDetails}>
              <span className={styles.experienceCategory}>{item.category}</span>
              <h3>
                {item.title} <ArrowUpRight size={20} />
              </h3>
              <p>{item.copy}</p>
              <span className={styles.experienceCta}>{item.cta} →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
