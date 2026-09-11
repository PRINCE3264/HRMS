export interface DailyWorkUpdate {
  id: string;
  employeeId: string;
  employeeName: string;
  employeeDesignation?: string;
  date: string;
  tasksCompleted: string[];
  workSummary: string;
  issuesBlockers?: string;
  hoursWorked?: number;
  status: WorkUpdateStatus;
  createdAt: string;
  updatedAt?: string;
}

export enum WorkUpdateStatus {
  SUBMITTED = 'SUBMITTED',
  REVISED = 'REVISED',
  APPROVED = 'APPROVED'
}

export interface CreateDailyWorkUpdate {
  tasksCompleted: string[];
  workSummary: string;
  issuesBlockers?: string;
  hoursWorked?: number;
}

export interface UpdateDailyWorkUpdate {
  tasksCompleted?: string[];
  workSummary?: string;
  issuesBlockers?: string;
  hoursWorked?: number;
  status?: WorkUpdateStatus;
}