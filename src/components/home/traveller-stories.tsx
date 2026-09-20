import Link from 'next/link';
import { ArrowUpRight, MessageSquare, ShieldCheck, HeartHandshake } from 'lucide-react';
import { Eyebrow } from '@/components/ui';

export interface VerifiedReview {
  id: string;
  authorName: string;
  location: string;
  rating: number;
  date: string;
  text: string;
  googleReviewUrl?: string;
  verifiedTrip?: string;
}

/* Architecture ready for verified Google Reviews once live guests complete their tours.
   Strict rule: ZERO fake reviews, ZERO fake star ratings, ZERO fake testimonials. */
export const verifiedReviews: VerifiedReview[] = [];

export function TravellerStories() {
  return (
    <section className="section wrap" id="traveller-stories">
      <div
        style={{
          background: '#faf7f2',
          border: '1px solid var(--border, #e5e0d8)',
          borderRadius: '16px',
          padding: '48px 36px',
        }}
      >
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <Eyebrow>Travel With Confidence</Eyebrow>
          <h2 style={{ fontSize: '1.8rem', marginTop: '6px', marginBottom: '16px' }}>
            Built on Honest Relationships
          </h2>
          <p style={{ color: '#4a5750', lineHeight: 1.7, fontSize: '1rem', marginBottom: '28px' }}>
            At FolkMiles, we believe genuine travel is built on real trust. We never publish fake testimonials,
            manufactured review scores, or stock quotes. Every itinerary is planned with verified local partners,
            clear written quotations, and direct human support before and during your journey.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '20px',
              textAlign: 'left',
              marginBottom: '32px',
            }}
          >
            <div style={{ background: '#ffffff', padding: '16px', borderRadius: '10px', border: '1px solid #e8e3dc' }}>
              <ShieldCheck size={24} style={{ color: '#1f5b45', marginBottom: '8px' }} />
              <strong style={{ display: 'block', fontSize: '0.9rem', color: '#1c2621' }}>Written Quotation</strong>
              <span style={{ fontSize: '0.8rem', color: '#66726b' }}>Itemized stays, vehicles & inclusions</span>
            </div>
            <div style={{ background: '#ffffff', padding: '16px', borderRadius: '10px', border: '1px solid #e8e3dc' }}>
              <HeartHandshake size={24} style={{ color: '#9c4826', marginBottom: '8px' }} />
              <strong style={{ display: 'block', fontSize: '0.9rem', color: '#1c2621' }}>Direct Ground Support</strong>
              <span style={{ fontSize: '0.8rem', color: '#66726b' }}>Responsive human team on WhatsApp</span>
            </div>
            <div style={{ background: '#ffffff', padding: '16px', borderRadius: '10px', border: '1px solid #e8e3dc' }}>
              <MessageSquare size={24} style={{ color: '#1f5b45', marginBottom: '8px' }} />
              <strong style={{ display: 'block', fontSize: '0.9rem', color: '#1c2621' }}>Authentic Feedback</strong>
              <span style={{ fontSize: '0.8rem', color: '#66726b' }}>Real traveller reviews added transparently</span>
            </div>
          </div>

          <Link href="/contact" className="button" data-event="plan_trip_click">
            Plan Your Journey With a Local <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
