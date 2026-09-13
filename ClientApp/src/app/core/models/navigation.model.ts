export interface NavigationFeature {
  id: string;
  name: string;
  path: string;
  icon: string;
  description: string;
  roleId?: string;
  isActive: boolean;
  isVisibleInSidebar: boolean;
  sortOrder?: number;
  canCreate: boolean;
  canRead: boolean;
  canUpdate: boolean;
  canDelete: boolean;
}

export interface NavigationModule {
  id: string;
  name: string;
  icon: string;
  userType: string;
  roleId?: string;
  isActive: boolean;
  sortOrder?: number;
  features: NavigationFeature[];
}