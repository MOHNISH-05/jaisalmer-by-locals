import Image from 'next/image';
import Link from 'next/link';
import { folkMilesContact } from '@/lib/contact';

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <Link href="/" aria-label="FolkMiles home">
            <Image
              className="footer-logo"
              src="/logo.svg"
              width={130}
              height={130}
              alt="FolkMiles — Explore India by Locals"
            />
          </Link>
          <p>
            <strong>{folkMilesContact.brand}</strong>
            <br />
            {folkMilesContact.tagline}.
          </p>
          <div style={{ marginTop: '14px', fontSize: '0.85rem' }}>
            <a
              href={`mailto:${folkMilesContact.email}`}
              data-event="email_click"
              style={{ display: 'block', marginBottom: '4px' }}
            >
              {folkMilesContact.email}
            </a>
            <a
              href={folkMilesContact.telUrl}
              data-event="phone_click"
              style={{ display: 'block', marginBottom: '4px', fontWeight: 600 }}
            >
              {folkMilesContact.phoneDisplay}
            </a>
            <a
              href={folkMilesContact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'block', color: '#8d5028' }}
            >
              {folkMilesContact.instagramHandle}
            </a>
          </div>
        </div>

        <div>
          <h3>Explore</h3>
          <Link href="/destinations/jaisalmer">Jaisalmer, Rajasthan</Link>
          <Link href="/jaisalmer-packages">Jaisalmer tour packages</Link>
          <Link href="/experiences">Signature experiences</Link>
          <Link href="/travel-guides">Travel guides</Link>
          <span className="muted">More of India · Coming later</span>
        </div>

        <div>
          <h3>Plan with us</h3>
          <Link href="/about">Our story</Link>
          <Link href="/b2b-travel-partners">Travel agent partners</Link>
          <Link href="/local-partners">Local partners</Link>
          <Link href="/contact" style={{ fontWeight: 600 }}>Plan My Trip</Link>
          <a
            href={folkMilesContact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-event="whatsapp_click"
            style={{ color: '#1f5b45', fontWeight: 600 }}
          >
            WhatsApp FolkMiles
          </a>
        </div>

        <div>
          <h3>Travel with clarity</h3>
          <Link href="/privacy-policy">Privacy policy</Link>
          <Link href="/terms-and-conditions">Terms & conditions</Link>
          <Link href="/cancellation-policy">Cancellation policy</Link>
          <button className="plain-button" data-consent-settings>Cookie preferences</button>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} FolkMiles. Explore India by Locals.</span>
        <span>Thoughtfully planned. Locally inspired.</span>
      </div>

      <details className="wrap credits">
        <summary>Photography credits</summary>
        <p>
          Photographs via Wikimedia Commons, displayed with responsive crops: <a href="https://commons.wikimedia.org/wiki/File:Fort_Jaisalmer_at_sunset.jpg">Fort Jaisalmer at sunset — Const.crist</a> and <a href="https://commons.wikimedia.org/wiki/File:Sam_Dunes_Jaisalmer.jpg">Sam Dunes — Schwiki</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>; <a href="https://commons.wikimedia.org/wiki/File:Beautiful_carvings_on_the_outer_wall_of_Patwon_ki_Haveli.jpg">Patwon ki Haveli — Sharvarism</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>.
        </p>
      </details>
    </footer>
  );
}

