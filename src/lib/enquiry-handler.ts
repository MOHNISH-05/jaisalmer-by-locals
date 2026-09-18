// Deploy this handler behind NEXT_PUBLIC_ENQUIRY_ENDPOINT when activating enquiries.
// The host should call schemas[kind].safeParse(data), verify the honeypot, apply a shared
// rate limit and only report success after durable CRM, email or database delivery.
export {schemas} from './forms';
