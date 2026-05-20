export type LoanCompany = {
  id: string;
  name: string;
  region: string;
  products: string[];
  isAdvertised: boolean;
  isVerified: boolean;
  consultationTime?: string;
};
