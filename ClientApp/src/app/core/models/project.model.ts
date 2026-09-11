export enum ProjectStatus {
  NOT_STARTED = 'NOT_STARTED',
  IN_PROGRESS = 'IN_PROGRESS',
  ON_HOLD = 'ON_HOLD',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED'
}

export enum ProjectPriority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL'
}

export enum ProjectMemberStatus {
  NOT_STARTED = 'NOT_STARTED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED'
}

export interface Project {
  id: string;
  projectCode: string;
  name: string;
  description?: string;
  departmentId: string;
  departmentName?: string;
  teamId?: string;
  teamName?: string;
  teamLeadId?: string;
  teamLeadName?: string;
  status: ProjectStatus;
  priority: ProjectPriority;
  startDate: string;
  endDate?: string;
  createdByName?: string;
  memberCount: number;
  completedMemberCount: number;
  createdAt: string;
}

export interface ProjectMember {
  id: string;
  projectId: string;
  employeeId: string;
  employeeName: string;
  designation?: string;
  teamName?: string;
  roleInProject?: string;
  status: ProjectMemberStatus;
  assignedAt: string;
  assignedByName?: string;
}

export interface EmployeeOption {
  id: string;
  employeeId: string;
  name: string;
  designation?: string;
  department?: string;
  teamName?: string;
}