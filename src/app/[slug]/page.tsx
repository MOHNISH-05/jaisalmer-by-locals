import {notFound} from 'next/navigation';
import Link from 'next/link';
import {ArrowRight} from 'lucide-react';
import {Button,Breadcrumbs,CTA,Eyebrow} from '@/components/ui';
import {EnquiryForm} from '@/components/enquiry-form';
import {pages,legalPages} from '@/lib/content';
import {metadata,BreadcrumbSchema} from '@/lib/seo';
import {folkMilesContact} from '@/lib/contact';

const fixed=['about','b2b-travel-partners','local-partners','privacy-policy','terms-and-conditions','cancellation-policy','contact'];
export function generateStaticParams(){return fixed.map(slug=>({slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;if(slug==='contact')return metadata('Contact FolkMiles','Make a Jaisalmer trip or travel-partner enquiry with FolkMiles.','/contact');const p=pages[slug]||legalPages[slug];return p?metadata(p.title,p.description,`/${slug}`):{title:'Not found'}}

function Contact(){
  return (
    <>
      <div className="wrap">
        <Breadcrumbs items={[{label:'Contact'}]}/>
      </div>
      <section className="form-section">
        <div className="section wrap form-layout">
          <div>
            <Eyebrow>LOCAL-FIRST TRIP PLANNING</Eyebrow>
            <h1>Plan your journey<br/><em>with FolkMiles.</em></h1>
            <p>
              Tell us where you want to go, when you&apos;re travelling and what kind of
              experience you&apos;re looking for. FolkMiles will help shape the journey.
            </p>

            <div className="contact-highlight-box">
              <span className="eyebrow" style={{ color: '#9c4826', marginBottom: '6px', display: 'block' }}>
                DIRECT CONTACT
              </span>
              <strong>{folkMilesContact.phoneDisplay}</strong>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '18px' }}>
                <a href={folkMilesContact.telUrl} className="button" data-event="phone_click">
                  Call FolkMiles
                </a>
                <a
                  href={folkMilesContact.whatsappUrl}
                  className="button secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-event="whatsapp_click"
                >
                  WhatsApp FolkMiles
                </a>
              </div>

              <div className="contact-links" style={{ marginTop: '16px' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#66726b', display: 'block' }}>Email</span>
                  <a className="text-link" href={`mailto:${folkMilesContact.email}`} data-event="email_click">
                    {folkMilesContact.email}
                  </a>
                </div>
                <div style={{ marginTop: '10px' }}>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#66726b', display: 'block' }}>Instagram</span>
                  <a className="text-link" href={folkMilesContact.instagramUrl} target="_blank" rel="noopener noreferrer">
                    {folkMilesContact.instagramHandle}
                  </a>
                </div>
              </div>
            </div>

            <p className="form-note">
              An enquiry does not reserve a service or confirm a booking. A journey is
              confirmed only after a written itinerary is agreed.
            </p>
            <p className="form-note">
              This site does not provide emergency assistance. For an active, confirmed trip,
              use the emergency contact in your travel documents.
            </p>
          </div>
          <EnquiryForm kind="traveller"/>
        </div>
      </section>
      <CTA/>
    </>
  );
}

export default async function StaticPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  if(slug==='contact')return <Contact/>;
  const p=pages[slug]||legalPages[slug];
  if(!p)notFound();
  const b2b=slug==='b2b-travel-partners';
  const partner=slug==='local-partners';
  const legal=!!legalPages[slug];
  return (
    <>
      <div className="wrap">
        <Breadcrumbs items={[{label:p.eyebrow},{label:p.title}]}/>
      </div>
      <section className="page-intro wrap">
        <Eyebrow>{p.eyebrow}</Eyebrow>
        <h1>{p.title}</h1>
        <p>{p.description}</p>
      </section>
      <section className="section wrap editorial-layout">
        <div className="prose">
          {p.sections.map(s=>(
            <section key={s.title}>
              <h2>{s.title}</h2>
              <p>{s.body}</p>
            </section>
          ))}
          {slug==='about'&&<Link className="text-link" href="/contact">Plan a Jaisalmer journey <ArrowRight size={16}/></Link>}
        </div>
        {b2b||partner?(
          <aside className="sidebar">
            <Eyebrow>{b2b?'Send a Jaisalmer brief':'Apply to partner'}</Eyebrow>
            <h3>{b2b?'Travel-agent enquiry':'Tell us about your service.'}</h3>
            <p>
              {b2b
                ? 'We work with travel designers and agencies seeking reliable local ground handling in Jaisalmer.'
                : 'An application starts a review; it does not mean approval, verification or a booking guarantee.'}
            </p>
            <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href={folkMilesContact.whatsappUrl} className="button secondary" target="_blank" rel="noopener noreferrer">
                WhatsApp FolkMiles
              </a>
              <a href={folkMilesContact.telUrl} className="button">
                Call {folkMilesContact.phoneDisplay}
              </a>
            </div>
          </aside>
        ):(
          <aside className="sidebar">
            <Eyebrow>Explore by Locals</Eyebrow>
            <h3>Beginning in Jaisalmer.</h3>
            <p>FolkMiles is building destination-level local networks across India. Other destinations are coming later and are not currently bookable.</p>
            <Button href="/contact" event="plan_trip_click">Plan My Trip</Button>
          </aside>
        )}
      </section>
      {b2b||partner?(
        <section className="form-section">
          <div className="section wrap form-layout">
            <div>
              <Eyebrow>{b2b?'Jaisalmer ground handling':'For the people who make a place'}</Eyebrow>
              <h2>{b2b?'Send your client brief.':'Start an application.'}</h2>
              <p>
                {b2b
                  ? 'Please share only the information needed for a quotation. Do not send client identity documents or payment data through this form.'
                  : 'Please describe your current service accurately. A follow-up may request business, safety or service documents through an agreed channel.'}
              </p>
            </div>
            <EnquiryForm kind={b2b?'b2b':'partner'}/>
          </div>
        </section>
      ):null}
      {!legal&&!b2b&&!partner&&<CTA/>}
      <BreadcrumbSchema items={[{label:p.eyebrow,path:`/${slug}`}]}/>
    </>
  );
}
