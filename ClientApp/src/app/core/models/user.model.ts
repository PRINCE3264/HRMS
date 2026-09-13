export enum UserRole {
  ADMIN = 'ADMIN',
  HR = 'HR',
  TL = 'TL',
  EMPLOYEE = 'EMPLOYEE'
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  avatar?: string;
  department?: string;
  designation?: string;
  branch?: string;
  employeeId?: string;
  phone?: string;
  phoneNumber?: string;
  permissions: Permission[];
  token?: string;
}

export interface Permission {
  module: string;
  actions: PermissionAction[];
}

export enum PermissionAction {
  VIEW = 'VIEW',
  CREATE = 'CREATE',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
  APPROVE = 'APPROVE',
  EXPORT = 'EXPORT'
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword?: string;
  role?: UserRole;
  department?: string;
  designation?: string;
}

export interface LoginResponse {
  user: User;
  token: string;
  refreshToken: string;
  expiresIn: number;
}

