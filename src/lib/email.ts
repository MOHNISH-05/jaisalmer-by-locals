import { LeadRecord } from './leads';
import { folkMilesContact } from './contact';

export interface EmailDeliveryResult {
  success: boolean;
  messageId?: string;
  error?: string;
}

const RESEND_ENDPOINT = 'https://api.resend.com/emails';

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Dispatches notification email to FolkMiles team with lead details.
 */
export async function sendLeadNotificationEmail(
  lead: LeadRecord
): Promise<EmailDeliveryResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.FOLKMILES_LEADS_EMAIL || folkMilesContact.email;
  const fromEmail =
    process.env.FOLKMILES_FROM_EMAIL ||
    'FolkMiles Journeys <onboarding@resend.dev>';

  const subject = `New FolkMiles Enquiry — ${lead.destination} — ${lead.name}`;

  const interestsList =
    lead.interests && lead.interests.length > 0
      ? lead.interests.join(', ')
      : 'Not specified';

  const textContent = `
NEW FOLKMILES TRIP ENQUIRY
=======================================
Destination:      ${lead.destination}
Traveller Name:   ${lead.name}
Phone / WhatsApp: ${lead.phone}
Email:            ${lead.email || 'Not provided'}
Country:          ${lead.country || 'Not specified'}
Travellers:       ${lead.travellers}
Travel Dates:     ${lead.travelDate || 'Flexible / Not specified'}${
    lead.flexibleDates ? ' (Flexible dates)' : ''
  }
Duration:         ${lead.duration || 'Not specified'}
Traveller Type:   ${lead.travellerType || 'Not specified'}
Budget Range:     ${lead.budget || 'Not specified'}
Interests:        ${interestsList}

Message from Traveller:
---------------------------------------
${lead.message || 'No additional message provided.'}

Metadata:
---------------------------------------
Enquiry ID:       ${lead.id}
Received At:      ${lead.createdAt}
Source Page:      ${lead.sourcePage || '/contact'}
=======================================
Reply directly to this email to respond to the traveller.
`.trim();

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${escapeHtml(subject)}</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #1c2e26; background-color: #faf7f0; margin: 0; padding: 24px;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #d8dcd3; border-radius: 4px; overflow: hidden;">
    <tr>
      <td style="background: #103f32; padding: 24px 32px; color: #ffffff;">
        <h1 style="margin: 0; font-size: 24px; font-family: Georgia, serif; color: #f4e9d8;">FolkMiles</h1>
        <p style="margin: 4px 0 0; font-size: 13px; color: #e5b575; letter-spacing: 0.1em; text-transform: uppercase;">New Trip Enquiry · ${escapeHtml(
          lead.destination
        )}</p>
      </td>
    </tr>
    <tr>
      <td style="padding: 32px;">
        <h2 style="margin: 0 0 16px; font-size: 18px; color: #103f32; font-family: Georgia, serif;">Traveller Information</h2>
        <table width="100%" cellpadding="6" cellspacing="0" style="font-size: 14px; margin-bottom: 24px; border-collapse: collapse;">
          <tr style="border-bottom: 1px solid #eee;">
            <td width="35%" style="color: #66726b; font-weight: bold;">Name:</td>
            <td><strong>${escapeHtml(lead.name)}</strong></td>
          </tr>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="color: #66726b; font-weight: bold;">Phone / WhatsApp:</td>
            <td><a href="tel:${escapeHtml(
              lead.phone
            )}" style="color: #103f32; text-decoration: none; font-weight: bold;">${escapeHtml(
    lead.phone
  )}</a></td>
          </tr>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="color: #66726b; font-weight: bold;">Email:</td>
            <td>${
              lead.email
                ? `<a href="mailto:${escapeHtml(
                    lead.email
                  )}" style="color: #103f32;">${escapeHtml(lead.email)}</a>`
                : '<span style="color: #888;">Not provided</span>'
            }</td>
          </tr>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="color: #66726b; font-weight: bold;">Country:</td>
            <td>${escapeHtml(lead.country || 'Not specified')}</td>
          </tr>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="color: #66726b; font-weight: bold;">Destination:</td>
            <td><strong>${escapeHtml(lead.destination)}</strong></td>
          </tr>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="color: #66726b; font-weight: bold;">Travellers:</td>
            <td>${lead.travellers}</td>
          </tr>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="color: #66726b; font-weight: bold;">Travel Dates:</td>
            <td>${escapeHtml(lead.travelDate || 'Not specified')}${
    lead.flexibleDates ? ' <em>(Flexible)</em>' : ''
  }</td>
          </tr>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="color: #66726b; font-weight: bold;">Duration:</td>
            <td>${escapeHtml(lead.duration || 'Not specified')}</td>
          </tr>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="color: #66726b; font-weight: bold;">Traveller Type:</td>
            <td>${escapeHtml(lead.travellerType || 'Not specified')}</td>
          </tr>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="color: #66726b; font-weight: bold;">Budget Range:</td>
            <td>${escapeHtml(lead.budget || 'Not specified')}</td>
          </tr>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="color: #66726b; font-weight: bold;">Interests:</td>
            <td>${escapeHtml(interestsList)}</td>
          </tr>
        </table>

        ${
          lead.message
            ? `
        <h2 style="margin: 20px 0 10px; font-size: 16px; color: #103f32; font-family: Georgia, serif;">Traveller Note</h2>
        <div style="background: #f6f3eb; padding: 16px; border-left: 3px solid #b54b1a; font-size: 14px; margin-bottom: 24px; white-space: pre-wrap;">${escapeHtml(
          lead.message
        )}</div>
        `
            : ''
        }

        <p style="font-size: 12px; color: #78857d; margin-top: 30px; border-top: 1px solid #eee; padding-top: 16px;">
          Enquiry ID: ${lead.id} · Received at ${lead.createdAt} · Source: ${escapeHtml(
    lead.sourcePage || '/contact'
  )}
        </p>
      </td>
    </tr>
  </table>
</body>
</html>
`.trim();

  if (!apiKey) {
    console.warn(
      '[Email Service] RESEND_API_KEY not configured. Lead notification logged locally:\n' +
        textContent
    );
    return {
      success: true,
      messageId: `mock_${lead.id}`,
    };
  }

  try {
    const payload: Record<string, unknown> = {
      from: fromEmail,
      to: [toEmail],
      subject,
      text: textContent,
      html: htmlContent,
    };

    if (lead.email) {
      payload.reply_to = lead.email;
    }

    const response = await fetch(RESEND_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errBody = await response.text();
      console.error('[Email Service] Resend API error:', errBody);
      return { success: false, error: errBody };
    }

    const data = (await response.json()) as { id?: string };
    return { success: true, messageId: data.id };
  } catch (error) {
    console.error('[Email Service] Network error sending notification:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown network error',
    };
  }
}

/**
 * Dispatches customer acknowledgement email when an email address is provided.
 */
export async function sendCustomerAcknowledgementEmail(
  lead: LeadRecord
): Promise<EmailDeliveryResult> {
  if (!lead.email) {
    return { success: true };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail =
    process.env.FOLKMILES_FROM_EMAIL ||
    'FolkMiles Journeys <onboarding@resend.dev>';

  const firstName = lead.name.trim().split(' ')[0] || 'there';
  const destination = lead.destination || 'India';
  const subject = 'We received your FolkMiles journey enquiry';

  const textContent = `
Hi ${firstName},

Thank you for contacting FolkMiles.

We've received your trip enquiry for ${destination}.

Our team will review your details and contact you to continue planning your journey.

FolkMiles
Explore India by Locals.
https://folkmiles.com
`.trim();

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${escapeHtml(subject)}</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #1c2e26; background-color: #faf7f0; margin: 0; padding: 24px;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 540px; margin: 0 auto; background: #ffffff; border: 1px solid #d8dcd3; border-radius: 4px; padding: 32px;">
    <tr>
      <td>
        <h1 style="margin: 0 0 12px; font-size: 26px; font-family: Georgia, serif; color: #103f32;">FolkMiles</h1>
        <p style="font-size: 15px; margin: 0 0 16px;">Hi ${escapeHtml(
          firstName
        )},</p>
        <p style="font-size: 15px; margin: 0 0 16px;">Thank you for contacting FolkMiles.</p>
        <p style="font-size: 15px; margin: 0 0 16px;">We’ve received your trip enquiry for <strong>${escapeHtml(
          destination
        )}</strong>.</p>
        <p style="font-size: 15px; margin: 0 0 24px;">Our team will review your details and contact you to continue planning your journey.</p>
        <div style="border-top: 1px solid #eee; padding-top: 20px; font-size: 13px; color: #66726b;">
          <strong style="color: #103f32; display: block; font-size: 14px;">FolkMiles</strong>
          Explore India by Locals.<br>
          <a href="${
            folkMilesContact.website
          }" style="color: #b54b1a; text-decoration: none;">folkmiles.com</a> · 
          <a href="tel:${
            folkMilesContact.telUrl
          }" style="color: #66726b; text-decoration: none;">${
    folkMilesContact.phoneDisplay
  }</a>
        </div>
      </td>
    </tr>
  </table>
</body>
</html>
`.trim();

  if (!apiKey) {
    console.log(
      `[Email Service] Customer acknowledgement logged for ${lead.email}`
    );
    return { success: true, messageId: `mock_ack_${lead.id}` };
  }

  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [lead.email],
        subject,
        text: textContent,
        html: htmlContent,
      }),
    });

    if (!response.ok) {
      const errBody = await response.text();
      console.error('[Email Service] Customer ack email error:', errBody);
      return { success: false, error: errBody };
    }

    const data = (await response.json()) as { id?: string };
    return { success: true, messageId: data.id };
  } catch (error) {
    console.error('[Email Service] Error sending customer ack:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown network error',
    };
  }
}
