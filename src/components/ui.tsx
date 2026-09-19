import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight, Compass, Handshake, MapPin } from 'lucide-react';
import { tours, faqs } from '@/lib/content';
import { quoteNote } from '@/lib/config';
import { imageAssets } from '@/lib/images';

export function Button({href,children,secondary=false,event}:{href:string;children:React.ReactNode;secondary?:boolean;event?:string}){return <Link href={href} className={`button ${secondary?'secondary':''}`} data-event={event}>{children}<ArrowUpRight size={18}/></Link>}

export function Photo({
  name,
  src,
  alt,
  priority=false,
  className='',
  position,
  desktopPosition,
  mobilePosition
}:{
  name?:string;
  src?:string;
  alt:string;
  priority?:boolean;
  className?:string;
  position?:string;
  desktopPosition?:string;
  mobilePosition?:string;
}){
  const imageSrc = src || (name ? `/${name}.jpg` : '');
  const style: React.CSSProperties = {
    objectFit: 'cover',
    ...(position ? { objectPosition: position } : {}),
    ...(desktopPosition ? { '--desktop-pos': desktopPosition } as React.CSSProperties : {}),
    ...(mobilePosition ? { '--mobile-pos': mobilePosition } as React.CSSProperties : {})
  };

  return (
    <div className={`photo ${className}`}>
      <Image
        src={imageSrc}
        alt={alt}
        fill
        sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={priority}
        quality={85}
        style={style}
      />
    </div>
  );
}

export function Eyebrow({children}:{children:React.ReactNode}){return <p className="eyebrow">{children}</p>}
export function SectionTitle({eyebrow,title,children}:{eyebrow:string;title:string;children?:React.ReactNode}){return <div className="section-title"><div><Eyebrow>{eyebrow}</Eyebrow><h2>{title}</h2></div>{children}</div>}
export function Breadcrumbs({items}:{items:{label:string;href?:string}[]}){return <nav aria-label="Breadcrumb" className="breadcrumbs"><Link href="/">Home</Link>{items.map((item,i)=><span key={i}><span aria-hidden="true">/</span>{item.href?<Link href={item.href}>{item.label}</Link>:<span aria-current="page">{item.label}</span>}</span>)}</nav>}
export function TrustStrip(){return <div className="trust-strip wrap"><div><Compass/><span>Local knowledge.<small>A more thoughtful way to travel.</small></span></div><div><Handshake/><span>Clear, personal planning.<small>Your journey, shaped around you.</small></span></div><div><MapPin/><span>One destination at a time.<small>Beginning with Jaisalmer.</small></span></div></div>}

export function TourCards(){
  return (
    <div className="tour-grid">
      {tours.map((t, i) => {
        const imgMeta = (imageAssets.itineraries as Record<string, { src: string; alt: string; desktopPosition?: string; objectPosition?: string }>)[t.slug];
        return (
          <Link className="tour-card" key={t.slug} href={`/destinations/jaisalmer/${t.slug}`}>
            {imgMeta && (
              <div className="tour-card-visual">
                <Image
                  src={imgMeta.src}
                  alt={imgMeta.alt}
                  fill
                  sizes="(max-width: 760px) 100vw, 33vw"
                  style={{
                    objectFit: 'cover',
                    objectPosition: imgMeta.desktopPosition || imgMeta.objectPosition || 'center'
                  }}
                />
              </div>
            )}
            <div className="tour-card-body">
              <div className="tour-number">
                0{i + 1}
                <ArrowUpRight size={24} />
              </div>
              {i === 1 && <span className="recommend">Our recommended balance</span>}
              <p className="eyebrow">{t.duration}</p>
              <h3>{t.short}</h3>
              <p>{t.description}</p>
              <span className="text-link">
                Discover this trip <ArrowRight size={16} />
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export function Experiences(){
  const desertMeta = imageAssets.experiences['jaisalmer-desert-safari'];
  const heritageMeta = imageAssets.experiences['jaisalmer-fort-heritage'];

  return (
    <section className="section wrap" id="experiences">
      <SectionTitle eyebrow="Go beyond the postcard" title="Come for the place. Stay for the stories."/>
      <div className="experience-grid">
        <Link className="experience-card" href="/experiences/jaisalmer-desert-safari">
          <Photo
            src={desertMeta.src}
            alt={desertMeta.alt}
            position={desertMeta.objectPosition}
            desktopPosition={desertMeta.desktopPosition}
            mobilePosition={desertMeta.mobilePosition}
          />
          <div>
            <Eyebrow>Space to slow down</Eyebrow>
            <h3>Into the Thar Desert <ArrowUpRight/></h3>
            <p>Open skies, shifting sands and an evening at your pace.</p>
          </div>
        </Link>
        <Link className="experience-card" href="/experiences/jaisalmer-fort-heritage">
          <Photo
            src={heritageMeta.src}
            alt={heritageMeta.alt}
            position={heritageMeta.objectPosition}
            desktopPosition={heritageMeta.desktopPosition}
            mobilePosition={heritageMeta.mobilePosition}
          />
          <div>
            <Eyebrow>Look a little closer</Eyebrow>
            <h3>Inside the Golden City <ArrowUpRight/></h3>
            <p>Living lanes, carved stone and the people between.</p>
          </div>
        </Link>
      </div>
    </section>
  );
}

import { folkMilesContact } from '@/lib/contact';

export function FAQ(){return <section className="section wrap faq"><div><Eyebrow>A few useful answers</Eyebrow><h2>Before you pack.</h2><p>Still wondering about something?<br/><Link className="text-link" href="/contact">Tell us what you have in mind <ArrowRight size={16}/></Link></p></div><div>{faqs.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></section>}
export function CTA(){
  return (
    <section className="cta">
      <div className="wrap cta-inner">
        <div>
          <Eyebrow>Your next story starts here</Eyebrow>
          <h2>Let’s make it<br/><em>your kind of journey.</em></h2>
          <p>Tell us a little about your Jaisalmer plans.<br/>We’ll take it from there, together.</p>
        </div>
        <div className="button-row">
          <Button href="/contact" event="plan_trip_click">Plan My Trip</Button>
          <a
            href={folkMilesContact.whatsappUrl}
            className="button secondary"
            target="_blank"
            rel="noopener noreferrer"
            data-event="whatsapp_click"
            style={{ color: '#ffffff', borderColor: '#ffffff' }}
          >
            WhatsApp FolkMiles <ArrowUpRight size={18}/>
          </a>
        </div>
      </div>
    </section>
  );
}
export function QuoteNote(){return <p className="quote-note">{quoteNote}</p>}

