export interface AttendanceCorrection {
  id: string;
  attendanceId: string;
  employeeId: string;
  employeeName?: string;
  employeeCode?: string;
  date: string;
  originalCheckIn: string;
  originalCheckOut: string;
  correctedCheckIn?: string;
  correctedCheckOut?: string;
  reason: string;
  status: string;
  requestedById: string;
  requestedByName?: string;
  approvedById?: string;
  approvedByName?: string;
  rejectionReason?: string;
  createdAt: string;
  reviewedAt?: string;
}

export interface AttendanceSummary {
  employeeName: string;
  employeeCode: string;
  presentDays: number;
  absentDays: number;
  lateDays: number;
  earlyDays: number;
  leaveDays: number;
  totalWorkHours: number;
  totalOvertime: number;
  attendancePercent: number;
}

export interface AttendanceRule {
  id: string;
  name: string;
  lateThresholdTime?: string;
  graceMinutes: number;
  minWorkHours: number;
  maxBreakMinutes: number;
  overtimeAfterHours: number;
  overtimePolicy: string;
  autoMarkAbsentOnNoCheckIn: boolean;
  description?: string;
  isActive: boolean;
}

export interface SalaryStructure {
  id: string;
  employeeId: string;
  employeeName?: string;
  employeeCode?: string;
  basicSalary: number;
  hra: number;
  conveyance: number;
  medicalAllowance: number;
  specialAllowance: number;
  totalEarnings: number;
  pfPercent: number;
  esiPercent: number;
  tdsPercent: number;
  professionalTax: number;
  totalDeductions: number;
  netPay: number;
  isActive: boolean;
  effectiveFrom: string;
  effectiveTo?: string;
}

export interface SalaryComponent {
  name: string;
  type: string;
  amount: number;
  percentage?: string;
}

export interface PayrollReport {
  totalBasic: number;
  totalEarnings: number;
  totalDeductions: number;
  totalNetPay: number;
  employeeCount: number;
  processedCount: number;
  averageSalary: number;
  highestSalary: number;
  lowestSalary: number;
  earningsComponents: SalaryComponent[];
  deductionComponents: SalaryComponent[];
  chart: chartData;
}

export interface chartData {
  labels: string[];
  datasets: { label: string; data: number[]; backgroundColor?: string }[];
}

export interface ReportingNode {
  id: string;
  employeeId: string;
  name: string;
  avatar?: string;
  designation?: string;
  department?: string;
  employmentStatus: string;
  directReportCount: number;
  children: ReportingNode[];
}

export interface ReportingFlat {
  id: string;
  employeeId: string;
  name: string;
  designation?: string;
  department?: string;
  managerId?: string;
  managerName?: string;
}

export interface CompanyProfile {
  id: string;
  companyName: string;
  website?: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  zipCode?: string;
  registrationNumber?: string;
  taxId?: string;
  currency: string;
  logoUrl?: string;
  fiscalYearStart?: string;
  workingDays?: string;
}

export interface NotificationPreference {
  id: string;
  eventName: string;
  description?: string;
  emailEnabled: boolean;
  smsEnabled: boolean;
  inAppEnabled: boolean;
  updatedAt: string;
}

export interface EmailSmsConfig {
  settings: Record<string, string>;
}