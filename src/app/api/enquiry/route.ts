import { NextRequest, NextResponse } from 'next/server';
import { schemas, FormKind } from '@/lib/forms';
import { saveLead } from '@/lib/leads';
import {
  sendLeadNotificationEmail,
  sendCustomerAcknowledgementEmail,
} from '@/lib/email';

// Simple in-memory sliding window rate limiter
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 6;
const ipRequests = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = ipRequests.get(ip) || [];
  const validTimestamps = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  validTimestamps.push(now);
  ipRequests.set(ip, validTimestamps);
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const clientIp =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      req.headers.get('x-real-ip') ||
      'unknown-ip';

    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        {
          success: false,
          message:
            'Too many enquiries received from this connection. Please wait a moment or reach out directly on WhatsApp.',
        },
        { status: 429 }
      );
    }

    const body = (await req.json()) as {
      kind?: FormKind;
      data?: Record<string, unknown>;
      sourcePage?: string;
      utmSource?: string;
      utmMedium?: string;
      utmCampaign?: string;
    };

    const kind: FormKind = body.kind || 'traveller';
    const schema = schemas[kind];

    if (!schema) {
      return NextResponse.json(
        { success: false, message: 'Invalid form type submitted.' },
        { status: 400 }
      );
    }

    const parseResult = schema.safeParse(body.data || {});

    if (!parseResult.success) {
      const fieldErrors = parseResult.error.flatten().fieldErrors;
      return NextResponse.json(
        {
          success: false,
          message: 'Please review the highlighted fields.',
          errors: fieldErrors,
        },
        { status: 400 }
      );
    }

    const validatedData = parseResult.data as Record<string, unknown>;

    // Honeypot protection
    if (validatedData.website) {
      return NextResponse.json(
        { success: false, message: 'Spam detected.' },
        { status: 400 }
      );
    }

    // Process traveller form
    if (kind === 'traveller') {
      const travellersCount =
        Number(validatedData.travellers) ||
        Number(validatedData.adults || 0) + Number(validatedData.children || 0) ||
        1;

      const interestsList: string[] = Array.isArray(validatedData.interests)
        ? (validatedData.interests as string[])
        : typeof validatedData.interests === 'string' && validatedData.interests.trim()
        ? [validatedData.interests.trim()]
        : [];

      const lead = await saveLead({
        name: String(validatedData.fullName || 'Traveller'),
        phone: String(validatedData.phone || ''),
        email: validatedData.email ? String(validatedData.email) : undefined,
        country: validatedData.country ? String(validatedData.country) : undefined,
        destination: String(validatedData.destination || 'Jaisalmer'),
        travelDate: validatedData.travelDates ? String(validatedData.travelDates) : undefined,
        flexibleDates:
          validatedData.flexibleDates === true ||
          validatedData.flexibleDates === 'true',
        travellers: travellersCount,
        duration: validatedData.duration ? String(validatedData.duration) : undefined,
        travellerType: validatedData.travellerType ? String(validatedData.travellerType) : undefined,
        budget: validatedData.budget ? String(validatedData.budget) : undefined,
        interests: interestsList,
        message: validatedData.message ? String(validatedData.message) : undefined,
        sourcePage: body.sourcePage || '/contact',
        utmSource: body.utmSource,
        utmMedium: body.utmMedium,
        utmCampaign: body.utmCampaign,
        status: 'new',
      });

      // Dispatch notifications (await settlement so serverless execution completes cleanly)
      await Promise.allSettled([
        sendLeadNotificationEmail(lead),
        lead.email ? sendCustomerAcknowledgementEmail(lead) : Promise.resolve(),
      ]);

      return NextResponse.json({
        success: true,
        message: 'Thank you. Your journey is now with FolkMiles.',
        supporting:
          "We've received your enquiry and will contact you using the details you provided.",
        leadId: lead.id,
      });
    }

    // Process B2B or Partner forms
    const name = String(validatedData.contactName || 'Partner Applicant');
    const destination =
      kind === 'b2b'
        ? `B2B: ${String(validatedData.agency || 'Agency')}`
        : `Partner: ${String(validatedData.business || 'Provider')}`;

    const lead = await saveLead({
      name,
      phone: String(validatedData.phone || ''),
      email: validatedData.email ? String(validatedData.email) : undefined,
      destination,
      travellers: Number(validatedData.travellers) || 1,
      travelDate: validatedData.travelDates ? String(validatedData.travelDates) : undefined,
      budget: validatedData.budget ? String(validatedData.budget) : undefined,
      message:
        String(validatedData.requirements || validatedData.message || '') ||
        `Service: ${String(validatedData.services || validatedData.category || '')}`,
      sourcePage: body.sourcePage || (kind === 'b2b' ? '/b2b-travel-partners' : '/local-partners'),
      status: 'new',
    });

    await Promise.allSettled([sendLeadNotificationEmail(lead)]);

    return NextResponse.json({
      success: true,
      message: 'Thank you. Your partnership enquiry is now with FolkMiles.',
      supporting:
        "We've received your details and will review your request shortly.",
      leadId: lead.id,
    });
  } catch (error) {
    console.error('[API /api/enquiry] Unexpected error:', error);
    return NextResponse.json(
      {
        success: false,
        message:
          "We couldn't send your enquiry right now. Please try again or contact FolkMiles on WhatsApp.",
      },
      { status: 500 }
    );
  }
}
