import { PermissionAction } from './user.model';

export interface RoleModuleDto {
  module: string;
  actions: PermissionAction[];
}

export interface RoleDto {
  role: string;
  description: string;
  permissions: RoleModuleDto[];
}

export interface RoleCatalogDto {
  modules: string[];
  actions: string[];
}