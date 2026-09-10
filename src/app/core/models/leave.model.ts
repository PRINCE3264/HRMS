export interface LeaveRequest {
  id: string;
  employeeId: string;
  employeeName: string;
  leaveType: LeaveType;
  startDate: string;
  endDate: string;
  totalDays: number;
  reason: string;
  status: LeaveStatus;
  approvedBy?: string;
  approvedAt?: string;
  comments?: string;
  createdAt: string;
}

export enum LeaveType {
  ANNUAL = 'Annual Leave',
  SICK = 'Sick Leave',
  PERSONAL = 'Personal Leave',
  MATERNITY = 'Maternity Leave',
  PATERNITY = 'Paternity Leave',
  UNPAID = 'Unpaid Leave',
  COMPENSATORY = 'Compensatory Off',
  BEREAVEMENT = 'Bereavement Leave'
}

export enum LeaveStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  CANCELLED = 'CANCELLED'
}

export interface LeaveBalance {
  leaveType: LeaveType;
  entitled: number;
  taken: number;
  remaining: number;
}
