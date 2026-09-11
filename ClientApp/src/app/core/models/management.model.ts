export interface ManagedEmployee {
  id: string;
  employeeCode: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string | null;
  designation?: string | null;
  department?: string | null;
  branch?: string | null;
  teamName?: string | null;
  role?: string | null;
  active: boolean;
  hasAccount: boolean;
  fullName: string;
}

export interface TeamLeadManagement {
  id: string;
  employeeCode: string;
  firstName: string;
  lastName: string;
  email: string;
  designation?: string | null;
  department?: string | null;
  teamId?: string | null;
  teamName?: string | null;
  teamMembersCount: number;
  activeProjectsCount: number;
  role?: string | null;
  active: boolean;
  hasAccount: boolean;
  fullName: string;
}