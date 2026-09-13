export interface Department {
  id: string;
  name: string;
  code: string;
  description?: string;
  imageUrl?: string;
  headId?: string;
  headName?: string;
  employeeCount: number;
  status: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Designation {
  id: string;
  title: string;
  level: string;
  departmentId?: string;
  departmentName?: string;
  minSalary?: number;
  maxSalary?: number;
  employeeCount: number;
  status: string;
}

export interface Branch {
  id: string;
  name: string;
  code: string;
  address: string;
  city: string;
  state: string;
  country: string;
  phone?: string;
  email?: string;
  imageUrl?: string;
  employeeCount: number;
  status: string;
}

export interface Team {
  id: string;
  name: string;
  departmentId?: string;
  departmentName?: string;
  teamLeadId?: string;
  teamLeadName?: string;
  memberCount?: number;
  status?: string;
  description?: string;
  activeProjectsCount?: number;
}
