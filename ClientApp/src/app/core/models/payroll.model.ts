export interface PayrollRecord {
  id: string;
  employeeId: string;
  employeeName: string;
  department: string;
  month: string;
  year: number;
  basicSalary: number;
  allowances: number;
  deductions: number;
  netPay: number;
  status: PayrollStatus;
  paidDate?: string;
  createdAt?: string;
}

export enum PayrollStatus {
  DRAFT = 'DRAFT',
  PROCESSED = 'PROCESSED',
  APPROVED = 'APPROVED',
  PAID = 'PAID',
  REJECTED = 'REJECTED'
}

export interface Payslip {
  id: string;
  payrollId: string;
  employeeId: string;
  employeeName: string;
  month: string;
  year: number;
  basicSalary: number;
  hra: number;
  conveyance: number;
  medicalAllowance: number;
  specialAllowance: number;
  pf: number;
  esi: number;
  tds: number;
  professionalTax: number;
  totalEarnings: number;
  totalDeductions: number;
  netPay: number;
}
