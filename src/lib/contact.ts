export const folkMilesContact = {
  brand: 'FolkMiles',
  tagline: 'Explore by Locals',
  email: 'folkmilesindia@gmail.com',
  phoneDisplay: '+91 7849931611',
  phoneRaw: '917849931611',
  phone: '+917849931611',
  whatsapp: '917849931611',
  instagram: 'folkmilesindia',
  instagramHandle: '@folkmilesindia',
  instagramUrl: 'https://instagram.com/folkmilesindia',
  website: 'https://folkmiles.com',
  telUrl: 'tel:+917849931611',
  whatsappMessage: `Hi FolkMiles,
I'm planning a trip and would like some help.

Destination: 
Travel dates: 
Travellers: `,
  whatsappUrl: `https://wa.me/917849931611?text=${encodeURIComponent(
    `Hi FolkMiles,\nI'm planning a trip and would like some help.\n\nDestination: \nTravel dates: \nTravellers: `
  )}`,
  getWhatsAppUrl: (customMessage?: string) => {
    const msg =
      customMessage ||
      `Hi FolkMiles,\nI'm planning a trip and would like some help.\n\nDestination: \nTravel dates: \nTravellers: `;
    return `https://wa.me/917849931611?text=${encodeURIComponent(msg)}`;
  },
} as const;

export type FolkMilesContact = typeof folkMilesContact;
