import { test } from 'node:test';
import assert from 'node:assert/strict';
import { travellerSchema } from '../src/lib/forms';
import { folkMilesContact } from '../src/lib/contact';
import { saveLead, listLeads } from '../src/lib/leads';

test('folkMilesContact has correct official contact details', () => {
  assert.equal(folkMilesContact.phone, '+917849931611');
  assert.equal(folkMilesContact.phoneDisplay, '+91 7849931611');
  assert.equal(folkMilesContact.email, 'folkmilesindia@gmail.com');
  assert.equal(folkMilesContact.whatsapp, '917849931611');
  assert.equal(folkMilesContact.telUrl, 'tel:+917849931611');
  assert.equal(
    folkMilesContact.whatsappUrl.startsWith('https://wa.me/917849931611?text='),
    true
  );
});

test('valid traveller trip enquiry passes schema validation', () => {
  const result = travellerSchema.safeParse({
    fullName: 'Pooja Verma',
    phone: '+91 7849931611',
    email: 'pooja@example.com',
    destination: 'Jaisalmer',
    travellers: '2',
    travelDates: 'November 2026',
    flexibleDates: 'true',
    duration: '3 days / 2 nights',
    travellerType: 'Couples',
    budget: 'Comfortable & balanced',
    interests: ['Heritage', 'Desert Safari'],
    message: 'Looking for a private desert camp and haveli tour.',
    consent: 'true',
    website: '',
  });

  assert.equal(result.success, true);
  if (result.success) {
    assert.equal(result.data.destination, 'Jaisalmer');
    assert.equal(result.data.travellers, 2);
  }
});

test('missing required name or phone is rejected', () => {
  const missingName = travellerSchema.safeParse({
    fullName: '',
    phone: '+91 7849931611',
    destination: 'Jaisalmer',
    travellers: '2',
    consent: 'true',
  });
  assert.equal(missingName.success, false);

  const missingPhone = travellerSchema.safeParse({
    fullName: 'Rahul Sharma',
    phone: '',
    destination: 'Jaisalmer',
    travellers: '2',
    consent: 'true',
  });
  assert.equal(missingPhone.success, false);
});

test('invalid email format is rejected when supplied', () => {
  const result = travellerSchema.safeParse({
    fullName: 'Rahul Sharma',
    phone: '+91 7849931611',
    email: 'not-a-valid-email',
    destination: 'Jaisalmer',
    travellers: '2',
    consent: 'true',
  });
  assert.equal(result.success, false);
});

test('invalid traveller count (0 or negative) is rejected', () => {
  const zeroTravellers = travellerSchema.safeParse({
    fullName: 'Rahul Sharma',
    phone: '+91 7849931611',
    destination: 'Jaisalmer',
    travellers: '0',
    consent: 'true',
  });
  assert.equal(zeroTravellers.success, false);

  const negativeTravellers = travellerSchema.safeParse({
    fullName: 'Rahul Sharma',
    phone: '+91 7849931611',
    destination: 'Jaisalmer',
    travellers: '-2',
    consent: 'true',
  });
  assert.equal(negativeTravellers.success, false);
});

test('spam honeypot rejects automated submission', () => {
  const spamResult = travellerSchema.safeParse({
    fullName: 'Bot User',
    phone: '+91 7849931611',
    destination: 'Jaisalmer',
    travellers: '2',
    consent: 'true',
    website: 'http://spam-link.ru',
  });
  assert.equal(spamResult.success, false);
});

test('lead persistence creates and stores lead record', async () => {
  const lead = await saveLead({
    name: 'Test Traveller',
    phone: '+91 7849931611',
    email: 'test@folkmiles.com',
    destination: 'Jaisalmer',
    travellers: 2,
    message: 'Test enquiry persistence',
    status: 'new',
  });

  assert.ok(lead.id.startsWith('lead_'));
  assert.equal(lead.name, 'Test Traveller');
  assert.equal(lead.status, 'new');

  const allLeads = await listLeads();
  const found = allLeads.find((l) => l.id === lead.id);
  assert.ok(found);
  assert.equal(found.phone, '+91 7849931611');
});
