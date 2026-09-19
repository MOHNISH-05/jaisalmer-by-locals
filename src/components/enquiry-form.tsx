'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { track } from './analytics';
import { schemas, FormKind } from '@/lib/forms';
import { folkMilesContact } from '@/lib/contact';

type State = {
  status: 'idle' | 'sending' | 'success' | 'error';
  message?: string;
  supporting?: string;
  errors?: Record<string, string[]>;
};

const INTEREST_OPTIONS = [
  'Heritage',
  'Desert Safari',
  'Local Food',
  'Local Culture',
  'Village Experience',
  'Photography',
  'Adventure',
  'Luxury Stay',
  'Family Travel',
  'Custom Tour',
];

const TRAVELLER_TYPES = [
  'Couples',
  'Family with Children',
  'Solo Traveller',
  'Friends & Group',
  'Senior Travellers',
  'Private Tour',
];

const DURATION_OPTIONS = [
  '2 days / 1 night',
  '3 days / 2 nights (Recommended)',
  '4 days / 3 nights',
  '5+ days (Custom)',
  'Not sure yet',
];

const BUDGET_OPTIONS = [
  'Value conscious',
  'Comfortable & balanced',
  'Premium / Luxury',
  'Looking for guidance',
];

export function EnquiryForm({ kind = 'traveller' }: { kind?: FormKind }) {
  const [state, setState] = useState<State>({ status: 'idle' });
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [formData, setFormData] = useState<Record<string, string>>({
    destination: 'Jaisalmer',
    travellers: '2',
  });

  const title =
    kind === 'traveller'
      ? 'Plan your journey'
      : kind === 'b2b'
      ? 'Send a travel-agent brief'
      : 'Apply to partner';

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState({ status: 'sending' });

    const rawForm = new FormData(e.currentTarget);
    const dataObj: Record<string, unknown> = Object.fromEntries(rawForm.entries());

    if (kind === 'traveller') {
      dataObj.interests = selectedInterests;
      dataObj.flexibleDates = rawForm.get('flexibleDates') === 'true';
    }

    const schema = schemas[kind];
    const validation = schema.safeParse(dataObj);

    if (!validation.success) {
      setState({
        status: 'error',
        message: 'Please review the highlighted fields.',
        errors: validation.error.flatten().fieldErrors,
      });
      return;
    }

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          kind,
          data: dataObj,
          sourcePage: typeof window !== 'undefined' ? window.location.pathname : '/contact',
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setState({
          status: 'error',
          message:
            result.message ||
            "We couldn't send your enquiry right now. Please try again or contact FolkMiles on WhatsApp.",
          errors: result.errors,
        });
        return;
      }

      setState({
        status: 'success',
        message: result.message || 'Thank you. Your journey is now with FolkMiles.',
        supporting:
          result.supporting ||
          "We've received your enquiry and will contact you using the details you provided.",
      });

      track(
        kind === 'traveller'
          ? 'traveller_form_submission'
          : kind === 'b2b'
          ? 'b2b_form_submission'
          : 'local_partner_application'
      );
    } catch {
      setState({
        status: 'error',
        message:
          "We couldn't send your enquiry right now. Please try again or contact FolkMiles on WhatsApp.",
      });
    }
  }

  if (state.status === 'success') {
    return (
      <div className="enquiry-form success-state" role="status">
        <h2 style={{ color: '#103f32', marginBottom: '12px' }}>
          {state.message}
        </h2>
        <p style={{ fontSize: '1.05rem', color: '#44514a', marginBottom: '24px' }}>
          {state.supporting}
        </p>

        <div style={{ background: '#f6f3eb', padding: '20px', borderRadius: '4px', marginBottom: '24px' }}>
          <p style={{ fontSize: '0.9rem', color: '#55625b', margin: 0 }}>
            Prefer an immediate conversation? Reach us directly on WhatsApp:
          </p>
          <a
            href={folkMilesContact.whatsappUrl}
            className="button secondary"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginTop: '12px' }}
          >
            <MessageCircle size={18} /> WhatsApp FolkMiles (+91 7849931611)
          </a>
        </div>

        <button
          type="button"
          className="text-link"
          onClick={() => {
            setState({ status: 'idle' });
            setSelectedInterests([]);
          }}
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form className="enquiry-form" onSubmit={handleSubmit} noValidate>
      <h2>{title}</h2>
      <p className="form-note">
        Required fields help us shape a thoughtful, accurate itinerary.
      </p>

      {state.status === 'error' && (
        <div className="form-status" role="alert">
          <p>{state.message}</p>
          <a
            href={folkMilesContact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              marginTop: '8px',
              fontWeight: 600,
              color: '#9c4826',
            }}
          >
            <MessageCircle size={16} /> Chat on WhatsApp instead
          </a>
        </div>
      )}

      {/* Honeypot anti-spam field */}
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">Leave this empty</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="form-grid">
        {/* Full Name */}
        <div className="field">
          <label htmlFor="field-fullName">
            Your name <span aria-hidden="true">*</span>
          </label>
          <input
            id="field-fullName"
            name="fullName"
            type="text"
            required
            autoComplete="name"
            placeholder="e.g. Rahul Sharma"
            value={formData.fullName || ''}
            onChange={handleInputChange}
            aria-invalid={!!state.errors?.fullName}
            aria-describedby={state.errors?.fullName ? 'error-fullName' : undefined}
          />
          {state.errors?.fullName && (
            <p className="field-error" id="error-fullName">
              {state.errors.fullName[0]}
            </p>
          )}
        </div>

        {/* Phone / WhatsApp */}
        <div className="field">
          <label htmlFor="field-phone">
            Phone / WhatsApp <span aria-hidden="true">*</span>
          </label>
          <input
            id="field-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="+91 98765 43210"
            value={formData.phone || ''}
            onChange={handleInputChange}
            aria-invalid={!!state.errors?.phone}
            aria-describedby={state.errors?.phone ? 'error-phone' : undefined}
          />
          {state.errors?.phone && (
            <p className="field-error" id="error-phone">
              {state.errors.phone[0]}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="field">
          <label htmlFor="field-email">Email address</label>
          <input
            id="field-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="name@example.com"
            value={formData.email || ''}
            onChange={handleInputChange}
            aria-invalid={!!state.errors?.email}
            aria-describedby={state.errors?.email ? 'error-email' : undefined}
          />
          {state.errors?.email && (
            <p className="field-error" id="error-email">
              {state.errors.email[0]}
            </p>
          )}
        </div>

        {/* Destination */}
        <div className="field">
          <label htmlFor="field-destination">
            Destination <span aria-hidden="true">*</span>
          </label>
          <input
            id="field-destination"
            name="destination"
            type="text"
            required
            placeholder="Jaisalmer, Rajasthan"
            value={formData.destination || 'Jaisalmer'}
            onChange={handleInputChange}
            aria-invalid={!!state.errors?.destination}
            aria-describedby={state.errors?.destination ? 'error-destination' : undefined}
          />
          {state.errors?.destination && (
            <p className="field-error" id="error-destination">
              {state.errors.destination[0]}
            </p>
          )}
        </div>

        {/* Number of Travellers */}
        <div className="field">
          <label htmlFor="field-travellers">
            Number of travellers <span aria-hidden="true">*</span>
          </label>
          <input
            id="field-travellers"
            name="travellers"
            type="number"
            min="1"
            max="100"
            required
            placeholder="2"
            value={formData.travellers || '2'}
            onChange={handleInputChange}
            aria-invalid={!!state.errors?.travellers}
            aria-describedby={state.errors?.travellers ? 'error-travellers' : undefined}
          />
          {state.errors?.travellers && (
            <p className="field-error" id="error-travellers">
              {state.errors.travellers[0]}
            </p>
          )}
        </div>

        {/* Country */}
        <div className="field">
          <label htmlFor="field-country">Country of residence</label>
          <input
            id="field-country"
            name="country"
            type="text"
            placeholder="e.g. India, United Kingdom, USA"
            value={formData.country || ''}
            onChange={handleInputChange}
          />
        </div>

        {/* Travel Dates */}
        <div className="field">
          <label htmlFor="field-travelDates">Expected travel date / month</label>
          <input
            id="field-travelDates"
            name="travelDates"
            type="text"
            placeholder="e.g. November 2026 or Nov 14 - 18"
            value={formData.travelDates || ''}
            onChange={handleInputChange}
          />
          <label
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.8rem',
              marginTop: '6px',
              cursor: 'pointer',
            }}
          >
            <input type="checkbox" name="flexibleDates" value="true" />
            <span>My travel dates are flexible</span>
          </label>
        </div>

        {/* Duration */}
        <div className="field">
          <label htmlFor="field-duration">Trip duration</label>
          <select
            id="field-duration"
            name="duration"
            value={formData.duration || ''}
            onChange={handleInputChange}
          >
            <option value="">Choose trip duration</option>
            {DURATION_OPTIONS.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>

        {/* Traveller Type */}
        <div className="field">
          <label htmlFor="field-travellerType">Who is travelling?</label>
          <select
            id="field-travellerType"
            name="travellerType"
            value={formData.travellerType || ''}
            onChange={handleInputChange}
          >
            <option value="">Select traveller type</option>
            {TRAVELLER_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        {/* Budget */}
        <div className="field">
          <label htmlFor="field-budget">Budget expectation</label>
          <select
            id="field-budget"
            name="budget"
            value={formData.budget || ''}
            onChange={handleInputChange}
          >
            <option value="">Select budget range</option>
            {BUDGET_OPTIONS.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>

        {/* Interests Chips */}
        <div className="field full">
          <label style={{ marginBottom: '8px', display: 'block' }}>
            What would you like to experience? <small style={{ color: '#66726b' }}>(Optional)</small>
          </label>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {INTEREST_OPTIONS.map((interest) => {
              const isSelected = selectedInterests.includes(interest);
              return (
                <button
                  type="button"
                  key={interest}
                  onClick={() => toggleInterest(interest)}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '20px',
                    border: '1px solid',
                    borderColor: isSelected ? '#103f32' : '#c8cfc7',
                    background: isSelected ? '#103f32' : '#ffffff',
                    color: isSelected ? '#ffffff' : '#28352f',
                    fontSize: '0.82rem',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {interest}
                </button>
              );
            })}
          </div>
        </div>

        {/* Message */}
        <div className="field full">
          <label htmlFor="field-message">
            Anything else we should know? <small style={{ color: '#66726b' }}>(Optional)</small>
          </label>
          <textarea
            id="field-message"
            name="message"
            rows={3}
            placeholder="Tell us about your travel style, dietary preferences, special occasions, or specific questions."
            value={formData.message || ''}
            onChange={handleInputChange}
          />
        </div>
      </div>

      {/* Consent */}
      <label className="consent">
        <input
          name="consent"
          type="checkbox"
          value="true"
          required
          aria-invalid={!!state.errors?.consent}
        />
        <span>
          I agree that FolkMiles may use these details to respond to this request,
          as described in the <Link href="/privacy-policy">privacy policy</Link>.
        </span>
      </label>
      {state.errors?.consent && (
        <p className="field-error">{state.errors.consent[0]}</p>
      )}

      <p className="form-note">
        This is an enquiry, not a rigid booking. A journey is confirmed only after
        services, dates, and pricing are agreed in writing.
      </p>

      <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
        <button
          type="submit"
          className="button"
          disabled={state.status === 'sending'}
        >
          {state.status === 'sending' ? 'Sending enquiry…' : 'Plan My Trip'} <ArrowUpRight size={16} />
        </button>
        <a
          href={folkMilesContact.whatsappUrl}
          className="button secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={16} /> WhatsApp FolkMiles
        </a>
      </div>
    </form>
  );
}
