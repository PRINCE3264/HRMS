export interface PerformanceReview {
  id: string;
  employeeId: string;
  employeeName: string;
  reviewerId: string;
  reviewerName: string;
  period: string;
  overallRating: number;
  goalsRating: number;
  competencyRating: number;
  comments: string;
  status: string;
  createdAt: string;
}

export interface KPI {
  id: string;
  employeeId: string;
  employeeName: string;
  title: string;
  description: string;
  targetValue: number;
  currentValue: number;
  unit: string;
  weight: number;
  period: string;
  status: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  assignedTo: string;
  assignedToName: string;
  assignedBy: string;
  assignedByName: string;
  projectId?: string;
  projectName?: string;
  priority: TaskPriority;
  status: TaskStatus;
  dueDate: string;
  completedDate?: string;
  estimatedHours?: number;
  actualHours?: number;
}

export enum TaskPriority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  URGENT = 'URGENT'
}

export enum TaskStatus {
  TODO = 'TODO',
  IN_PROGRESS = 'IN_PROGRESS',
  IN_REVIEW = 'IN_REVIEW',
  COMPLETED = 'COMPLETED',
  BLOCKED = 'BLOCKED'
}
