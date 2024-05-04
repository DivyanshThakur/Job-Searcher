export interface IJob {
  jdUid: string;
  jdLink: string;
  jobDetailsFromCompany: string;
  maxJdSalary: number;
  minJdSalary: number;
  salaryCurrencyCode: string;
  location: string;
  minExp: number;
  maxExp: number;
  jobRole: string;
  companyName: string;
  logoUrl: string;
}

export interface IOption {
  label: string;
  value: string | number;
}

export interface IFilter {
  roles: IOption[];
  locations: IOption[];
  remote: IOption | null;
  minExperience: IOption | null;
  minBasePay: IOption | null;
  companyName: string;
}
