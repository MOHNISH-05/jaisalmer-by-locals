import { z } from 'zod';

const text = (min: number, max = 1000) =>
  z
    .string({ error: 'Please complete this field.' })
    .trim()
    .min(min, 'Please complete this field.')
    .max(max, 'Please shorten this response.');

const phone = z
  .string({ error: 'Enter a valid phone number.' })
  .trim()
  .min(7, 'Enter a valid phone number.')
  .max(30, 'Enter a valid phone number.')
  .regex(/^[+()\-\s0-9]+$/, 'Enter a valid phone number.');

const email = z
  .string()
  .trim()
  .email('Enter a valid email address.')
  .max(254, 'Email address is too long.');

const optional = (max = 500) =>
  z.string().trim().max(max).optional().or(z.literal(''));

const consent = z.union([z.literal('true'), z.literal(true)], {
  error: 'Please confirm you agree to the privacy policy.',
});

const trap = z.string().max(0, 'Spam detected.').optional().or(z.literal(''));

const positive = z.coerce
  .number({ error: 'Enter a valid number.' })
  .int('Enter a whole number.')
  .min(1, 'Enter at least 1.');

const nonNegative = z.coerce
  .number({ error: 'Enter a valid number.' })
  .int('Enter a whole number.')
  .min(0, 'Enter 0 or more.');

export const travellerSchema = z.object({
  fullName: text(2, 100),
  phone,
  email: email.optional().or(z.literal('')),
  destination: z
    .string()
    .trim()
    .min(2, 'Please enter a destination.')
    .max(100)
    .default('Jaisalmer')
    .optional(),
  travellers: positive.max(100, 'Please contact us for larger groups.').optional(),
  country: optional(100),
  travelDates: optional(100),
  flexibleDates: z
    .union([z.boolean(), z.literal('true'), z.literal('false'), z.literal('')])
    .optional(),
  duration: optional(100),
  travellerType: optional(100),
  interests: z.union([z.array(z.string()), z.string()]).optional(),
  budget: optional(100),
  message: optional(2000),

  // Backward-compatible fields
  city: optional(100),
  adults: z.union([positive.max(50), z.literal('')]).optional(),
  children: z.union([nonNegative.max(50), z.literal('')]).optional(),
  stayPreference: optional(100),
  pickup: optional(100),

  consent,
  website: trap,
});

export const b2bSchema = z.object({
  contactName: text(2, 100),
  agency: text(2, 160),
  phone,
  email,
  city: text(2, 100),
  websiteOrSocial: optional(300),
  travelDates: text(2, 100),
  travellers: positive.max(1000, 'Please contact us for larger groups.'),
  services: text(2, 500),
  budget: text(2, 100),
  requirements: optional(2000),
  consent,
  website: trap,
});

export const partnerSchema = z.object({
  contactName: text(2, 100),
  business: text(2, 160),
  category: text(2, 100),
  phone,
  email,
  serviceArea: text(2, 200),
  websiteOrSocial: optional(300),
  message: optional(2000),
  consent,
  website: trap,
});

export type FormKind = 'traveller' | 'b2b' | 'partner';
export const schemas = {
  traveller: travellerSchema,
  b2b: b2bSchema,
  partner: partnerSchema,
};
