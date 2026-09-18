import {test} from 'node:test';
import assert from 'node:assert/strict';
import {travellerSchema,partnerSchema} from '../src/lib/forms';
test('valid traveller enquiry passes',()=>assert.equal(travellerSchema.safeParse({fullName:'Asha Sharma',phone:'+91 98765 43210',email:'asha@example.com',city:'Delhi',travelDates:'November 2026',adults:'2',children:'0',duration:'3 days / 2 nights',stayPreference:'Comfortable',budget:'Comfortable',consent:'true',website:''}).success,true));
test('missing consent is rejected',()=>assert.equal(travellerSchema.safeParse({fullName:'Asha Sharma',phone:'9876543210',email:'asha@example.com',city:'Delhi',travelDates:'November',adults:'2',children:'0',duration:'3 days',stayPreference:'Comfortable',budget:'Comfortable',website:''}).success,false));
test('partner applications require an empty honeypot',()=>assert.equal(partnerSchema.safeParse({contactName:'Asha Sharma',business:'Desert Host',category:'Local guide',phone:'9876543210',email:'a@example.com',serviceArea:'Jaisalmer',consent:'true',website:'bot'}).success,false));
