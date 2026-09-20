import { promises as fs } from 'node:fs';
import path from 'node:path';

export type LeadStatus = 'new' | 'contacted' | 'qualified' | 'booked' | 'closed';

export interface LeadRecord {
  id: string;
  createdAt: string;
  name: string;
  email?: string;
  phone: string;
  country?: string;
  destination: string;
  travelDate?: string;
  flexibleDates?: boolean;
  travellers: number;
  duration?: string;
  travellerType?: string;
  budget?: string;
  interests?: string[];
  message?: string;
  sourcePage?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  status: LeadStatus;
}

export type CreateLeadInput = Omit<LeadRecord, 'id' | 'createdAt' | 'status'> & {
  status?: LeadStatus;
};

export interface LeadStorageAdapter {
  save(lead: LeadRecord): Promise<void>;
  list(): Promise<LeadRecord[]>;
}

// Local persistent file storage implementation
class FileLeadStorage implements LeadStorageAdapter {
  private filePath: string;

  constructor() {
    const isVercel = Boolean(process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME);
    this.filePath = isVercel
      ? path.join('/tmp', 'leads.json')
      : path.join(process.cwd(), '.data', 'leads.json');
  }

  private async ensureDir(): Promise<void> {
    try {
      const dir = path.dirname(this.filePath);
      await fs.mkdir(dir, { recursive: true });
    } catch {
      // ignore
    }
  }

  async list(): Promise<LeadRecord[]> {
    try {
      await this.ensureDir();
      const content = await fs.readFile(this.filePath, 'utf8');
      return JSON.parse(content) as LeadRecord[];
    } catch {
      return [];
    }
  }

  async save(lead: LeadRecord): Promise<void> {
    try {
      await this.ensureDir();
      const existing = await this.list();
      existing.unshift(lead);
      await fs.writeFile(this.filePath, JSON.stringify(existing, null, 2), 'utf8');
    } catch (err) {
      console.warn('[LeadStorage] Local file write skipped or failed (ephemeral serverless environment):', err);
    }
  }
}

// Default storage adapter (File-based, ready to swap to Supabase/Postgres)
const defaultAdapter: LeadStorageAdapter = new FileLeadStorage();

export async function saveLead(
  input: CreateLeadInput,
  adapter: LeadStorageAdapter = defaultAdapter
): Promise<LeadRecord> {
  const id = `lead_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  const record: LeadRecord = {
    id,
    createdAt: new Date().toISOString(),
    status: input.status || 'new',
    ...input,
  };

  try {
    await adapter.save(record);
  } catch (err) {
    console.warn('Failed to persist lead record:', err);
  }

  return record;
}

export async function listLeads(
  adapter: LeadStorageAdapter = defaultAdapter
): Promise<LeadRecord[]> {
  return adapter.list();
}
