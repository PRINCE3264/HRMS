export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  errors?: string[];
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface TableColumn {
  key: string;
  label: string;
  type?: 'text' | 'number' | 'date' | 'status' | 'currency' | 'image' | 'action';
  sortable?: boolean;
  width?: string;
  align?: 'left' | 'center' | 'right';
  pipe?: string;
}

export interface TableAction {
  label: string;
  icon: string;
  color?: string;
  action: string;
  permission?: string;
  visible?: (row: any) => boolean;
}

export interface FilterOption {
  label: string;
  value: string | number;
}

export interface BreadcrumbItem {
  label: string;
  link?: string;
  icon?: string;
}
