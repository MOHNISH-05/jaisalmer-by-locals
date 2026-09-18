# FolkMiles website

FolkMiles is an India-wide travel brand launching with Jaisalmer as its sole bookable destination. This project is a static Next.js App Router site.

## Local development

Install with `npm install`, then use `npm run dev`. Create `.env.local` from `.env.example` to add public business details and optional analytics.

## Launch configuration

Set `NEXT_PUBLIC_SITE_URL`, the official business email, WhatsApp number, Instagram URL and business address. Set `PUBLIC_LAUNCH_READY=true` only after legal policy review and launch checks; it enables indexing. Set analytics IDs only after consent and your analytics configuration are ready.

## Enquiry delivery

The site never claims an enquiry was sent when no endpoint exists. To activate delivery, deploy a server endpoint and set `NEXT_PUBLIC_ENQUIRY_ENDPOINT` to its HTTPS URL. It must validate incoming data with `schemas` from `src/lib/enquiry-handler.ts`, verify the honeypot, apply shared rate limiting, and return the field errors or success message expected by `EnquiryForm`. Keep service tokens on that endpoint only.

## Content updates

Jaisalmer itineraries, FAQs and editorial page content live in `src/lib/content.ts`. Brand contacts and optional tracking keys live in `src/lib/config.ts` and environment variables. Update timings, permissions, availability and supplier conditions before publishing factual changes.

## Checks

Run `npm run build`, `npm test`, `npm run check:routes` and `npm run lint` before deployment.
