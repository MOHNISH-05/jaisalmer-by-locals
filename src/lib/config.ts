import { folkMilesContact } from './contact';
export { folkMilesContact };

export const brand = {
  name: 'FolkMiles',
  tagline: 'Explore by Locals',
  domain: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://folkmiles.com',
  email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || folkMilesContact.email,
  phone: folkMilesContact.phone,
  whatsapp: folkMilesContact.whatsapp,
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || folkMilesContact.instagramUrl,
  address: process.env.NEXT_PUBLIC_BUSINESS_ADDRESS || '',
  ga: process.env.NEXT_PUBLIC_GA_ID || '',
  gtm: process.env.NEXT_PUBLIC_GTM_ID || '',
  pixel: process.env.NEXT_PUBLIC_META_PIXEL_ID || '',
};
export const quoteNote = 'Final pricing depends on travel dates, group size, stay category, transport and selected experiences. Every booking receives a written quotation.';
export const destinationPath = '/destinations/jaisalmer';
