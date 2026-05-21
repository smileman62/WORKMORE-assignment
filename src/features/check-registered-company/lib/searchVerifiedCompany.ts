import { mockVerifiedCompanies } from '@/entities/safety/model/mock';
import type {
  CorpCheckSearchInput,
  VerifiedCompany,
} from '@/entities/safety/model/types';

function normalizePhone(value: string): string {
  return value.replace(/[^0-9]/g, '');
}

function normalizeQuery(value: string): string {
  return value.trim().toLowerCase();
}

function matchesField(
  company: VerifiedCompany,
  type: CorpCheckSearchInput['type'],
  query: string,
): boolean {
  const q = normalizeQuery(query);

  switch (type) {
    case 'businessName':
      return company.businessName.toLowerCase().includes(q);
    case 'representativeName':
      return company.representativeName.toLowerCase().includes(q);
    case 'adPhone':
      return normalizePhone(company.adPhone).includes(normalizePhone(query));
    default:
      return false;
  }
}

export async function searchVerifiedCompany(
  input: CorpCheckSearchInput,
): Promise<VerifiedCompany | null> {
  const query = input.query.trim();
  if (!query) return null;

  await new Promise((resolve) => setTimeout(resolve, 600));

  const found = mockVerifiedCompanies.find(
    (company) =>
      matchesField(company, input.type, query) && company.isRegistered,
  );

  return found ?? null;
}
