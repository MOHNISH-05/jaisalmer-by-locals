import Image from 'next/image';
import { Eyebrow } from '@/components/ui';
import { imageAssets } from '@/lib/images';
import styles from '@/app/home.module.css';

export function JaisalmerStory() {
  const { jaisalmer } = imageAssets;

  return (
    <section className={styles.localStory} id="jaisalmer-story">
      <div className="wrap section">
        <div className={styles.sectionHeading}>
          <div>
            <Eyebrow>GENUINE FOLKMILES PHOTOGRAPHY</Eyebrow>
            <h2>Explore beyond landmarks.</h2>
          </div>
          <div className={styles.headingSide}>
            A closer look at Jaisalmer through authentic local chapters—from living fort lanes and carved
            stone havelis to campfire music and the silence of the Thar.
          </div>
        </div>

        {/* =========================================================
            EDITORIAL CHAPTER 1: THE LIVING CITADEL & STREETS
            ========================================================= */}
        <div className={styles.editorialSpread}>
          <div className={styles.spreadHeader}>
            <span className={styles.spreadNumber}>01</span>
            <div>
              <span className={styles.spreadCategory}>THE LIVING CITADEL</span>
              <h3>Sonar Qila & The Maharaja Mahal</h3>
              <p>
                Unlike preserved monument-museums, Jaisalmer Fort is alive. Inside yellow sandstone walls
                built in 1156 AD, family homes, chai stalls, and temples have coexisted for twenty-eight
                generations.
              </p>
            </div>
          </div>

          <div className={styles.citadelDuo}>
            <div className={styles.citadelMain}>
              <div className={styles.editorialPhotoWrapper}>
                <Image
                  src={jaisalmer.fortPalace.src}
                  alt={jaisalmer.fortPalace.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 60vw"
                  className={styles.editorialPhoto}
                  style={{
                    ['--desktop-pos' as string]: jaisalmer.fortPalace.desktopPosition,
                    ['--mobile-pos' as string]: jaisalmer.fortPalace.mobilePosition,
                  }}
                />
              </div>
              <div className={styles.editorialCaption}>
                <strong>Maharaja Mahal & Palace Facade</strong>
                <span>Sonar Qila · Inhabited Fort Citadel</span>
              </div>
            </div>

            <div className={styles.citadelSecondary}>
              <div className={styles.editorialPhotoWrapper}>
                <Image
                  src={jaisalmer.livingLanes.src}
                  alt={jaisalmer.livingLanes.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 40vw"
                  className={styles.editorialPhoto}
                  style={{
                    ['--desktop-pos' as string]: jaisalmer.livingLanes.desktopPosition,
                    ['--mobile-pos' as string]: jaisalmer.livingLanes.mobilePosition,
                  }}
                />
              </div>
              <div className={styles.editorialCaption}>
                <strong>Living Fort Alleys & Morning Rituals</strong>
                <span>Cobblestone lanes lived in for centuries</span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            EDITORIAL CHAPTER 2: CARVED STONE & DESERT OASIS
            ========================================================= */}
        <div className={styles.editorialSpread}>
          <div className={styles.spreadHeader}>
            <span className={styles.spreadNumber}>02</span>
            <div>
              <span className={styles.spreadCategory}>ARCHITECTURE & HAVELIS</span>
              <h3>Lace in Sandstone, Oasis Waters</h3>
              <p>
                Rich merchants commissioned master stone carvers to chisel golden sandstone into lace-like
                screens, while desert reservoirs sustained city life through centuries of arid heat.
              </p>
            </div>
          </div>

          <div className={styles.haveliTrio}>
            <div className={styles.trioCardLarge}>
              <div className={styles.editorialPhotoWrapper}>
                <Image
                  src={jaisalmer.nathmalHaveli.src}
                  alt={jaisalmer.nathmalHaveli.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  className={styles.editorialPhoto}
                  style={{
                    ['--desktop-pos' as string]: jaisalmer.nathmalHaveli.desktopPosition,
                    ['--mobile-pos' as string]: jaisalmer.nathmalHaveli.mobilePosition,
                  }}
                />
              </div>
              <div className={styles.editorialCaption}>
                <strong>Nathmal Ki Haveli</strong>
                <span>19th-century facade carved by two brother sculptors</span>
              </div>
            </div>

            <div className={styles.trioCardSmall}>
              <div className={styles.editorialPhotoWrapper}>
                <Image
                  src={jaisalmer.haveliDetail.src}
                  alt={jaisalmer.haveliDetail.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 25vw"
                  className={styles.editorialPhoto}
                  style={{
                    ['--desktop-pos' as string]: jaisalmer.haveliDetail.desktopPosition,
                    ['--mobile-pos' as string]: jaisalmer.haveliDetail.mobilePosition,
                  }}
                />
              </div>
              <div className={styles.editorialCaption}>
                <strong>Carved Jali Fretwork</strong>
                <span>Sandstone screen allowing desert breezes to cool the interior</span>
              </div>
            </div>

            <div className={styles.trioCardSmall}>
              <div className={styles.editorialPhotoWrapper}>
                <Image
                  src={jaisalmer.amarSagar.src}
                  alt={jaisalmer.amarSagar.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 25vw"
                  className={styles.editorialPhoto}
                  style={{
                    ['--desktop-pos' as string]: jaisalmer.amarSagar.desktopPosition,
                    ['--mobile-pos' as string]: jaisalmer.amarSagar.mobilePosition,
                  }}
                />
              </div>
              <div className={styles.editorialCaption}>
                <strong>Amar Sagar Lake & Pavilions</strong>
                <span>Historic water reservoir 5 km from the city</span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            EDITORIAL CHAPTER 3: LIVING FOLK ARTS & CAMPFIRE
            ========================================================= */}
        <div className={styles.editorialSpread}>
          <div className={styles.spreadHeader}>
            <span className={styles.spreadNumber}>03</span>
            <div>
              <span className={styles.spreadCategory}>LIVING TRADITIONS</span>
              <h3>Desert Songs & Campfire Celebrations</h3>
              <p>
                As twilight settles over the desert camp, hereditary folk dancers and fire performers bring
                ancient celebration to life under the open sky.
              </p>
            </div>
          </div>

          <div className={styles.cultureDuo}>
            <div className={styles.cultureCard}>
              <div className={styles.editorialPhotoWrapper}>
                <Image
                  src={jaisalmer.dancerCamel.src}
                  alt={jaisalmer.dancerCamel.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  className={styles.editorialPhoto}
                  style={{
                    ['--desktop-pos' as string]: jaisalmer.dancerCamel.desktopPosition,
                    ['--mobile-pos' as string]: jaisalmer.dancerCamel.mobilePosition,
                  }}
                />
              </div>
              <div className={styles.editorialCaption}>
                <strong>Kalbelia Folk Dance & Camel Traditions</strong>
                <span>Desert camp courtyard rhythms in authentic attire</span>
              </div>
            </div>

            <div className={styles.cultureCard}>
              <div className={styles.editorialPhotoWrapper}>
                <Image
                  src={jaisalmer.campFire.src}
                  alt={jaisalmer.campFire.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  className={styles.editorialPhoto}
                  style={{
                    ['--desktop-pos' as string]: jaisalmer.campFire.desktopPosition,
                    ['--mobile-pos' as string]: jaisalmer.campFire.mobilePosition,
                  }}
                />
              </div>
              <div className={styles.editorialCaption}>
                <strong>Fireside Performance Arts</strong>
                <span>Time-honoured desert spectacles by the campfire</span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            EDITORIAL CHAPTER 4: THE OPEN THAR & STARRY NIGHT
            ========================================================= */}
        <div className={styles.editorialSpread}>
          <div className={styles.spreadHeader}>
            <span className={styles.spreadNumber}>04</span>
            <div>
              <span className={styles.spreadCategory}>THE OPEN THAR</span>
              <h3>Dune Crossings & Desert Nights</h3>
              <p>
                Leaving the city behind: golden hour across wind-rippled dunes, comfortable Swiss tent
                comfort, and the silence of an unpolluted night sky.
              </p>
            </div>
          </div>

          <div className={styles.panoramaFeature}>
            <div className={styles.panoramaPhotoWrapper}>
              <Image
                src={jaisalmer.camelDunes.src}
                alt={jaisalmer.camelDunes.alt}
                fill
                sizes="(max-width: 900px) 100vw, 90vw"
                className={styles.editorialPhoto}
                style={{
                  ['--desktop-pos' as string]: jaisalmer.camelDunes.desktopPosition,
                  ['--mobile-pos' as string]: jaisalmer.camelDunes.mobilePosition,
                }}
              />
            </div>
            <div className={styles.editorialCaption}>
              <strong>Camel Trek Across the Thar Dunes</strong>
              <span>Sunset crossing over natural wind-carved desert sands</span>
            </div>
          </div>

          <div className={styles.nightDuo}>
            <div className={styles.nightCard}>
              <div className={styles.editorialPhotoWrapper}>
                <Image
                  src={jaisalmer.campTwilight.src}
                  alt={jaisalmer.campTwilight.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  className={styles.editorialPhoto}
                  style={{
                    ['--desktop-pos' as string]: jaisalmer.campTwilight.desktopPosition,
                    ['--mobile-pos' as string]: jaisalmer.campTwilight.mobilePosition,
                  }}
                />
              </div>
              <div className={styles.editorialCaption}>
                <strong>Desert Camp at Twilight</strong>
                <span>Comfortable Swiss tent stays under the evening sky</span>
              </div>
            </div>

            <div className={styles.nightCard}>
              <div className={styles.editorialPhotoWrapper}>
                <Image
                  src={jaisalmer.tharNight.src}
                  alt={jaisalmer.tharNight.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  className={styles.editorialPhoto}
                  style={{
                    ['--desktop-pos' as string]: jaisalmer.tharNight.desktopPosition,
                    ['--mobile-pos' as string]: jaisalmer.tharNight.mobilePosition,
                  }}
                />
              </div>
              <div className={styles.editorialCaption}>
                <strong>The Starlit Thar Horizon</strong>
                <span className={styles.illustrativeTag}>Illustrative concept visual · Stars over the dunes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
